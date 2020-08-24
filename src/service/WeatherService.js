const app_id = "0c690b2545769355fe45181584fd4699";

const getWeather = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=7&units=metric&appid=${app_id}`
  );
  return await response.json();
};

export default { getWeather };
