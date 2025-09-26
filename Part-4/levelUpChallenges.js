/*
1. Write a 'for' loop that loops through the array '["green tea", "black tea", "chai", "oolong tea"]' and stops the loop when it finds "chai",
    Store all teas before "chai" in a new array named 'selectedTeas'.
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === "chai")
    {
        break;
    }
    selectedTeas.push(teas[i]);
}
console.log(selectedTeas);

/*
2. Write a 'for' loop that loops through the array '["London", "New York", "Paris", "Berlin"]' and skips "Paris".
    Store the other cities in a new array named 'visitedCities'.
*/
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let j = 0; j < cities.length; j++) {
    if (cities[j] === "Paris" || cities[j] === "paris")
    {
        continue;
    }
    visitedCities.push(cities[j]);
}
console.log(visitedCities);

/*
3. Use a 'for-of' loop to iterate through the array '[1,2,3,4,5]' and stop when the number '4' is found.
    Store the numbers before '4' in an array named 'smallNumbers'.
*/
let numbers = [1,2,3,4,5];
let smallNumbers = [];

for (const num of numbers) 
{
    if (num === 4)
    {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

/*
4. Use a 'for-of' loop to iterate through the array '["chai", "green tea", "herbal tea", "black tea"]' and skip "herbal tea".
    Store the other teas in an array named 'preferredTeas'.
*/

teas_demo = ["chai", "green tea", "herbal tea", "black tea"];
preferredTeas = [];

for (const t of teas_demo) 
{
    if (t === 'herbal tea')
    {
        continue;
    }
    preferredTeas.push(t);
}
console.log(preferredTeas);

/*
5. Use a 'for-in' loop to loop through an object containing city populations.
    Stop the loop when the population of '"Berlin"' is found and store all previous cities' populations in a new object named 'cityPopulation'.

    let citiesPopulation =
    {
        "London": 8900000,
        "New York": 8400000,
        "Paris": 2200000,
        "Berlin": 3500000
    };
*/
let citiesPopulation =
    {
        "London": 8900000,
        "New_York": 8400000,
        "Paris": 2200000,
        "Berlin": 3500000
    };

let cityNewPopulations = {};
// console.log(Object.values(citiesPopulation));
for (const city in citiesPopulation) 
{
    // key = value
    if (city == "Berlin")
    {
        break;
    }
    cityNewPopulations[city] = citiesPopulation[city];
}
console.log(cityNewPopulations);

/*
6. Use a 'for-in' loop to loop through an object containing city populations.
    Skip any city with a population below 3 million and store the rest in a new object named 'largeCities'.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
    };
*/
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

let largeCities = {};
for (const w in worldCities) 
{
    // key = value
    if (worldCities[w] <= 3000000)
    {
        continue;
    }
    largeCities[w] = worldCities[w];
}
console.log(largeCities);

/*
7. Write a 'forEach' loop that iterates through the array '["earl grey", "green tea", "chai", "oolong tea"]'.
    Stop the loop when '"chai"' is found, and store all previous tea types in an array named 'avaiableTeas'.
*/
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let avaiableTeas = [];

teaCollection.forEach(function (tea) {
    if (tea === 'chai')
    {
        return;
    }
    avaiableTeas.push(tea)
});
console.log(avaiableTeas);

/*
8. Write a 'forEach' loop that iterates through the array '["Berlin", "Tokyo", "Sydney", "Paris"]'.

    Skip '"Sydney"' and store the other cities in a new array named 'traveledCities'.
*/
let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myWorldCities.forEach(city => {
    if (city === 'Sydney') {
        return;
    }
    traveledCities.push(city)
});

console.log(traveledCities);

/*
9. Write a 'for' loop that iterates through the array '[2,5,7,9]'.
    Skip the value '7' and multiply the rest by 2. Store the results in a new array named 'doubledNumbers'.
*/

let myNumbers = [2,5,7,9];
let doubledNumbers = [];

for (let a = 0; a < myNumbers.length; a++) {
    if (myNumbers[a] == 7)
    {
        continue;
    }
    doubledNumbers.push(myNumbers[a] * 2);
}
console.log(doubledNumbers);

/*
10. Use a 'for-of' loop to iterate through the array '["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]' and stop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array named 'shortTeas'.
*/

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of myTeas) 
{
    if (tea.length > 10)
    {
        break;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);


