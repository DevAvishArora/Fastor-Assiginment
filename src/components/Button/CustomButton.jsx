import React from "react";
import { Button, CircularProgress } from "@mui/material";

const CustomButton = ({ label, onClick, loading }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        width: "330px",
        height: "56px",
        backgroundColor: "#FF6D6A",
        borderRadius: "8px",
        textTransform: "none",
        position: "relative",
      }}
      onClick={onClick}
      disabled={loading}
    >
      {!loading && label}
      {loading && (
        <CircularProgress
          size={24}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
            color: "#fff",
          }}
        />
      )}
    </Button>
  );
};

export default CustomButton;
