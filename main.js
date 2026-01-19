function initMap() {
  const map = document.getElementById("yandex-map-container");
  if (map) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;
    // Исправлено: заменено &amp; на &
    script.src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9b3c4e3cc05e93c3d563a495387dafd90a3aa81dcb3241299eab9987da8ebcf8&width=100%&height=720&lang=ru_RU&scroll=true";
    map.appendChild(script);
  }
}
function toggleIsOpen(event) {
  const headerText = event.currentTarget.querySelector('.malfunction_TV_header_text');
  const arrow_up = headerText.querySelector(".arrow_up");
  const arrow_down = headerText.querySelector(".arrow_down");

  arrow_up?.classList.toggle("active");
  arrow_down?.classList.toggle("active");
  event.currentTarget.nextElementSibling?.classList.toggle("is_open");
}

window.addEventListener("DOMContentLoaded", initMap);

const lists = document.querySelectorAll(".malfunction_TV_header_container");

lists.forEach((list) => {
  list.addEventListener("click", toggleIsOpen);
});
