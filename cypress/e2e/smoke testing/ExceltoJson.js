
var XLSX = require('xlsx')

var fs = require("fs")

// creat a work book objectxlsx

var workbook = XLSX.readFile("cypress/spreadsheat/userdata.xlsx")

//creat worksheet

var worksheet = workbook.Sheets['sheet1']

// convert xlsx to json object

var user_data = XLSX.utils.sheet_to_json(worksheet)

console.log(user_data);

fs.writeFile("cypress/fixtures/Excelltojson/userdata.json",JSON.stringify(user_data),function(err){


if(err){

    console.log(err)
    return
}
})