var database = firebase.database();

$("#add-user").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();
    employeeName = $("#name-input").val().trim();
    employeeRole = $("#role-input").val().trim();
    startDate = $("#date-input").val().trim();
    rate = $("#rate-input").val().trim();
    console.log(employeeName);
    console.log(employeeRole);
    console.log(startDate);
    console.log(rate);

    database.ref().push({
        employeeName: employeeName,
        employeeRole: employeeRole,
        startDate: startDate,
        rate: rate
    });

   displayEmployee(employeeName, employeeRole, startDate, rate);

});



function displayEmployee(name, role, start, rate) {
    let worked = 0;
    let billed = 0;

    $('#full-employee-list').html(`
    <table class="table">
    <tr>
        <th>Employee Name</th>
        <th>Role</th>
        <th>Start Date</th>
        <th>Months Worked</th>
        <th>Monthly Rate ($)</th>
        <th>Total BIlled ($)</th>
    </tr>
    `)

    $('#full-employee-list').append(`
    <tr>
        <td>${name}</td>
        <td>${role}</td>
        <td>${start}</td>
        <td>${worked}</td>
        <td>${rate}</td>
        <td>${billed}</td>
    </tr>
    `)

    $('#full-employee-list').append(`
    </table>`)    
}

