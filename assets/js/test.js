

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
  return json;
};


/**
 * Driving distance and drive time
 *    From shopper address to brick and mortar retailer
 * input parameters
 *    shopper address (waypoint.1)
 *    store address   (waypoint.2)
 * Pertinent keys to pull from returned JSON
 *    .resourceSets[0].resources[0].travelDistance (miles)
 *    .resourceSets[0].resources[0].travelDuration (seconds)
 *    .resourceSets[0].resources[0].travelDurationTraffic (seconds)
 */

apiURL = "https://dev.virtualearth.net/REST/v1/Routes?waypoint.1=4400+Baptist+Island+Rd+Groveland+FL+34736&waypoint.2=14222+Waterford+creek+blvd+Orlando+Fl+32828&distanceUnit=mi&o=json&c=en-GB&key=ApeHivnaztSwvGsBzGpbwnYJw9vAPSBI4LrGUh_YRYvmqZVRsrxjevRoSXGWi7M8";
var jsonTravelDistance = getAPIData(apiURL);
console.log(jsonTravelDistance);



/**
 * Target brick and mortar location search (to find closest location)
 * input parameters
 *    zipcode (zipcode of shopper)
 *    radius  (radius in miles)
 * Pertinent keys to pull from returned JSON
 *    .locations[0-N].address.address_line1
 *    .locations[0-N].address.city
 *    .locations[0-N].address.state
 *    .locations[0-N].address.postal_code
 *    .locations[0-N].location_id   (needed for product search storeid parameter)
 * 
 * REFERENCE: https://rapidapi.com/logicbuilder/api/target-com-store-product-reviews-locations-data
 */

apiURL ="https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip=34736&radius=100";
headers = {"method": "GET","headers": {"x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
var jsonTargetLocation = getAPIData(apiURL, headers);
console.log(jsonTargetLocation);



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

apiURL ="https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?store_id=3991&keyword=lamp&offset=0&limit=24&sponsored=1&rating=0";
headers = {"method": "GET","headers": {"x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
var jsonTargetProduct = getAPIData(apiURL, headers);
console.log(jsonTargetProduct);



/**
 * Walmart brick and mortar location search (to find closest location)
 * input parameters
 *    postalCode (zipcode of shopper)
 * Pertinent keys to pull from returned JSON
 *    .data.storesBySearchTerm.stores[0].adderess.postalCode
 *    .data.storesBySearchTerm.stores[0].adderess.address
 *    .data.storesBySearchTerm.stores[0].adderess.city
 *    .data.storesBySearchTerm.stores[0].adderess.state
 * 
 * REFERENCE: https://rapidapi.com/apidojo/api/walmart/
 */

apiURL ="https://walmart.p.rapidapi.com/stores/list-perferred?postalCode=34736";
headers = {"method": "GET","headers": {"x-rapidapi-host": "walmart.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
var jsonWalmartLocations = getAPIData(apiURL, headers);
console.log(jsonWalmartLocations);

//OR

apiURL ="https://walmart.p.rapidapi.com/stores/list-perferred?postalCode=34736&;preferredStoreId=2695";
headers = {"method": "GET","headers": {"x-rapidapi-host": "walmart.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
var jsonWalmartLocations = getAPIData(apiURL, headers);
console.log(jsonWalmartLocations);

/**
 * Walmart product search
 *     
 * input parameters
 * Pertinent keys to pull from returned JSON
 */

apiURL ="https://walmart.p.rapidapi.com/products/v2/list?cat_id=0&sort=price_low&page=1&query=crayola%20crayons%2024ct";
headers = {"method": "GET","headers": {"x-rapidapi-host": "walmart.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
var jsonWalmartProduct = getAPIData(apiURL, headers);
console.log(jsonWalmartProduct);
