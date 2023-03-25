// Imports the properties of inquirer and mysql2.
const inquirer = require('inquirer');
const db = require("./db/db-queries");
require("console.table");

//async start function
async function start(){
    const {action} = await inquirer.prompt ([
         {
            type: "list", 
            name: "action",
            message: "What would you like to do?",
            choices: [
                'View all departments',
                'View all roles',
                'Add a department',
             ]
         }
     ])
 
     switch(action){
        case 'View all departments':
            await viewDepartments();
            break;
        case 'View all roles':
             await viewRoles();
             break;
        case 'Add a department':
            await addDepartment();
            break;
        default:
             console.log("the end")
     }
 }

 //async function to view all departments
 async function viewDepartments(){
    const department = await db.viewDepartments();

    if(department){
        console.table(department)
    }else{
        console.log("No Departments found")
    }

    start()
};

//async function to view all roles
async function viewRoles(){
    const role = await db.viewRoles();

    if(role){
        console.table(role)
    }else{
        console.log("No Roles found")
    }

    start()
}

//async function to add a department
async function addDepartment(){
    const {name} = await inquirer.prompt([
        {
            type:"input",
            name: "name",
            message: "What is the name of the department you want to add?"
        }
    ])

    await db.addDepartment(name)

    await viewDepartments();
}


 start()

