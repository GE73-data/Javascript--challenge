// from data.js
var tableData = data;

// function to show date
function tableData(data) {
    let table = d3.select("#ufo-table")

    table.selectAll("tr").remove()

    // header row
    let headerRow = table.append("tr")

    headerRow.append("th").text("Date")
    headerRow.append("th").text("City")
    headerRow.append("th").text("State")
    headerRow.append("th").text("Country")
    headerRow.append("th").text("Shape")
    headerRow.append("th").text("Duration")
    headerRow.append("th").text("Comments")

    // table
    let tableBody = table.append("tbody")

    data.forEach((u) => {
        let row = tableBody.append("tr")
        row.append("td").text(u.date)
        row.append("td").text(u.city)
        row.append("td").text(u.state)
        row.append("td").text(u.country)
        row.append("td").text(u.shape)
        row.append("td").text(u.duration)
        row.append("td").text(u.comments)
    })
}

// filter by date
function handleClick() {
    let Input = d3.select("date").property("value")
    let filterDate = data.filter((u) => u.date === Input)

    tableData(filteredDate)
}

d3.select("#filter=btn").on("click", handleClick)
