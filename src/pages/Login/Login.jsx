import React, { useState } from "react";
import { TextField, Typography, Paper } from "@mui/material";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../apis/api";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleSendOtp = async () => {
    if (!isValidPhoneNumber(mobileNumber)) {
      setPhoneNumberError("Please enter a valid 10-digit mobile number");
      return;
    }
    try {
      setLoading(true);
      await registerUser(mobileNumber);
      setIsOtpSent(true);
      navigate("/otp", { state: { mobileNumber } });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const isValidPhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  return (
    <Paper
      elevation={3}
      style={{
        marginLeft: "550px",
        width: "375px",
        height: "812px",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontFamily: "Urbanist, sans-serif",
          color: "#1E232C",
          fontSize: "26px",
          fontWeight: 700,
          marginTop: "250px",
          lineHeight: "34px",
          letterSpacing: "-0.01em",
          textAlign: "left",
        }}
      >
        Enter Your Mobile Number
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontFamily: "Urbanist, sans-serif",
          color: "#8391A1",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "24px",
          textAlign: "left",
        }}
      >
        We will send you the 6 digit verification code
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Enter Your Mobile Number"
        style={{
          width: "330px",
          height: "56px",
          border: "1px solid #DADADA",
          backgroundColor: "whitesmoke",
          borderRadius: "8px",
        }}
        value={mobileNumber}
        onChange={(e) => {
          setMobileNumber(e.target.value);
          setPhoneNumberError("");
        }}
      />
      {phoneNumberError && (
        <Typography
          variant="caption"
          style={{ color: "red", marginTop: "5px", textAlign: "left" }}
        >
          {phoneNumberError}
        </Typography>
      )}
      <CustomButton
        label="Send Code"
        onClick={handleSendOtp}
        loading={loading}
      />
    </Paper>
  );
};

export default Login;
