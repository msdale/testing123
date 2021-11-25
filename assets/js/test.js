fetch("https://dev.virtualearth.net/REST/v1/Routes?waypoint.1=4400+Baptist+Island+Rd+Groveland+FL&waypoint.2=Orlando+Fl&distanceUnit=mi&o=json&c=en-GB&key=ApeHivnaztSwvGsBzGpbwnYJw9vAPSBI4LrGUh_YRYvmqZVRsrxjevRoSXGWi7M8")
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

fetch("https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip=34736&radius=100", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com",
		"x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

fetch("https://walmart.p.rapidapi.com/v2/auto-complete?term=macbook%20air", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "walmart.p.rapidapi.com",
		"x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

fetch("https://walmart3.p.rapidapi.com/store-location?zip_code=34736", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "walmart3.p.rapidapi.com",
		"x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});