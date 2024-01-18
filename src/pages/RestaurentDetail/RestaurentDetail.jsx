import React from "react";
import { IconButton, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import DemoImage from "../../assets/Harry Potter and the Sorcerer's Stone.jpg";
import StarIcon from "../../assets/Star.png";
import DiscountIcon from "../../assets/teenyicons_discount-outline.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const RestaurantDetails = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const title = queryParams.get("title");
    const image = queryParams.get("image");
    const locationDetails = queryParams?.get("location");
    const rating = queryParams.get("rating");
    const price = queryParams.get("price");

    
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/home");
  };
  return (
    <Paper
      elevation={3}
      style={{
        marginLeft: "550px",
        width: "375px",
        height: "812px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Top Half: Image */}
      <div
        style={{
          width: "100%",
          height: "50%",
          overflow: "hidden",
        }}
      >
        <IconButton
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "white",
          }}
          onClick={handleBack}
        >
          <KeyboardArrowLeftIcon style={{ color: "black" }} />
        </IconButton>
        <img
          src={image}
          alt="Restaurant"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "50%",
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
          top: "350px",
          border: "1px solid white",
          borderRadius: "30px",
          padding: "20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontWeight: 700,
              fontSize: "18px",
              fontFamily: "Urbanist, sans-serif",
              lineHeight: "21px",
            }}
          >
            {title}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={StarIcon}
              alt="Star"
              style={{ fontSize: "16px", marginRight: "5px" }}
            />
            <Typography
              variant="body2"
              style={{ fontSize: "16px", marginRight: "5px", marginTop: "3px" }}
            >
              {rating}
            </Typography>
          </div>
        </div>

        <Typography
          variant="body2"
          style={{
            fontWeight: 500,
            fontSize: "16px",
            fontFamily: "Urbanist, sans-serif",
            lineHeight: "19px",
            marginBottom: "10px",
            color: "#505259",
            marginTop: "-10px",
          }}
        >
          {locationDetails}
        </Typography>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={DiscountIcon}
            alt="Star"
            style={{ fontSize: "16px", marginRight: "5px" }}
          />
          <Typography
            variant="body2"
            style={{
              fontSize: "12px",
              marginRight: "5px",
              color: "#D39171",
              fontWeight: 600,
              fontFamily: "Urbanist, sans-serif",
              lineHeight: "14px",
            }}
          >
            4 Offers Trending
          </Typography>
        </div>

        <Typography
          variant="body2"
          style={{
            fontSize: "14px",
            marginRight: "5px",
            fontWeight: 500,
            fontFamily: "Urbanist, sans-serif",
            lineHeight: "16px",
            marginTop: "50px",
            color: "#515151",
          }}
        >
          Our delicate vanilla cake swirled with chocolate and filled with mocha
          chocolate chip cream and a layer of dark chocolate ganache
        </Typography>
      </div>
    </Paper>
  );
};

export default RestaurantDetails;
