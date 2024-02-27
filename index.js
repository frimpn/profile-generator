const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { error } = require("console");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = []

function manager(){

 inquirer.prompt([

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

   
]).then(managerInput => {
let manager = new Manager(managerInput.name,managerInput.id,managerInput.email,managerInput.officeNumber)

//onsole.log(managerInfo)
teamMembers.push(manager)
// console.log(teamMembers)

menu()
})

}


function engineer(){

    inquirer.prompt([
    
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
    
       
    ]).then( engineerInput=>{
    
    let engineer = new Engineer(engineerInput.name,engineerInput.id,engineerInput.email,engineerInput.gitHub)
    
    
    teamMembers.push(engineer)

    menu()
  })
    
    
    
    }

    function intern(){

          inquirer.prompt([
        
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
        
           
        ]).then(internInput=>{
        
        let intern = new Intern(internInput.name,internInput.id,internInput.email,internInput.school)
        
        
        teamMembers.push(intern)
        
        menu()
        })
    
        }
        
    
function menu(){

     inquirer.prompt([{

        type:'list',
        name: 'menu',
        message: 'please pick an option?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']


    }]).then(menuOptions =>{


    if(menuOptions.menu === 'Add an engineer'){
        engineer()
    }else if(menuOptions.menu === 'Add an intern'){
        intern()
    }else{
        createHtml()
    }

})
    


}


function createHtml(){
    const html = render(teamMembers)

    fs.writeFile('team.html',html,(err)=>{
        if(err){
        console.log(err)
        } else{
            console.log('Html file generated successfully')
        }
    })
}

manager()

