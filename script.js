function storageInit() {
    localStorage.worktray === undefined ? localStorage.worktray = '' : false;
    localStorage.worktrayId === undefined ? localStorage.worktrayId = 0 : false;
    localStorage.employee === undefined ? localStorage.employee = '' : false;
    //localStorage.employeeId === undefined ? localStorage.employeeId = 0 : false;
    localStorage.stage === undefined ? localStorage.stage = '' : false;
    localStorage.stageId === undefined ? localStorage.stageId = 0 : false;
    localStorage.costCode === undefined ? localStorage.costCode = '' : false;
    localStorage.costCodeId === undefined ? localStorage.costCodeId = 0 : false;
    localStorage.tray === undefined ? localStorage.tray = '' : false;
    localStorage.trayId === undefined ? localStorage.trayId = 0 : false;
}

function incrementID(key) {
    localStorage[`${key}` + 'Id'] = Number(localStorage[`${key}` + 'Id']) + 1
}

class WorkTray {
    
    constructor(costCode, trayNumber, employee, description, stage, quantity, weight) {
        this.id = '',
        this.costCode = costCode,
        this.tray = trayNumber,
        this.employee = employee,
        this.description = description,
        this.stage = stage, 
        this.quantityOut = quantity,
        this.weightOut = weight,
        this.timeOut = (new Date).toString().slice(0, 24),
        this.quantityIn = 0,
        this.weightIn = 0,
        this.timeIn = '',
        this.open = true
    }

    save = () => {
        this.id = localStorage.worktrayId;
        localStorage.worktray = localStorage.worktray + JSON.stringify(this) + ";";
        incrementID('worktray');
    }

}

class Employee {

    constructor(name, id) {
        this.name = name,
        this.id = id
    }

    save = () => {
        localStorage.employee = localStorage.employee + JSON.stringify(this) + ';';
    }

}

function createEmployee(name, id) {
    const employee = new Employee(name, id);
    employee.save();
    return employee;
}

function getOneEmployee(id) {
    const len = localStorage.employee.split(';').length;
    const employees = localStorage.employee.split(';').slice(0, len - 1);
    for (let value of employees) {
        if (JSON.parse(value).id === id) {
            return JSON.parse(value);
        }
    }
    return "Not Found"
}

function getAllEmployees() {
    let output = [];
    const len = localStorage.employee.split(';').length;
    const employees = localStorage.employee.split(';').slice(0, len - 1); 
    for (let value of employees) {
        output.push(JSON.parse(value));
    }    
    return output;
}

function employeeValidation() {
    let output = [];
    for (let value of getAllEmployees()) {
        output.push(value.id);
    }
    return output;
}

class Tray {

    constructor(number, weight) {
        this.id = '',
        this.number = number,
        this.weight = weight
    }

    save = () => {
        this.id = localStorage.trayId;
        localStorage.tray = localStorage.tray + JSON.stringify(this) + ';';
        incrementID('tray');
    }

}

function createTray(number, weight) {
    const tray = new Tray(number, weight);
    tray.save();
    return tray;
}

function getOneTray(id) {
    const len = localStorage.tray.split(';').length;
    const trays = localStorage.tray.split(';').slice(0, len - 1);
    for (let value of trays) {
        if (JSON.parse(value).id === id) {
            return JSON.parse(value);
        }
    }
    return "Not Found"
}

function getAllTrays() {
    let output = [];
    const len = localStorage.tray.split(';').length;
    const trays = localStorage.tray.split(';').slice(0, len - 1); 
    for (let value of trays) {
        output.push(JSON.parse(value));
    }    
    return output;
}

function validTrayArray() {
    let output = [];
    for (let value of getAllTrays()) {
        output.push(value.number)
    }
    return output;
}

class CostCode {

    constructor(code, item, metal, month, active) {
        this.id = '',
        this.code = code,
        this.item = item,
        this.metal = metal, 
        this.month = month,
        this.active = active
    }

    save = () => {
        this.id = localStorage.costCodeId;
        localStorage.costCode = localStorage.costCode + JSON.stringify(this) + ';';
        incrementID('costCode');
    }    

}

function createCostCode(code, item, metal, month) {
    const costCode = new CostCode(code, item, metal, month);
    costCode.save();
    return costCode;
}

function getOneCostCode(id) {
    const len = localStorage.costCode.split(';').length;
    const codes = localStorage.costCode.split(';').slice(0, len - 1);
    for (let value of codes) {
        if (JSON.parse(value).id === id) {
            return JSON.parse(value);
        }
    }
    return "Not Found"
}

