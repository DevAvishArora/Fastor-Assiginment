// OTP.js
import React, { useState } from "react";
import { TextField, Typography, Paper, IconButton, Link } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CustomButton from "../../components/Button/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtpAndLogin } from "../../apis/api";

const OTP = ({ isAuthenticated, setIsAuthenticated }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber;

  const handleBack = () => {
    navigate('/');
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value !== "" && index < otp.length - 1) {
      refs[index + 1].current.focus();
    }

    setOtp(newOtp);
  };

  const handleVerify = async () => {
    try {
      setLoading(true);
      const otpValue = otp.join("");
      const response = await verifyOtpAndLogin(mobileNumber, otpValue);
  
      if (response.status === "Success") {
        setIsAuthenticated(true);
        navigate('/home');
      } else {
        setError(response.error_message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendClick = () => {
    console.log("Resend clicked");
  };

  const refs = Array.from({ length: 6 }, () => React.createRef());

  return (
    <Paper
      elevation={3}
      style={{
        marginLeft: "550px",
        width: "375px",
        height: "812px",
        overflow: "hidden",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <IconButton
        style={{
          alignSelf: "flex-start",
          border: "1px solid #E8ECF4",
          width: "41px",
          height: "41px",
          marginTop: "30px",
          borderRadius: "12px",
        }}
        onClick={handleBack}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>

      <Typography
        variant="h5"
        style={{
          fontFamily: "Urbanist, sans-serif",
          color: "#1E232C",
          fontSize: "26px",
          fontWeight: 700,
          marginTop: "200px",
          lineHeight: "34px",
          letterSpacing: "-0.01em",
          textAlign: "left",
          marginLeft: "-182px",
        }}
      >
        OTP Verification
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
        Enter the 6-digit verification code we just sent to your Mobile Number.
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "360px",
        }}
      >
        {otp.map((digit, index) => (
          <TextField
            key={index}
            variant="outlined"
            margin="normal"
            inputRef={refs[index]}
            fullWidth
            style={{
              width: "48px",
              height: "56px",
              marginBottom: "10px",
              border: "1px solid #E8ECF4",
              backgroundColor: "whitesmoke",
              borderRadius: "8px",
            }}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            inputProps={{ maxLength: 1 }}
          />
        ))}
      </div>

      {error && (
        <Typography
          variant="caption"
          style={{ color: "red", marginTop: "10px", textAlign: "center" }}
        >
          {error}
        </Typography>
      )}

      <CustomButton label="Verify" onClick={handleVerify} loading={loading} />

      

      <Typography
        variant="h5"
        style={{
          fontFamily: "Urbanist, sans-serif",
          fontSize: "15px",
          color: "#1E232C",
          fontWeight: 500,
          lineHeight: "21px",
          textAlign: "center",
          letterSpacing: "-0.01em",
          marginTop: "10px",
        }}
      >
        Didn't receive the code?
        <Link
          component="button"
          variant="body2"
          onClick={handleResendClick}
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "15px",
            color: "#5574C6",
            fontWeight: 500,
            lineHeight: "21px",
            textAlign: "center",
            letterSpacing: "-0.01em",
            marginTop: "-3px",
            textDecoration: "none",
          }}
        >
          Resend
        </Link>
      </Typography>
    </Paper>
  );
};

export default OTP;
