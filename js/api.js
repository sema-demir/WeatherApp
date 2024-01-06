const API_KEY = "d3d6e45d10f9966f19a220b637c4e1e0";

async function fetchWeatherData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    );
     //console.log(response.json());
    // eger istek basarılı degilse hata fırlat
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