function getAllCostCodes() {
    let output = [];
    const len = localStorage.costCode.split(';').length;
    const codes = localStorage.costCode.split(';').slice(0, len - 1);
    for (let value of codes) {
        output.push(JSON.parse(value));
    }
    return output;
}

function validCostCodeArray() {
    let output = [];
    for (let value of getAllCostCodes()) {
        if (value.code === "") {
            output.push(value.metal)
        } else {
            output.push(value.code)
        }
    }
    return output;
}

class Stage {

    constructor(number, description) {
        this.id = '',
        this.number = number,
        this.description = description
    }

    save = () => {
        this.id = localStorage.stageId;
        localStorage.stage = localStorage.stage + JSON.stringify(this) + ';';
        incrementID('stage');
    }    

}

function createStage(number, desc) {
    const stage = new Stage(number, desc);
    stage.save();
    return stage;
}

function getOneStage(id) {
    const len = localStorage.stage.split(';').length;
    const stages = localStorage.stage.split(';').slice(0, len - 1);
    for (let value of stages) {
        if (JSON.parse(value).id === id) {
            return JSON.parse(value);
        }
    }
    return "Not Found"
}

function getAllStages() {
    let output = [];
    const len = localStorage.stage.split(';').length;
    const stages = localStorage.stage.split(';').slice(0, len - 1); 
    for (let value of stages) {
        output.push(JSON.parse(value));
    }    
    return output;    
}

function validStageArray() {
    let output = [];
    for (let value of getAllStages()) {
        output.push(value.number)
    }
    return output;
}

// ---------------------------------------

function createWorkTray(costCode, trayNumber, employee, description, stage, quantity, weight) {
    const worktray = new WorkTray(
        costCode, 
        trayNumber, 
        employee, 
        description, 
        stage, 
        quantity, 
        weight
    );
    worktray.save();
    return worktray;
}

function getOneWorktray(id) {
    const len = localStorage.worktray.split(';').length;
    const worktrays = localStorage.worktray.split(';').slice(0, len - 1);
    for (let value of worktrays) {
        if (JSON.parse(value).id === id) {
            return JSON.parse(value);
        }
    }
    return "Not Found"    
}

function getAllWorktrays() {
    let output = [];
    const len = localStorage.worktray.split(';').length;
    const worktrays = localStorage.worktray.split(';').slice(0, len - 1);
    for (let value of worktrays) {
        output.push(JSON.parse(value));
    }
    return output;
}

function getWorkTrayData() {
    
    const employee = document.getElementById('employee');
    const stage = document.getElementById('stage');
    const costCode = document.getElementById('cost-code');
    const description = document.getElementById('description');
    const tray = document.getElementById('tray');
    const qOut = document.getElementById('quantity-out');
    const wOut = document.getElementById('weight-out');

    if (validateWorkTrayData(
            costCode.value, 
            tray.value, 
            employee.value, 
            description.value, 
            stage.value, 
            qOut.value, 
            wOut.value
        )) { 
            createWorkTray(
                costCode.value, 
                tray.value, 
                employee.value, 
                description.value, 
                stage.value, 
                qOut.value, 
                wOut.value
            )
            costCode.value = ''; 
            tray.value = '';
            employee.value = '';
            description.value = '';
            stage.value = '';
            qOut.value = '';
            wOut.value = '';
            employee.focus();   
        } else {
            alert('There are errors!');
        }

}



/* Tests / Data Validation */

function validateWorkTrayData(costCode, trayNumber, employee, description, stage, quantity, weight) {
    if (
        validateCostCode(costCode) &&
        validateTrayNumber(trayNumber) &&
        validateEmployee(employee) &&
        validateDescription(description) &&
        validateStage(stage) &&
        validateQuantity(quantity) &&
        validateWeight(weight)
    ) {
        return true;
    }
    return false;
}

// TO DO: Try to figure out how it would be ok to leave cost code blank
function validateCostCode(costCode) {
    const validCodes = validCostCodeArray();
    if (validCodes.includes(costCode.toUpperCase())) {
        return true;
    }
    return false;
}

function validateTrayNumber(trayNumber) {
    trayNumber.trim() === '' ? trayNumber = "0" : false;
    const validTrayNumbers = validTrayArray()
    if (validTrayNumbers.includes(trayNumber)) {
        return true;
    }
    return false;
}

function validateEmployee(employee) {
    const validEmployees = employeeValidation();
    if (validEmployees.includes(employee)) {
        return true;
    }
    return false;
}

