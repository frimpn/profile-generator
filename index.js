const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { error } = require("console");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = []

function manager(){

let managerInput = inquirer.prompt([

    {
    type:'input',
    name: 'name',
    message: "what is the team manager's name?"
    },
    {
        type:'input',
        name:'id',
        message: "what is the team manager's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "what is the team manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "what is the team manager's office number?"

    }

   
])

let managerInfo = new Manager(managerInput.name,managerInput.id,managerInput.email,managerInput.officeNumber)


teamMembers.push(managerInfo)

menu()

}

function engineer(){

    let engineerInput = inquirer.prompt([
    
        {
        type:'input',
        name: 'name',
        message: "what is the team engineer name?"
        },
        {
            type:'input',
            name:'id',
            message: "what is the team engineer ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "what is the team engineer email?"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "what is the team engineer gitHub?"
    
        }
    
       
    ])
    
    let engineerInfo = new Engineer(engineerInput.name,engineerInput.id,engineerInput.email,engineerInput.gitHub)
    
    
    teamMembers.push(engineerInfo)
    
    menu()
    
    }

    function intern(){

        let internInput = inquirer.prompt([
        
            {
            type:'input',
            name: 'name',
            message: "what is the intern's name?"
            },
            {
                type:'input',
                name:'id',
                message: "what is the team intern ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "what is the team intern email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "what school does the intern go to??"
        
            }
        
           
        ])
        
        let internInfo = new Manager(internInput.name,internInput.id,internInput.email,internInput.school)
        
        
        teamMembers.push(internInfo)
        
        menu()
        
        }
        
    
function menu(){

    let menuOptions = inquirer.prompt([{

        type:'list',
        name: 'menu',
        message: 'please pick an option?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']


    }])


    if(menuOptions.choices === 'Add an engineer'){
        engineer()
    }else if(menuOptions.choices === 'Add an intern'){
        intern()
    }else{
        createHtml()
    }

    


}


function createHtml(){
    const html = render(teamMembers)

    fs.writeFile(outputPath,html,(err)=>{
        console.log(err)
    })
}