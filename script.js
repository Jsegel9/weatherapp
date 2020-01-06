$(".citybtn").on("click", function (event) {
    event.preventDefault();
    weatherCall();
})

// $(".histbtn").on("click", function (event) {
//     event.preventDefault();
//     // weatherCall2();
//     console.log((".histbtn").val());
// })

function weatherCall() {
    var city =$(".inputcity").val();
    var curweathurl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&appid=ab2b42dffa09ca26ec55a2393bf2aa3d"
    var foreurl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&appid=ab2b42dffa09ca26ec55a2393bf2aa3d"
    $.ajax({
        url: curweathurl,
        method: "GET"
    }).then(function (response) {
        var today = new Date();
        var date = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
        var foreimg = response.weather[0].icon
        var imgsrc = "http://openweathermap.org/img/wn/" + foreimg + ".png"
        console.log(response);
        console.log(response.main.temp);
        $(".forecasthead").html(response.name + " (" + date + ")" + "<img src='' class='foreimg'>");
        $(".foreimg").attr("src", imgsrc);
        $(".temp").text("Temperature: " + response.main.temp + "°");
        $(".humid").text("Humidity: " + response.main.humidity + "%");
        $(".windspd").text("Wind Speed: " + response.wind.speed + " MPH");
        $(".uvind").text("UV Index: ");
        $(".searchhist").append("<button type='button' class='histbtn'></button>");
        $(".histbtn").text(response.name);
        $(".currentweather").text(JSON.stringify(response));
    })
}
$(".histbtn").on("click", function (event) {
    event.preventDefault();
    // weatherCall2();
    console.log((".histbtn").text());
})