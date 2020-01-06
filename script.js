$(".citybtn").on("click", function (event) {
    event.preventDefault();
    weatherCall();
    // fiveDayCall();
})

function weatherCall() {
    var city =$(".inputcity").val();
    var curweathurl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&appid=ab2b42dffa09ca26ec55a2393bf2aa3d"
    var foreurl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&appid=ab2b42dffa09ca26ec55a2393bf2aa3d"
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
    $.ajax({
        url: foreurl,
        method: "GET"
    }).then(function (response) {
        var day1pic = response.list[5].weather[0].icon;
        var day2pic = response.list[13].weather[0].icon;
        var day3pic = response.list[21].weather[0].icon;
        var day4pic = response.list[29].weather[0].icon;
        var day5pic = response.list[37].weather[0].icon;
        var day1src = "http://openweathermap.org/img/wn/" + day1pic + ".png";
        var day2src = "http://openweathermap.org/img/wn/" + day2pic + ".png";
        var day3src = "http://openweathermap.org/img/wn/" + day3pic + ".png";
        var day4src = "http://openweathermap.org/img/wn/" + day4pic + ".png";
        var day5src = "http://openweathermap.org/img/wn/" + day5pic + ".png";
        console.log(response);
        $(".fivehead").text("Five Day Forecast");
        $(".day1date").text(response.list[5].dt_txt.split(" ")[0]);
        $(".day2date").text(response.list[13].dt_txt.split(" ")[0]);
        $(".day3date").text(response.list[21].dt_txt.split(" ")[0]);
        $(".day4date").text(response.list[29].dt_txt.split(" ")[0]);
        $(".day5date").text(response.list[37].dt_txt.split(" ")[0]);
        $(".day1temp").text(response.list[5].main.temp + "°");
        $(".day2temp").text(response.list[13].main.temp + "°");
        $(".day3temp").text(response.list[21].main.temp + "°");
        $(".day4temp").text(response.list[29].main.temp + "°");
        $(".day5temp").text(response.list[37].main.temp + "°");
        $(".day1humidity").text(response.list[5].main.humidity + "%");
        $(".day2humidity").text(response.list[13].main.humidity + "%");
        $(".day3humidity").text(response.list[21].main.humidity + "%");
        $(".day4humidity").text(response.list[29].main.humidity + "%");
        $(".day5humidity").text(response.list[37].main.humidity + "%");
        $(".day1img").attr("src", day1src);
        $(".day2img").attr("src", day2src);
        $(".day3img").attr("src", day3src);
        $(".day4img").attr("src", day4src);
        $(".day5img").attr("src", day5src);
    })
}


$(".histbtn").on("click", function (event) {
    event.preventDefault();
    // weatherCall2();
    console.log((".histbtn").text());
})