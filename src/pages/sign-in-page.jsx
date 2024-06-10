import { useFormik } from "formik";
import { loginValidationSchema } from "../validation/auth.validation";
import { login } from "../service/auth.service";
import Input from "../components/Input";
import { STATUS } from "../utils/constants";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export const SignInPage = () => {

    const navigate = useNavigate();
    const userLogin = async (payload) => {
        try {
            console.log("payload", payload);
            payload.email = payload.email.toLowerCase()
            const res = await login(payload);
            if (res?.status === STATUS.SUCCESS) {
                console.log("Res", res) 
                localStorage?.setItem("authToken",res?.token);
                navigate("/otp");
            }
        }
        catch (err) {
            console.error(err);
        }

    };


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: userLogin,
    });


    return (
        <div className="page">
            <form onSubmit={formik.handleSubmit} className="form">
                <h1>Sign in</h1>
                <Input
                    type="text"
                    placeholder="Enter email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.email && formik.errors.email
                            ? formik.errors.email
                            : undefined
                    }
                />
                <Input
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.password && formik.errors.password
                            ? formik.errors.password
                            : undefined
                    }
                />
                <Button name="Sign In" />
            </form>
        </div>
    )
}