# TRACK - YOUR - EMPLOYEE

![Badge](https://img.shields.io/badge/license-MIT-green?style=plastic&logo=appveyor)

## Table of Content
#### * [Project Desctiption](#description)
#### * [Additional Requirement](#requirements)
#### * [Deployed Application](#application)
#### * [Demo Video](#video)
#### * [Installation](#installation)
#### * [Usage](#usage)
#### * [Tests](#tests)
#### * [License](#license)


## Project Description
The scope of project is to create a comand-line Employee Tracker application to manage a comany's employee datase using Node.js, Inquirer, and MySQL. 

### User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

### Acceptance Criteria
GIVEN a command-line application that accepts user input:

- WHEN I start the application, THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.
- WHEN I choose to view all departments, THEN I am presented with a formatted table showing department names and department ids.
- WHEN I choose to view all roles, THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role.
- WHEN I choose to view all employees, THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
- WHEN I choose to add a department, THEN I am prompted to enter the name of the department and that department is added to the database. 
- WHEN I choose to add a role, THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database.
- WHEN I choose to add an employee, THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.
- WHEN I choose to update an employee role, THEN I am prompted to select an employee to update and their new role and this information is updated in the database. 
 
 
## Additional Requirements
The application must use MySQL2 package to connect the database and perfrom queries, and the console.table package to print MySQL rows to the console. 


## Deployed Application
N/A


## Demo Video
[Demo Video]()


## Installation
- User needs to install [node.js (version 18.15.0 LTS)](https://nodejs.org/en/).
- To use the application user has to list [inquirer (version 8.2.4)](https://www.npmjs.com/package/inquirer/v/8.2.4), [MySQL2 (version 3.2.0)](https://www.npmjs.com/package/mysql2) and [console.table (version 0.10.0)](https://www.npmjs.com/package/console.table) as dependencies in the package.json file.


## Usage



## Tests
At this time no Unit Tests available to test the application functionalities. 


## Contribution



## License
Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
