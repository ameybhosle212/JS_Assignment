// Class Employee To store all values of Employees
class Employee{
    constructor(name,address,Employee_id,designation){
        this.name = name
        this.address = address
        this.Employee_id = Employee_id
        this.designation = designation
    }
}


// Array to store all Employee Object that is been created .
var AllEmployee = [];


// It is called When user add Employee and Employee Object is created with user Data and added in AllEmployee Array
// addEditOptionsInSelect function is called which adds Option in Select tag in Edit Employee Field as the data is added
// And AddRow Function is called after that To add Data in View Employee Table Field
function AddEmployee(){
    // Get Values from User to create Employee .
    let name = document.getElementById("name").value;
    let address = document.getElementById("Address").value;
    let Employee_id = document.getElementById("Employee_id").value;
    let designation = document.getElementById("Designation").value;
    // Checks if Employee Id existed or not .
    let result = AllEmployee.find(value => value.Employee_id === parseInt(Employee_id));
    // If employee Id Exited the alert the user
    if(result){
        alert("CHANGE EMPLOYEE ID")
    }else{
        // Create New Employee Object and store in Array
        let employee = new Employee(name,address,parseInt(Employee_id),designation);
        AllEmployee.push(employee);
        addEditOptionsInSelect()
        AddRows()
        document.getElementById("name").value = "";
        document.getElementById("Address").value = "";
        document.getElementById("Employee_id").value = "";
        document.getElementById("Designation").value = "";
    }
}


// addEditOptionsInSelect function is called which adds Option in Select tag in Edit Employee Field as the data is added
function addEditOptionsInSelect() {
    if(AllEmployee.length != 0) {
        let lastElement = AllEmployee[AllEmployee.length - 1];
        document.getElementById("edit").innerHTML = document.getElementById("edit").innerHTML + `<option value="${lastElement.Employee_id}">${lastElement.name}</option`
    }
}


// EditEmp is used when We select value of the Employee to edit and it puts data in input tags to Edit .
function EditEmp() {
    let selectBox = document.getElementById("edit");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    let result = AllEmployee.find(value => value.Employee_id === parseInt(selectedValue));
    if(result){
        document.getElementById("name1").value = result.name;
        document.getElementById("Address1").value = result.address;
        document.getElementById("Employee_id1").value = result.Employee_id;
        document.getElementById("Designation1").value = result.designation;
    }
}


// On Editing the Data ChangeEmployee is called on click button and it changes the Data as provided by user .
// After changes are stored in array , it removes all option from select of edit div and refreshes new changes in select's option using
// RefreshSelectInEdit function and refresh the change in View using RefreshViewEmployee function .
function ChangeEmployee() {
    //  Get name address employee id , designation from user
    let name = document.getElementById("name1").value;
    let address = document.getElementById("Address1").value;
    let Employee_id = document.getElementById("Employee_id1").value;
    let designation = document.getElementById("Designation1").value;
    // Find the unique employe with his employee id
    let result = AllEmployee.findIndex(value => value.Employee_id === parseInt(Employee_id));
    // store change in the update employee .
    AllEmployee[result].name = name;
    AllEmployee[result].address = address;
    AllEmployee[result].designation = designation;
    document.getElementById("name1").value = "";
    document.getElementById("Address1").value = "";
    document.getElementById("Employee_id1").value = "";
    document.getElementById("Designation1").value = "";
    let selectedBox = document.getElementById("edit")
    selectedBox.selectedIndex = 0;
    RefreshSelectInEdit();
    RefreshViewEmployee();
}


