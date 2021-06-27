// from data.js
var tableData = data;
console.log(tableData);

// References to tbody
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "duration", "comments"]

// Input the data into html
var Data = (dataInput) => {
    datatInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[columns])
        )
    });
}

Data(tableData);

// Setting up Filter Button
button.on("click", () => {
    d3.event.Default();

    var Date = inputDate.property("value").trim();
    console.log(Date);

    var filterDate = tabelData.filter(tableData => tableData.datetime === Date);

    $tbody.html("");

    let response = {
        filterDate
    }

    if(response.filterDate.length !== 0) {
        Data(filterDate);
    }
        else {
            $tbody.append("tr").append("td").text("No Sightings Here")
        }
})

// // // table body
// var tablebody = d3.select("tablebody")

// // // Sighting values for each column
// tableData.forEach(function(ufoSighting) {
//     console.log(ufoSighting);

// //  Append table row for sighting object
//     var row= tbody.append("tr");

// //  Use entries to console.log each UFO Sighting
//     Object.entries(ufoSighting).forEach(function([key, vale]) {
//         console.log(key,value);

// //         //Append a cell to the row
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

// // Select button
// var button = d3.select("#filter-btn");
// button.on("click", function() {
//     tbody.html("");

// //     // Select the date 
//     var inputElement = d3.select("#datetime");
// //     // Get the value property
//     var inputValue = inputElement.property("value");
//     console.log(inputValue);
// //     // Filter Data with datetime = input
//     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
//     console.log(filteredData);

//     filteredData.forEach(function(selections) {
//     console.log(selections);
// //     // Append one table row for each UFO sighting
//     var row = tbody.append("tr");

// //     Object.entries(selections).forEach(function([key,value]) {
//         console.log(key,value);
//         var cell = row.append("td");cell.text(value);
//     })
//     })
// })

// // from data.js
// var tableData = data;

//     headerRow.append("th").text("Date")
//     headerRow.append("th").text("City")
//     headerRow.append("th").text("State")
//     headerRow.append("th").text("Country")
//     headerRow.append("th").text("Shape")
//     headerRow.append("th").text("Duration")
//     headerRow.append("th").text("Comments")

//     // table body
//     let tableBody = table.append("tbody")

//     tableData.forEach(function(u) => {
//         let row = tableBody.append("tr")
//         row.append("td").text(u.date)
//         row.append("td").text(u.city)
//         row.append("td").text(u.state)
//         row.append("td").text(u.country)
//         row.append("td").text(u.shape)
//         row.append("td").text(u.duration)
//         row.append("td").text(u.comments)
//     })
// }

// // filter by date
// function handleClick() {
//     let Input = d3.select("date").property("value")
//     let filterDate = data.filter((u) => u.date === Input)

//     tableData(filteredDate)
// }

// d3.select("#filter=btn").on("click", handleClick)
// // Assign the data from `data.js` to a descriptive variable
// var people = data;

// // Select the button
// var button = d3.select("#button");

// // Select the form
// var form = d3.select("#form");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#patient-form-input");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(people);

//   var filteredData = people.filter(person => person.bloodType === inputValue);

//   console.log(filteredData);

//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var mean = math.mean(ages);
//   var median = math.median(ages);
//   var mode = math.mode(ages);
//   var variance = math.variance(ages);
//   var standardDeviation = math.std(ages);

//   // Then, select the unordered list element by class name
//   var list = d3.select(".summary");

//   // remove any children from the list to
//   list.html("");

//   // append stats to the list
//   list.append("li").text(`Mean: ${mean}`);
//   list.append("li").text(`Median: ${median}`);
//   list.append("li").text(`Mode: ${mode}`);
//   list.append("li").text(`Variance: ${variance}`);
//   list.append("li").text(`Standard Deviation: ${standardDeviation}`);
// };
