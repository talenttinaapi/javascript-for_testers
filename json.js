let jsonData = pm.response.json();
let sixthElementImages = jsonData.products[5]["images"];
/*
The above statement is equivalent to the following-
let sixthElementImages = jsonData["products"][5]["images"];
*/
console.log("sixthElementImages values: ", sixthElementImages);


