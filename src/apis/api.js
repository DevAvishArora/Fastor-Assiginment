const API_BASE_URL = "https://staging.fastor.in/v1/pwa";

export const registerUser = async (phoneNumber) => {
  const apiUrl = `${API_BASE_URL}/user/register`;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: phoneNumber,
      dial_code: "+91",
    }),
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
};

export const verifyOtpAndLogin = async (phoneNumber, otp) => {
    const apiUrl = `${API_BASE_URL}/user/login`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phoneNumber,
        dial_code: "+91",
        otp: otp,
      }),
    });
    
    if (!response.ok) {
      throw new Error("API request failed");
    }
  
    return response.json();
  };

  export const getRestaurantsByCityId = async (cityId, authToken) => {
    const apiUrl = `https://staging.fastor.in/v1/m/restaurant?city_id=${cityId}`;
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      throw new Error("API request failed");
    }
  
    return response.json();
  };