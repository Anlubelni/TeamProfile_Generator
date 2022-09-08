const Engineer = require('../lib/Engineer');

test('The engineer properly gets assigned the github that was input', ()=> {

    let github = "github.com/testaccount";
    let engineer = new Engineer(null, null, null, "github.com/testaccount")
    expect(engineer.getGitHub()).toBe(github)
})

test('The engineer properly gets assigned the role that was input', ()=> {

    let role = "Engineer";
    let engineer = new Engineer(null, null, null)
    expect(engineer.getRole()).toBe(role)
})