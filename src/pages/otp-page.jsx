import React, { useState } from "react";
import { generateOtp } from "../service/auth.service";
import "./style.scss";

const OtpPage = () => {

    const [loading, setLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState("")
    const handleOnGenerateOtp = async () => {
        try {
            setLoading(true);
            const res = await generateOtp();
            setApiResponse(res?.message);
            setLoading(false);
            setTimeout(() => {
                setApiResponse("");
            }, 3000)
        }
        catch (err) {
            console.error(err);
        }
    }


    return (
        <div className="page">
            <div className="otp-container">
                <h1>Get Otp</h1>
                <button onClick={handleOnGenerateOtp}>Generate OTP</button>
                <div>{loading ? "Loading..." : apiResponse}</div>
            </div>

        </div>
    );
}

export default OtpPage;
