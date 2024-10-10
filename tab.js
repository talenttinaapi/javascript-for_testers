// Assign response data in a JSON object
let jsonData = pm.response.json();

// Assign the 6th object to sixthProduct
let sixthProduct = jsonData["products"][5]; 
console.log("sixthProduct: ", sixthProduct);

// Assigning value to a pre-request script environment variable 
pm.environment.set("eighthProduct", jsonData["products"][7]);
console.log("eighthProduct: ", pm.environment.get("eighthProduct"));
console.log("PI: ", pm.environment.get("PI"));