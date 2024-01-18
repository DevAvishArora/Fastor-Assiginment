import React from "react";
import { Typography, IconButton, SvgIcon } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DiscountIcon from "../../assets/teenyicons_discount-outline.png";
import { Link } from "react-router-dom";

const AdditionalCard = ({
  image,
  title,
  keywords,
  location,
  rating,
  price,
}) => {
  const renderKeywords = () => {
    return keywords.map((keyword, index) => (
      <Typography
        key={index}
        variant="subtitle2"
        style={{
          fontFamily: "Urbanist, sans-serif",
          fontSize: "14px",
          color: "#949494",
          marginRight: "5px",
        }}
      >
        {keyword}
      </Typography>
    ));
  };
 
  return (
    <Link
    to={`/restaurant-details?title=${title}&image=${image}&location=${location.location_locality},${location.state_name}&rating=${rating}&price=${price}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
          width: "360px",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "90px", height: "90px", borderRadius: "15px" }}
        />
        <div style={{ marginLeft: "40px", flex: 1 }}>
          <Typography
            variant="h6"
            style={{
              fontFamily: "Urbanist, sans-serif",
            }}
          >
            {title}
          </Typography>
          <div style={{ display: "flex" }}>{renderKeywords()}</div>
          <Typography
            variant="subtitle2"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "14px",
              color: "#949494",
              marginRight: "5px",
            }}
          >
            {location.location_locality},{location.state_name}
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <StarIcon style={{ fontSize: "16px", marginRight: "5px" }} />
            <Typography
              variant="subtitle2"
              style={{ color: "#949494", marginRight: "15px" }}
            >
              {rating}
            </Typography>
            <AttachMoneyOutlinedIcon
              style={{ fontSize: "16px", marginLeft: "120px" }}
            />
            <Typography variant="subtitle2" style={{ color: "#949494" }}>
              {price}
            </Typography>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="subtitle2"
              style={{ color: "#949494", marginRight: "15px" }}
            >
              Popularity
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "#949494", marginLeft: "70px" }}
            >
              Cost for Two
            </Typography>
          </div>
        </div>
      </div>
</Link>
  );
};

export default AdditionalCard;
