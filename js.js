let btn = document.getElementById("btn");
btn.addEventListener("click", functn);

let row = 1;


function functn() {

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    if (name.trim() == "" || surname.trim() == "" || age.trim() == "") {
        alert("please full of them");
        return;
    }
    let tbl = document.getElementById("tbl");

    let newRow = tbl.insertRow(row);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = surname;
    cell3.innerHTML = age;

    row++;
}