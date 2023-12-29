// zaman dilimini belirle
function convertTimeStamp(timeStamp, timezone) {
  // saniyeden saaate dönüştür
  const convertTimezone = timezone / 3600;

  //tarih olustur
  const date = new Date(timeStamp * 1000);

  // tarih ve saat secenegi
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timezone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
      convertTimezone
    )}`,
    // zaman dilimini
    hour12: true,

    // 12 saat formatında gösterilsin mi
  };
  // tarihi ve saati dnustür
  return date.toLocaleString("en-US", options);
}

// ulke kodunu ulke adına çevirir
function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  // ulke kodunu alına bu Intl.DisplayNames orneği kullanarak ulke adına donuyor
  console.log(regionNames.of(country));
  return regionNames.of(country);
}

export { convertTimeStamp, convertCountryCode };
