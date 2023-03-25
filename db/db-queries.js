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
      
    viewDepartments: async function(){
        try{
            const [department] = await db.promise().query(`SELECT id, department_name FROM department`);
            return department;
        }catch(err){
            console.error(err)
        }
    },

    viewRoles: async function(){
        try{
            const [role] = await db.promise().query(`SELECT id, title, salary FROM role`);
            return role;
        }catch(err){
            console.error(err)
        }
    },

    addDepartment: async function(name){
        await db.promise().query(`INSERT INTO department (name) VALUES (?)`, name)
        console.log(`Department: ${name} has been added!`)
    },
}