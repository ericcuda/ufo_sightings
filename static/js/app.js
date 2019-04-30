// assign the data from the data.js to a descriptive constiable
const tableData = data;

//assign the tbody to a a descriptive
const tbody = d3.select("tbody")

//assign columns
const columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Select the html id of the Filter Table button
const filter = d3.select("#filter-btn");

filter.on("click", function () {

    // clear the html tbody for any new data
    tbody.html("");

    // prevent the page from refreshing
    d3.event.preventDefault();

    //select the input date and get the html node
    const inputDate = d3.select('#datetime');
    //get the value property of the input date, trim any spaces
    const inputDateValue = inputDate.property("value").trim();

    //select the input city and get the html node
    const inputCity = d3.select('#city');
    //get the value property of the input city, trim spaces and make all lower case
    const inputCityValue = inputCity.property("value").trim().toLowerCase();

    //select the input state and get the html node
    const inputState = d3.select('#state');
    //get the value property of the input state, trim spaces and make all lower case
    const inputStateValue = inputState.property("value").trim().toLowerCase();

    //select the input country and get the html node
    const inputCountry = d3.select('#country');
    //get the value property of the input country, trim spaces and make all lower case
    const inputCountryValue = inputCountry.property("value").trim().toLowerCase();

    //select the input shape and get the html node
    const inputShape = d3.select('#shape');
    //get the value property of the input shape, trim spaces and make all lower case
    const inputShapeValue = inputShape.property("value").trim().toLowerCase();

    //show the tableData
    console.log(tableData);

    let filteredData  // defines filteredData array, that can change in code
    let userInput = false  //init boolean to false, can change in code based on user input

    if (inputDateValue != "") {
        filteredData = tableData.filter(sighting => sighting.datetime === inputDateValue)
        console.log(`DateEntered: ${inputDateValue}`)
        userInput = true
    }
    else {
        filteredData = tableData    // set it to filteredData for rest of filtering
        console.log("No date entered")
        //console.log(filteredData)
    }
    if (inputCityValue != "") {
        filteredData = filteredData.filter(sighting => sighting.city === inputCityValue)
        console.log(`CityEntered: ${inputCityValue}`)
        userInput = true
    }
    else {
        console.log("No city entered")
        //console.log(filteredData)
    }
    if (inputStateValue != "") {
        filteredData = filteredData.filter(sighting => sighting.state === inputStateValue)
        console.log(`StateEntered: ${inputStateValue}`)
        userInput = true
    }
    else {
        console.log("No state entered")
        //console.log(filteredData)
    }
    if (inputCountryValue != "") {
        filteredData = filteredData.filter(sighting => sighting.country === inputCountryValue)
        console.log(`CountryEntered: ${inputCountryValue}`)
        userInput = true
    }
    else {
        console.log("No country entered")
        //console.log(filteredData)
    }
    if (inputShapeValue != "") {
        filteredData = filteredData.filter(sighting => sighting.shape === inputShapeValue)
        console.log(`ShapeEntered: ${inputShapeValue}`)
        userInput = true
    }
    else {
        console.log("No shape entered")
        //console.log(filteredData)
    }

    // construct table on html
    if (userInput != true) {
        //user chose no criteria....alert them...just show all data
        window.alert("No criteria chosen.  We will now show ALL UFO Sightings!")
        tableData.forEach(sighting => {
            var row = tbody.append("tr")
            columns.forEach(column => {
                row.append("td").text(sighting[column])
            });
        });
    } else {
        //show filtered data
        filteredData.forEach(sighting => {
            var row = tbody.append("tr")
            columns.forEach(column => {
                row.append("td").text(sighting[column])
            });
        });
        //console.log(filteredData.length)
        if (filteredData.length == 0) {
            //user had nothing return from filtered data...alert them
            window.alert("No sightings matched your criteria.  Please try again.  Or, to see ALL sightings, enter NO CRITERIA, and simply click 'Filter Table' button")
        }
    }
});
    // would like to later replace lists with drop downs as an enhancement, and have them autofill
    // with data values at page load..to eliminate user entry.
