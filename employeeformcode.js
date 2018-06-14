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
});