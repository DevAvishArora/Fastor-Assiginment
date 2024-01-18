import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Paper, Typography, IconButton, SvgIcon } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import CircleIcon from "@mui/icons-material/Circle";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Percentage from "../../assets/percentage.png";
import Wallet from "../../assets/wallet.png";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CardSliderItem from "../../components/CardSliderItem/CardSliderItem";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AdditionalCard from "../../components/RestaurentCard/RestaurentCard";
import { getRestaurantsByCityId } from "../../apis/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const authResponseString = localStorage.getItem("authResponse");
  const user = JSON.parse(authResponseString);
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const cityId = user.city_id;
      const authToken = user.token;
      const data = await getRestaurantsByCityId(cityId, authToken);
      setRestaurants(data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };
  
  const InvertedTriangleIcon = (props) => (
    <SvgIcon
      {...props}
      style={{ transform: "rotate(180deg)", width: "20px", height: "20px" }}
    >
      <polygon points="8,0 0,10 16,10" />
    </SvgIcon>
  );
  const [sliderPosition, setSliderPosition] = React.useState(0);

  const scrollLeft = () => {
    const container = document.getElementById("card-container");
    if (container) {
      setSliderPosition(sliderPosition - container.clientWidth);
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("card-container");
    if (container) {
      setSliderPosition(sliderPosition + container.clientWidth);
    }
  };
 
  const canScrollLeft = sliderPosition < 0;
  const canScrollRight = sliderPosition > -(restaurants.length - 1) * 375;
 
  

  return (
    <Paper
      elevation={3}
      style={{
        marginLeft: "550px",
        width: "375px",
        height: "auto",
        overflow: "hidden",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        style={{
          width: "100%",
          height: "80px",
          marginTop: "-20px",
          padding: "20px 20px 0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "150px",
              marginTop: "30px",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#949494",
                fontFamily: "Urbanist, sans-serif",
                lineHeight: "21px",
                textAlign: "center",
                letterSpacing: "0.02em",
              }}
            >
              Pre Order From
            </Typography>
            <Person2OutlinedIcon
              style={{
                fontSize: "20px",
                marginRight: "10px",
                color: "#949494",
              }}
            />
          </div>

          <Typography
            variant="h6"
            style={{
              fontWeight: 600,
              color: "black",
              fontFamily: "Urbanist, sans-serif",
              lineHeight: "21px",
              textAlign: "center",
              letterSpacing: "0.02em",
            }}
          >
            {user.last_known_location?.city_name || "Connaught Place"}
          </Typography>
        </div>
        <div
          style={{ display: "flex", marginTop: "-18px", marginRight: "-10px" }}
        >
          <IconButton style={{ marginBottom: "5px", marginRight: "-8px" }}>
            <SquareIcon style={{ fontSize: "12px" }} />
          </IconButton>
          <IconButton style={{ marginBottom: "5px", marginRight: "-12px" }}>
            <CircleIcon style={{ fontSize: "12px" }} />
          </IconButton>
          <IconButton style={{ marginTop: "-15px" }}>
            <InvertedTriangleIcon style={{ fontSize: "12px" }} />
          </IconButton>
        </div>
      </Paper>

      <div
        style={{
          width: "100%",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "60%" }}>
          <Typography
            variant="h6"
            style={{
              fontSize: "30px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#949494",
              fontFamily: "Urbanist, sans-serif",
              lineHeight: "21px",
              letterSpacing: "0.02em",
            }}
          >
            {user.user_name}
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontWeight: 600,
              color: "black",
              fontFamily: "Urbanist, sans-serif",
              width: "200px",
              lineHeight: "21px",
              letterSpacing: "0.02em",
              fontSize: "19px",
            }}
          >
            Let's explore this evening
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "10px" }}>
            <img
              src={Percentage}
              alt="Percentage"
              style={{ fontSize: "30px", color: "#949494", width: "70px" }}
            />
          </div>
          <div style={{ marginRight: "10px" }}>
            <img
              src={Wallet}
              alt="Wallet"
              style={{ fontSize: "30px", color: "#949494", width: "70px" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontWeight: 600,
            color: "black",
            fontFamily: "Urbanist, sans-serif",
            lineHeight: "21px",
            letterSpacing: "0.02em",
            marginTop: "4px",
          }}
        >
          Your Taste
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="subtitle1"
            style={{
              fontSize: "16px",
              color: "#949494",
              fontWeight: 600,
              fontFamily: "Urbanist, sans-serif",
              lineHeight: "21px",
              letterSpacing: "0.02em",
              marginRight: "10px",
              marginTop: "-5px",
            }}
          >
            see all
          </Typography>
          <IconButton
            style={{
              padding: "3px",
              backgroundColor: "grey",
              marginTop: "-5px",
            }}
          >
            <ArrowForwardIosOutlinedIcon style={{ fontSize: "12px" }} />
          </IconButton>
        </div>
      </div>

      <div
        id="card-container"
        style={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(${sliderPosition}px)`,
            transition: "transform 0.5s ease",
          }}
        >
          {restaurants.map((restaurant, index) => (
            <div key={index} style={{ marginRight: "10px" }}>
              <CardSliderItem
                image={restaurant.images?.[0]?.url}
                title={restaurant.restaurant_name}
                location={
                  restaurant.location || "Unknown Location"
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "10px", textAlign: "center" }}>
        {canScrollLeft && (
          <IconButton onClick={scrollRight} style={{ marginRight: "10px" }}>
            <ArrowBackIosOutlinedIcon
              style={{ position: "absolute", right: "150px", top: "-120px" }}
            />
          </IconButton>
        )}
        {canScrollRight && (
          <IconButton onClick={scrollLeft}>
            <ArrowForwardIosOutlinedIcon
              style={{ position: "absolute", left: "150px", top: "-120px" }}
            />
          </IconButton>
        )}
      </div>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        style={{ marginTop: "20px" }}
      >
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <img
              src={restaurant.images?.[0]?.url}
              alt={`carousel-${restaurant.id}`}
              style={{
                width: "100%",
                height: "170px",
                border: "1px solid black",
                borderRadius: "30px",
              }}
            />
          </div>
        ))}
      </Carousel>

      <div
        style={{
          width: "100%",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontWeight: 600,
            color: "black",
            fontFamily: "Urbanist, sans-serif",
            lineHeight: "21px",
            letterSpacing: "0.02em",
            marginTop: "4px",
          }}
        >
          Popular Ones
        </Typography>
      </div>
      {restaurants.map((restaurant, index) => (
     <AdditionalCard
     key={index}
     image={restaurant.images?.[0]?.url}
     title={restaurant.restaurant_name}
     keywords={["Cakes", "Pastry", "Pastas"]}
     location={restaurant.location || "Unknown Location"}
     rating={restaurant.rating?.restaurant_avg_rating}
     price={restaurant.avg_cost_for_two}
     restaurantDetails={{
       image: restaurant.images?.[0]?.url,
       title: restaurant.restaurant_name,
       keywords: ["Cakes", "Pastry", "Pastas"],
       location: restaurant.location || "Unknown Location",
       rating: restaurant.rating?.restaurant_avg_rating,
       price: restaurant.avg_cost_for_two,
     }}
   />
      ))}
    </Paper>
  );
};

export default Home;
