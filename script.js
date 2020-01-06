$(".citybtn").on("click", function (event) {
    event.preventDefault();
    weatherCall()
})

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
        // console.log(response.weather[0].icon);
        $(".forecasthead").html(response.name + " (" + date + ")" + "<img src='' class='foreimg'>");
        $(".foreimg").attr("src", imgsrc);
        $(".currentweather").text(JSON.stringify(response));
    })
}

