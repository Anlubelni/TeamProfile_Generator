const Manager = require('../lib/Manager');

test('The manager properly gets assigned the office number that was input', ()=> {

    let expectedOfficeNumber = 521;
    let manager = new Manager(null, null, null, 521)
    expect(manager.getOfficeNumber()).toBe(expectedOfficeNumber)
})

test('The manager properly gets role that was assigned', ()=> {

    let role = "Manager";
    let manager = new Manager(null, null, null)
    expect(manager.getRole()).toBe(role)
})