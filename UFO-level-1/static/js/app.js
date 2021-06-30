//data set
var tableData = data;

// table body
var tbody = d3.select("tbody")

// Sighting values for each column
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);

//  Append table row for sighting object
    var row= tbody.append("tr");

//  Use entries to console.log each UFO Sighting
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);

//  Append a cell to the row
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select button
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");

//Prevent the page from refreshing
    d3.event.preventDefault();

//     Select the date 
    var inputElement = d3.select("#datetime");

//     Get the value property
    var inputValue = inputElement.property("value");
    console.log(inputValue);

//    Filter Data with datetime = input
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(selections) {
    console.log(selections);

//   Append one table row for each UFO sighting
    var row = tbody.append("tr");

//  Object.entries(selections).forEach(function([key,value]) {
        console.log(key,value);
        var cell = row.append("td");cell.text(value);
    });
    })

//Click function
function handleClick() {

    //Date and time
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //Filter
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    buildTable(filteredData);
}

//Filter with button press
d3.selectAll("#filter-btn").on("click", handleClick);

//Build Table
// buildTable(tableData);


