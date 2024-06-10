import React from "react";
import { useFormik } from "formik";
import { signup } from "../service/auth.service";
import Input from "../components/Input";
import { registerValidationSchema } from "../validation/auth.validation";
import { STATUS } from "../utils/constants";
import "./style.scss";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";



const SignUpPage = () => {

    const navigate = useNavigate();
    const submitRegister = async (payload) => {
        payload.email = payload.email?.toLowerCase();
        try {
            const res = await signup(payload);
            console.log("res", res);
            if (res?.status === STATUS.SUCCESS) {
                navigate("/login");
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            email: '',
            password: '',
        },
        validationSchema: registerValidationSchema,
        onSubmit: submitRegister,
    });

    return (
        <div className="page sign-up">
            <form onSubmit={formik.handleSubmit} className="form">
                <h1>Create Account</h1>
                <Input
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
                />

                <Input
                    type="number"
                    placeholder="Enter your Mobile number"
                    id="mobile"
                    name="mobile"
                    onChange={formik.handleChange}
                    value={formik.values.mobile}
                    onBlur={formik.handleBlur}
                    error={formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : undefined}
                />

                <Input
                    type="email"
                    placeholder="Enter your email address"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
                />
                <Input
                    type="password"
                    placeholder="Choose a password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
                />
                <Button type="submit" name="Sign Up" />
            </form>
        </div>
    );
}

export default SignUpPage;
