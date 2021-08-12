//data set
var tableData = data;

// table body
var tbody = d3.select("tbody")
function buildTable(incomingdata) {
    tbody.html("")
    // Sighting values for each column
    incomingdata.forEach(function (ufoSighting) {
        
        //  Append table row for sighting object
        var row = tbody.append("tr");

        //  Use entries to console.log each UFO Sighting
        Object.entries(ufoSighting).forEach(function ([key, value]) {
            
            //  Append a cell to the row
            var cell = row.append("td");
            cell.text(value);
        });
    });
}


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
buildTable(tableData);



