
                
$.getJSON("https://api.ipify.org?format=json", function(data) {
    $("#IP").html(data.ip);
})

 function getLocation() {


    

    const url = 'https://ipinfo.io/122.161.87.155/geo';

    async function getData (url) {

        const response = await fetch(url);
        userData = await response.json();
        console.log(userData);
    }


 }

 let user = {};

 const fetchUser = async () => {
    try {
        const response = await fetch("https://ipinfo.io/175.101.36.95/geo"),
            data = await response.json();
        user = data.results[0];

    }catch(error) {
        console.error("Error in Fetching User",error);
    }
}

    $.getJSON(" https://ipinfo.io/(${175.101.36.95})/geo", function(data) {
    $("#IP").html(data.ip);
    $("#hostname").html(data.hostname);
    $("#city").html(data.city);
    $("#region").html(data.region);
    $("#country").html(data.country);
    $("#loc").html(data.loc);
    $("#org").html(data.org);
    $("#postal").html(data.postal);
    $("#timezone").html(data.timezone);
})

