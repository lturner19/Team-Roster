const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const ManagerHtml = require("./Develop/templates/manager");
const EngineerHtml = require("./Develop/templates/engineer");
const InternHtml = require("./Develop/templates/intern");
const teamHtml = require("./Develop/templates/team");
//generates the
let id = 1;
let team = [];

//creates the list for the user to pick which team member should be added
const userQuestions = () => {
    inquirer.prompt([{
        type: "list",
        name: "employeeType",
        message: "Which type of team member would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "Quit"] //allows user to choose which employee to add to team
    }]).then(function (input) {

        switch (input.employeeType) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                generateHtml();
                break;
        }
    });
}

//allows user to input manager's info
const addManager = () => {
    inquirer.prompt([{
            type: "input",
            name: "managerName",
            message: "What is your manager's name?"
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is your manager's office number?"
        },

    ]).then(function (input) {

        //obtaining user input from questions answered
        const manager = new Manager(input.managerName, id++, input.managerEmail, input.managerOfficeNumber);

        //pushing the manager to the empty global team array
        team.push(manager);

        console.log(team);
        userQuestions(); //calling the userQuestions functions to generate the employee list
    });

}

const addIntern = () => {
    inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "What is your intern's name?"
        },

        {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What school does your intern attend?"
        }
    ]).then(function (input) {
        const intern = new Intern(input.internName, id++, input.internEmail, input.school);
        team.push(intern);
        console.log(team);
        userQuestions();
    });
}

const addEngineer = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is your engineer's GitHub profile name?"
            }
        ])
        .then(function (input) {
            const engineer = new Engineer(input.engineerName, id++, input.engineerEmail, input.engineerGitHub);

            team.push(engineer);

            console.log(team);
            userQuestions();
        });
}

const generateHtml = () => { //when the user is done inputing team members, this function will generate html 
    let html = "";
    let finalHtml = teamHtml(team);


    for (let i = 0; i < team.length; i++) { //this will allow the team members to be concated in the team.html 

        if (team[i].getRole() === "Manager") {
            html += ManagerHtml(team[i]);
        } else if (team[i].getRole() === "Engineer") {
            html += EngineerHtml(team[i]);
        } else if (team[i].getRole() === "Intern") {
            html += InternHtml(team[i]);
        }
    }
    fs.writeFile("./team.html", finalHtml, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Successfully written to team.html");
    })
}


userQuestions();