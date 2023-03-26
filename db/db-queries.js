const mysql = require('mysql2');
require("dotenv").config()

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the database.`)
  );


module.exports = {
    // SQL query to show department names and department ids
    viewDepartments: async function(){
        try{
            const [department] = await db.promise().query(`
            SELECT 
                id, name 
            FROM department`);
            return department;
        }catch(err){
            console.error(err)
        }
    },

     // SQL query to show job title, role id, the department that role belongs to, and the salary for that role
    viewRoles: async function(){
        try{
            const [role] = await db.promise().query(`
            SELECT 
                role.id, role.title, role.salary AS salary, department.name AS department 
            FROM role 
            JOIN department 
                ON role.department_id = department.id`);
            return role;
        }catch(err){
            console.error(err)
        }
    },

    // SQL query to show employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    viewEmployees: async function(){
        try{
            const [employee] = await db.promise().query(`
            SELECT 
                employee.id, employee.first_name, employee.last_name, role.title, role.salary AS salary, department.name AS department, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
            FROM employee
            JOIN role
                ON employee.id = role.id
            JOIN department
                ON role.department_id = department.id
            LEFT JOIN employee m
                ON employee.manager_id = m.id`);
            return employee;
        }catch(err){
            console.error(err)
        }
    },

    // SQL query to add a new department to the DB, based on user input
    addDepartment: async function(name){
        await db.promise().query(`INSERT INTO department (name) VALUES (?)`, name)
        console.log(`Department: ${name} has been added!`)
    },

    // SQL query to add a new role to the DB, based on user input
    addRole: async function(){
        await db.promise().query('INSERT INTO role SET (?)', {title: answers.title, salary: answers.salary, department: answers.department})
        console.log(`Role: ${title} has been added!`)
    },

}