// from data.js
var tableData = data;
// YOUR CODE HERE!
var table = d3.select("tbody");

function assemble(data){
    table.html("");
    data.forEach( r => {
        var row = table.append("tr");

        Object.values(r).forEach( content => {
            var val = row.append("td");
            val.text(content);
        });
    });
}

var filterBtn = d3.select("#filter-btn");

function click(){
    d3.event.preventDefault();
    var dt = d3.select("#datetime").property("value");
    var st = d3.select("#state").property("value");
    var ci = d3.select("#city").property("value");
    var co = d3.select("#country").property("value");
    var filtered = tableData;
    console.log(dt);
    if (dt){
        var filtered = filtered.filter( row => row.datetime === dt)
    }
    if (st){
        var filtered = filtered.filter( row => row.state === st)
    }
    if (ci){
        var filtered = filtered.filter( row => row.city === ci)
    }
    if (co){
        var filtered = filtered.filter( row => row.county === cp)
    } assemble(filtered);

} assemble (tableData);

filterBtn.on("click", click)
