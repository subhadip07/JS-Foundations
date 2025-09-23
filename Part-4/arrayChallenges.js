/*
1. Describe an array named `teaFlavors` that contains the strings "green tea", "black tea", and "oolong tea".
    Access the first element of the array and store it in a variable named 'firsttea'.
*/
let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firsttea = teaFlavors[0];
console.log(firsttea);

/*
2. Declare an array named 'cities' containing "London", "Tokyo", "Paris" and "New York". 
    Access the third element in the array and store it in a variable named 'favoriteCity'.
*/

let cities =  ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];
console.log(favoriteCity);

/*
3. You have an array named 'teaTypes' containing "herbal tea", "white tea", and "masala chai".
    Change the second element of the array to "jasmine tea".
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

/*
4. Declare an array named 'citiesVisited' containing "Mumbai" and "Sydney"
    Add "Berlin" to the array using the 'push' method
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

/*
5. You have an array named 'teaOrders' with "chai", "iced tea", "matcha", and "earl grey".
    Remove and store it in a variable named 'lastOrder'
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(lastOrder);

/*
6. You have an array named 'popularTeas' containing "green tea", "oolong tea", and "chai".
    Create a soft copy of this array named 'softCopyTeas'.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
console.log(softCopyTeas);

/*
7. You have an array named 'topCities' containing "Berlin", "Singapore", and "New York".
    Create a hard copy of this array named 'hardCopyCities'.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; // ... -> hard copy
topCities.pop();
console.log(hardCopyCities);

/*
8. You have two arrays: 'europeanCities' containing "Paris" and "Rome", and 'asianCities' containing "Tokyo" and "Bangkok".
    Merge these two arrays into a new array named 'WorldCities'.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let WorldCities = europeanCities.concat(asianCities);
console.log(WorldCities);

/*
9. You have an array named 'teaMenu' containing "masala chai", "oolong tea", "green tea", and "earl grey".
    Find the length of the array and store it in a variable named 'menuLength'.
*/

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength);

/*
10. You have an array named 'cityBucketList' containing "Kyoto", "London", "Cape Town", and "Vancouver".
    Check if "London" is in the array and store the result in a varible named 'isLondonInList'.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
