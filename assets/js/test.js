

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

/*
  NOTE

   Mark will wrap the below calls to the 3 different APIs in each of there own functions that...

   1) Take as input parameters those listed for each API call shown below.
   2) Execute the appropriate API query as listed below.
   3) Perform any data transformations that must occur before the data values can be displayed
      on the page.
   4) Return a JSON object containing only the pertinent properly formatted keys/value pairs,
      ready to be displayed on the page.
*/



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

apiURL ="https://walmart.p.rapidapi.com/stores/list?postalCode=34736";
headers = {"method": "GET","headers": {"x-rapidapi-host": "walmart.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
var jsonWalmartLocations = getAPIData(apiURL, headers);
console.log(jsonWalmartLocations);

//OR

apiURL ="https://walmart.p.rapidapi.com/stores/list-preferred?postalCode=34736&preferredStoreId=2695";
headers = {"method": "GET","headers": {"x-rapidapi-host": "walmart.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
var jsonWalmartLocations = getAPIData(apiURL, headers);
console.log(jsonWalmartLocations);

/**
 * Walmart product search
 * input parameters
 *    query (descriptive terms of item) 
 * Pertinent keys to pull from returned JSON
 *    .data.search.searchResult.itemStacks[0].items[0].name (descriptive name of item) 
 *    .data.search.searchResult.itemStacks[0].items[0].imageInfo.thumbnailUrl (jpeg URL) 
 *    .data.search.searchResult.itemStacks[0].items[0].priceInfo.currentPrice.price or priceString
 */

apiURL ="https://walmart.p.rapidapi.com/products/v2/list?cat_id=0&sort=price_low&page=1&query=crayola+crayons+24+count";
headers = {"method": "GET","headers": {"x-rapidapi-host": "walmart.p.rapidapi.com","x-rapidapi-key": "9813878aa1msh7c70fcdc9bbf8a6p1e1f78jsn1ff70bded748"}}; 
var jsonWalmartProduct = getAPIData(apiURL, headers);
console.log(jsonWalmartProduct);
