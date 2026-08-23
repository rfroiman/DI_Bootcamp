function insertRow() {

    let table = document.getElementById("sampleTable");

    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    let rowNumber = table.rows.length;

    cell1.textContent = "Row" + rowNumber + " cell1";
    cell2.textContent = "Row" + rowNumber + " cell2";

}