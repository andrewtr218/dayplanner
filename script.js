// document.getElementById("tableFrame").createElement("Table");
// document.querySelector("Table");


// for (let i = 0; i < 8; i++) {
//         // table += `<div class="row"><div class="col c1">"${i}"</div><div class="col c2">"${i}"</div><div class="col c3">"${i}"</div></div><br>`;
//         var row = createElement("tr").innerText(`this is row ${i + 1}`)
//         tableJava.append(row)

// };


// document.getElementById("tableFrame").append(tableJava)

var table = $('<table>');

for(i=0; i<8; i++){
    var row = $('<tr>').addClass('row' + i);
        for(j=0; j<3; j++){
            var col = $('<td>').addClass("col" + j).text("col " + j);
            row.append(col);
        };

    table.append(row);
};


$('#tableFrame').append(table);

