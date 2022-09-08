const Intern = require('../lib/intern');

test('The intern properly gets assigned the school that was input', ()=> {

    let school = "School of Hard Knocks";
    let intern = new Intern(null, null, null, "School of Hard Knocks")
    expect(intern.getSchool()).toBe(school)
})

test('The intern properly gets role that was assigned', ()=> {

    let role = "Intern";
    let intern = new Intern(null, null, null)
    expect(intern.getRole()).toBe(role)
})