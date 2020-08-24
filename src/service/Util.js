import sunny from "../assets/images/sunny.png";
import wind from "../assets/images/wind.png";
import cloudy from "../assets/images/cloudy.png";
import rain from "../assets/images/rain.png";
import shiny from "../assets/images/shiny.png";
import tornado from "../assets/images/tornado.png";
import snow from "../assets/images/snow.png";
import thunder from "../assets/images/thunder.png";

const getIconWithWeather = (weather) => {
  if (weather === "Thunderstorm") return thunder;
  else if (weather === "Drizzle") return rain;
  else if (weather === "Rain") return rain;
  else if (weather === "Snow") return snow;
  else if (weather === "Atmosphere") return tornado;
  else if (weather === "Clear") return sunny;
  else if (weather === "Clouds") return cloudy;
  return null;
};

export default { getIconWithWeather };
