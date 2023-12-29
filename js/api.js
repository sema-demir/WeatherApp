const API_KEY = "a4f29481afdc9c07521c3bbf7c8337f3";

async function fetchWeatherData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    // console.log(response.json());
    // eger istek basarılı değilse hata fırlat
    if (!response.ok) {
      throw new Error("İstek basarılı degil");
    }
    // apiden gelen yanıtı JSON formatına donusturur ve geri dondurur
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
export default fetchWeatherData;