function validateDescription(description) {
    if (!description.toString().includes(',') && !description.toString().includes(';')) {
        return true;
    }
    return false;
}

function validateStage(stage) {
    const validStages = validStageArray();
    if (validStages.includes(stage)) {
        return true;
    }
    return false;
}

function validateQuantity(quantity) {
    if (Number.isInteger(Number(quantity)) === true) {
        if (parseInt(quantity) > 0) {
            return true;
        } 
    }
    return false;
}

function validateWeight(weight) {
    if (!Number.isNaN(Number(weight)) && Number(weight) > 0 && weight !== Infinity) {
        return true;
    } 
    return false;
}

storageInit();

function loadData() {

    let data = [
                
    ]

    for (let value of data) {
        createStage(value[0], value[1])
    }

}

// DOM

function renderEmployeeSelect() {
    const main = document.getElementById('main-content');
    main.innerHTML += 
    `
    <div class="form-group">
        <label for="employee">Employee:</label>
        <select class="form-control" id="employee">
            <option value="" selected disabled>Choose:</option>
        </select>
    </div>
    `
    const list = document.getElementById('employee');
    for (let value of getAllEmployees()) {
        list.innerHTML += `<option value="${value.id}">${value.name}</option>`
    }
}

function renderStageSelect() {
    const main = document.getElementById('main-content');
    main.innerHTML += 
    `
    <div class="form-group">
        <label for="stage">Stage:</label>
        <select class="form-control" id="stage">
            <option value="" selected disabled>Choose:</option>
        </select>
    </div>
    `
    const list = document.getElementById('stage');
    for (let value of getAllStages()) {
        list.innerHTML += `<option value="${value.number}">${value.number} - ${value.description}</option>`
    }    
}

function renderTraySelect() {
    const main = document.getElementById('main-content');
    main.innerHTML += 
    `
    <div class="form-group">
        <label for="tray">Tray:</label>
        <select class="form-control" id="tray">
            <option value="" selected disabled>Choose:</option>
        </select>
    </div>
    `
    const list = document.getElementById('tray');
    for (let value of getAllTrays()) {
        list.innerHTML += `<option value="${value.number}">${value.number} (${value.weight} dwt)</option>`
    }     
}

function renderInput(label, id) {
    const main = document.getElementById('main-content');
    main.innerHTML += 
    `
    <div class="form-group">
        <label for="${id}">${label}:</label>
        <input class="form-control" id="${id}" autocomplete="off"/>
    </div>
    `
}

function renderButton(text, option) {
    const main = document.getElementById('main-content');
    const options = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link']
    if (options.includes(option) === false) {
        option = 'primary'
    }
    main.innerHTML += 
    `
    <button id="save-button" class="btn btn-${option}">${text}</button>
    `
}

renderEmployeeSelect();
renderStageSelect();

renderInput('Cost Code / Metal', 'cost-code');
renderInput('Description', 'description');

renderTraySelect();
renderInput('Quantity Out', 'quantity-out');
renderInput('Weight Out', 'weight-out');

renderButton('SAVE' );

const button = document.querySelector('#save-button');
button.addEventListener('click', getWorkTrayData)


/*
the below describes the "post" function we would want

So basically you work all day until everything is clear. Usually there is something left over that isn't clear. 
    1. You take the objects that are clear and export them to a csv file (or something)
    2. You take the objects that are not clear 
    3. Overwrite the entire worktray container with the return from 2 so that they are the only jobs left open
*/

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function renderOpenWorkTrayScreen() {
    const main = document.getElementById('main-content');
    removeChildren(main);
    main.innerHTML +=
    `
        <h1 style="float: right;">Open Worktrays</h1>
        <a onclick="location.reload()"><h1>Create Worktray</h1></a>
    `
}


function postEndOfDay() {

}

function exportCsv(data) {
// 'data' is an array of WorkTray objects

    var csv = 'record,cost_code_or_metal,description,employee,quantity_in,quantity_out,stage,time_in,time_out,tray,weight-in,weight_out\n';
    data.forEach(function(row) {
        csv = csv + row.id + "," + 
        row.costCode + "," +
        row.description + "," +
        row.employee + "," +
        row.quantityIn + "," +
        row.quantityOut + "," +
        row.stage + "," +
        row.timeIn + "," +
        row.timeOut + "," +
        row.tray + "," +
        row.weightIn + "," +
        row.weightOut + "," + "\n"
    });

    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'people.csv';
    hiddenElement.click();

}