// AddRow Function is called To add Data in View Employee Table Field .
function AddRows(){
    let tb = document.getElementById("table").insertRow(1 + AllEmployee.length - 1)
    let x = tb.insertCell(0)
    let y = tb.insertCell(1)
    let z = tb.insertCell(2)
    let m = tb.insertCell(3)
    if(AddEmployee.length){
        x.innerHTML = AllEmployee[0].name;
        y.innerHTML = AllEmployee[0].Employee_id;
        z.innerHTML = AllEmployee[0].address;
        m.innerHTML = AllEmployee[0].designation;
    }else{
        x.innerHTML = AllEmployee[AllEmployee.length - 1].name;
        y.innerHTML = AllEmployee[AllEmployee.length - 1].Employee_id;
        z.innerHTML = AllEmployee[AllEmployee.length - 1].address;
        m.innerHTML = AllEmployee[AllEmployee.length - 1].designation;
    }
}


// Refresh the change in View using RefreshViewEmployee function .
function RefreshViewEmployee() {
    let tb = document.getElementById("table");
    for (let index = AllEmployee.length ; index > 0 ; index--) {
        tb.deleteRow(index)
    }
    for (let index1 = 0; index1 < AllEmployee.length; index1++) {
        tb = document.getElementById("table").insertRow(1+index1);
        let x = tb.insertCell(0)
        let y = tb.insertCell(1)
        let z = tb.insertCell(2)
        let m = tb.insertCell(3)
        x.innerHTML = AllEmployee[index1].name;
        y.innerHTML = AllEmployee[index1].Employee_id;
        z.innerHTML = AllEmployee[index1].address;
        m.innerHTML = AllEmployee[index1].designation;
    }
}


// It shows green around Add Employee if selected and others with White .
// It hides all the divs except ShowAddEmployee 
function ShowEmployee121() {
    document.getElementById("adddddd").style.backgroundColor = "#00ff00"
    document.getElementById("viewwww").style.backgroundColor = "#ffffff"
    document.getElementById("editttt").style.backgroundColor = "#ffffff"
    document.getElementById("ShowViewEmployee").style.visibility = "hidden";
    document.getElementById("ShowAddEmployee").style.visibility = "visible";
    document.getElementById("ShowEditEmployee").style.visibility = "hidden";
}


// It shows green around Edit Employee if selected and others with White .
// It hides all the divs except ShowEditEmployee 
function EditEmployee121() {
    document.getElementById("ShowEditEmployee").style.position = "absolute"
    document.getElementById("ShowEditEmployee").style.top = "100px"
    document.getElementById("adddddd").style.backgroundColor = "#ffffff"
    document.getElementById("viewwww").style.backgroundColor = "#ffffff"
    document.getElementById("editttt").style.backgroundColor = "#00ff00"
    document.getElementById("ShowEditEmployee").style.visibility = "visible";
    document.getElementById("ShowViewEmployee").style.visibility = "hidden";
    document.getElementById("ShowAddEmployee").style.visibility = "hidden";
}


// It shows green around View Employee if selected and others with White .
// It hides all the divs except ShowViewEmployee 
function ViewEmployee121() {
    document.getElementById("ShowViewEmployee").style.position = "absolute"
    document.getElementById("ShowViewEmployee").style.top = "100px"
    document.getElementById("adddddd").style.backgroundColor = "#ffffff"
    document.getElementById("viewwww").style.backgroundColor = "#00ff00"
    document.getElementById("editttt").style.backgroundColor = "#ffffff"
    document.getElementById("ShowViewEmployee").style.visibility = "visible";
    document.getElementById("ShowAddEmployee").style.visibility = "hidden";
    document.getElementById("ShowEditEmployee").style.visibility = "hidden";
}


// This Function Refreshes the Select Optio inside the Edit
// Whenever the Employee Data is changed Then It will Update the Select Option With Updated Data
function RefreshSelectInEdit() {
    let x = document.getElementById("edit");
    let i, L = x.options.length - 1;
    for(i = L; i >= 0; i--) {
        x.remove(i);
    }
    let opto = document.createElement("option")
    opto.text = "--SELECT--";
    opto.value = "SELECT";
    x.appendChild(opto);
    for(let m=0;m<AllEmployee.length;m++){
        let myOption = document.createElement("option");
        myOption.text = AllEmployee[m].name;
        myOption.value = AllEmployee[m].Employee_id;
        x.appendChild(myOption);
    }
}