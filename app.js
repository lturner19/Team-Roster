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


//generates employee id automatically
let id = 1

//empty array to hold team members
let team = [];

//creates the list for the user to pick which team member should be added
const userQuestions = () => {
    inquirer.prompt([{
        type: "list",
        name: "employeeType",
        message: "Please build your team",
        choices: ["Manager", "Engineer", "Intern", "Quit"] //allows user to choose which employee to add to team
    }]).then(function (input) {

        //determines which questions should be generated based on user selection
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
            default: //if the user chooses to quit, the html will be generated
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


        const manager = new Manager(input.managerName, id++, input.managerEmail, input.managerOfficeNumber);

        //pushing the manager to the empty global team array
        team.push(manager);

        console.log(team);
        userQuestions(); //calling the userQuestions functions to generate the prompt 
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
            name: "college",
            message: "What college does your intern attend?"
        }
    ]).then(function (input) {
        const intern = new Intern(input.internName, id++, input.internEmail, input.college);
        team.push(intern);
        console.log(team);
        userQuestions();
    });
}

const addEngineer = () => {
    inquirer.prompt([{
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

            //pushing new team member to the empty array
            team.push(engineer);

            console.log(team);
            userQuestions();
        });
}

const generateHtml = () => { //when the user is done inputing team members, this function will generate html 
    //holds the complete team selected by
    let html = "";

    //looks for selections, if applicable, and adds them to the html 
    for (let i = 0; i < team.length; i++) {

        if (team[i].getRole() === "Manager") {
            html += ManagerHtml(team[i]);
        } else if (team[i].getRole() === "Engineer") {
            html += EngineerHtml(team[i]);
        } else if (team[i].getRole() === "Intern") {
            html += InternHtml(team[i]);
        }
    } //generating the index file, inserts the teams
    fs.writeFile("./index.html", teamHtml(html), function (err) {
        if (err) {
            //only shows if there is an error
            console.log(err);
        } // will be shown if file was successfully created
        console.log("Successfully written to index.html");
    })
}


userQuestions();