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
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'End'
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
        case 'View all employees':
            await viewEmployees();
            break;
        case 'Add a department':
            await addDepartment();
            break;
        case 'Add a role':
            await addRole();
            break;
        case 'Add an employee':
            await addEmployee();
            break;
        case 'Update an employee role':
            await updateEmployeeRole();
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

// async function to view all employees
async function viewEmployees(){
    const employee = await db.viewEmployees();

    if(employee){
        console.table(employee)
    }else{
        console.log("No Employees found")
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

//async function to add a new role
async function addRole(){
    const department = await db.viewDepartments();
    const {role} = await inquirer.prompt([
        {
            type:"input",
            name: "title",
            message: "What is the title of the new role you want to add?"
        },
        {
            type:"input",
            name: "salary",
            message: "What is the salary of the new role you want to add?"
        },
        {
            type:"list",
            name: "department",
            message: "To which department the new role belongs to?",
            choices: department.map( department => ({
                name: department.name,
                value: department.id
            })
            )
        },
        
    ])

    await db.addRole(role)

    await viewDepartments();
}


 start()

