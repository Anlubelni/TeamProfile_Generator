const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Array to push responses

const teamMembers = [];

// Prints the html page
function generateHTML() {
  let htmlBody = " ";
  for (i = 0; i < teamMembers.length; i++) {
    let roleSpecificInfo = "";
    let teamMemberRole = teamMembers[i].getRole();
    switch (teamMemberRole) {
      case "Manager":
        roleSpecificInfo = `<div class="roleSpecificInfo">Office: ${teamMembers[
          i
        ].getOfficeNumber()}</div>`;
        break;
      case "Intern":
        roleSpecificInfo = `<div class="roleSpecificInfo">School: ${teamMembers[
          i
        ].getSchool()}</div>`;
        break;
      case "Engineer":
        roleSpecificInfo = `<div class="roleSpecificInfo">Github: ${teamMembers[
          i
        ].getGitHub()}</div>`;
        break;
    }

    htmlBody =
      htmlBody +
      `
        <div class="teamMemberContainer ${teamMemberRole}">
            <div class="header">
                <div class="name">${teamMembers[i].getName()}</div>
                <div class="role">${teamMemberRole}</div>
            </div>
            <div class="body">
                <div class="id">ID: ${teamMembers[i].getId()}</div>
                <div class="email">Email: ${teamMembers[i].getEmail()}</div>
                ${roleSpecificInfo}
            </div>

        </div>

        `;
  }

  fs.writeFile(
    "TeamProfile.html",
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./reset.css">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            My Team
        </header>
        <main>        
            ${htmlBody}
        </main>
        <script src="./index.js"></script>
    </body>
    
    </html>`,
    (err) => (err ? console.error(err) : console.log("Team Profile HTML Generated!!"))
  );
}

// Initializes the team profile generator, prompting for the manager's information
function initializeTeamProfileGenerator() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "Welcome to the Team Profile Generator, let us start creating your Team Profile. First off, we need a manager. Please enter your manager's name",
        name: "managerName",
      },

      {
        type: "input",
        message: "Next, please and your manager's ID number.",
        name: "managerId",
      },

      {
        type: "input",
        message: "Next, please enter your manager's email.",
        name: "managerEmail",
      },

      {
        type: "input",
        message: "Lastly, please enter your manager's office number.",
        name: "managerOffice",
      },
    ])
    .then((response) => {
      console.log(response);
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.managerOffice
      );
      teamMembers.push(manager);
      createTeam();
    });
}

// Prompts for the intern's information.
function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the intern's name.",
        name: "internName",
      },
      {
        type: "input",
        message: "Please enter the intern's ID number.",
        name: "internId",
      },
      {
        type: "input",
        message: "Please enter the intern's email address.",
        name: "internEmail",
      },
      {
        type: "input",
        message: "Please enter the intern's school.",
        name: "internSchool",
      },
    ])
    .then((response) => {
      console.log(response);
      const intern = new Intern(
        response.internName,
        response.iinternIdd,
        response.internEmail,
        response.internSchool
      );
      teamMembers.push(intern);
      createTeam();
    });
}

// CREATES THE ENGINEER INFO
function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the engineer's name.",
        name: "name",
      },

      {
        type: "input",
        message: "Please enter the engineer's ID number.",
        name: "id",
      },

      {
        type: "input",
        message: "Please enter the engineer's email address.",
        name: "email",
      },

      {
        type: "input",
        message: "Pleas enter the engineer's Github",
        name: "github",
      },
    ])
    .then((response) => {
      console.log(response);
      const enginieer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      teamMembers.push(enginieer);
      createTeam();
    });
}

// Prompts for more cards
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "Thank you for the information. Now, what team member would you like to add?",
        name: "addEmployees",
        choices: ["Engineer", "Intern", "I'm finished, please generate the HTML file!"],
      },
    ])
    .then((response) => {
      switch (response.addEmployees) {
        case "Engineer":
          promptEngineer();
          break;
        case "Intern":
          promptIntern();
          break;
        case "I'm finished, please generate the HTML file!":
          generateHTML();
          break;
      }
    });
}

initializeTeamProfileGenerator();
