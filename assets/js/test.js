

var apiURL;
var headers;

const getAPIData = async (apiURL, headers=null) => {
  var response;
  if (headers) {
    response = await fetch(apiURL, headers);
  } else {
    response = await fetch(apiURL);
  }
  if (!response.ok) {
    alert('Error: ' + response.statusText);
  }
  const json = await response.json();
  return await json;
};


/**
 * Driving distance and drive time
 * input parameters
 *    start address (waypoint.1)
 *    end address   (waypoint.2)
 * Pertinent keys to pull from returned JSON
 *    .resourceSets[0].resources[0].travelDistance (miles)
 *    .resourceSets[0].resources[0].travelDuration (seconds)
 *    .resourceSets[0].resources[0].travelDurationTraffic (seconds)
 */


/*fetch("https://dev.virtualearth.net/REST/v1/Routes?waypoint.1=4400+Baptist+Island+Rd+Groveland+FL+34736&waypoint.2=14222+Waterford+creek+blvd+Orlando+Fl+32828&distanceUnit=mi&o=json&c=en-GB&key=ApeHivnaztSwvGsBzGpbwnYJw9vAPSBI4LrGUh_YRYvmqZVRsrxjevRoSXGWi7M8")
  .then(response => response.json())
    .then(data => console.log(data))
  .catch(err => {
	  console.error(err);
});*/

apiURL = "https://dev.virtualearth.net/REST/v1/Routes?waypoint.1=4400+Baptist+Island+Rd+Groveland+FL+34736&waypoint.2=14222+Waterford+creek+blvd+Orlando+Fl+32828&distanceUnit=mi&o=json&c=en-GB&key=ApeHivnaztSwvGsBzGpbwnYJw9vAPSBI4LrGUh_YRYvmqZVRsrxjevRoSXGWi7M8";
console.log(await getAPIData(apiURL));


//https://rapidapi.com/logicbuilder/api/target-com-store-product-reviews-locations-data


/**
 * Target store location search (to find closest location)
 * input parameters
 *    zipcode (zipcode of shopper)
 *    radius  (radius in miles)
 * Pertinent keys to pull from returned JSON
 *    .locations[0-N].address.address_line1
 *    .locations[0-N].address.city
 *    .locations[0-N].address.state
 *    .locations[0-N].address.postal_code
 *    .locations[0-N].location_id   (needed for product search storeid parameter)
 */

/*fetch("https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip=34736&radius=100", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com",
		"x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});*/

apiURL ="https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip=34736&radius=100";
headers = {"method": "GET","headers": {"x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
console.log(await getAPIData(apiURL, headers));

/**
 * Target product search
 * input parameters
 *    store_id (location_id from store location search)     
 *    keyword  (describing the product, can be multiple words)
 *    sort_by  (use "pricelow" ...will sort low to high...then take the first off list)
 * Pertinent keys to pull from returned JSON
 *    .products[0].item.enrichment.images.primary_image_url
 *    .products[0].item.product_description
 *    .products[0].price.current_retail or .products[0].price.formatted_current_price
 */

/*fetch("https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?store_id=3991&keyword=lamp&offset=0&limit=24&sponsored=1&rating=0", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com",
		"x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});*/


apiURL ="https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?store_id=3991&keyword=lamp&offset=0&limit=24&sponsored=1&rating=0";
headers = {"method": "GET","headers": {"x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
console.log(await getAPIData(apiURL, headers));



//https://rapidapi.com/apidojo/api/walmart/

// walmart store locator




/*fetch("https://walmart.p.rapidapi.com/stores/list?postalCode=75204", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "walmart.p.rapidapi.com",
		"x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});*/

apiURL ="https://walmart.p.rapidapi.com/stores/list?postalCode=34736";
headers = {"method": "GET","headers": {"x-rapidapi-host": "walmart.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
console.log(await getAPIData(apiURL, headers));

//OR


/*fetch("https://walmart3.p.rapidapi.com/store-location?zip_code=34736", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "walmart3.p.rapidapi.com",
		"x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});

apiURL ="https://walmart3.p.rapidapi.com/store-location?zip_code=34736";
headers = {"method": "GET","headers": {"x-rapidapi-host": "walmart3.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
console.log(await getAPIData(apiURL, headers));*/

//walmart product
/*fetch("https://walmart.p.rapidapi.com/products/v2/list?cat_id=0&sort=price_low&page=1&query=crayola%20crayons%2024ct", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "walmart.p.rapidapi.com",
		"x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});*/

apiURL ="https://walmart.p.rapidapi.com/products/v2/list?cat_id=0&sort=price_low&page=1&query=crayola%20crayons%2024ct";
headers = {"method": "GET","headers": {"x-rapidapi-host": "walmart.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
console.log(await getAPIData(apiURL, headers));
