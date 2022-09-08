const Employee = require('../lib/Employee');

test('The employee properly gets assigned the email that was input.', ()=> {

    let email = "test@test.com";
    let employee = new Employee(null, null, "test@test.com")
    expect(employee.getEmail()).toBe(email)
})


test('The employee properly gets assigned the name that was input.', ()=> {

    let name = "test name";
    let employee = new Employee('test name', null, null)
    expect(employee.getName()).toBe(name)
})


test('The employee properly gets assigned the role that was assigned.', ()=> {

    let role = "Employee";
    let employee = new Employee(null, null, null)
    expect(employee.getRole()).toBe(role)
})


test('The employee properly gets assigned the id that was input.', ()=> {

    let id = 5231;
    let employee = new Employee(null, 5231, null)
    expect(employee.getId()).toBe(id)
})