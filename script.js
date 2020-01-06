$(".citybtn").on("click", function (event) {
    event.preventDefault();
    weatherCall()
})

function weatherCall() {
    var city =$(".inputcity").val();
    var weatherurl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&appid=ab2b42dffa09ca26ec55a2393bf2aa3d"
    console.log(city);
    $.ajax({
        url: weatherurl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log("response")
    })
}


