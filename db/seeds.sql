INSERT INTO department (name)
VALUES  ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES  ('Lead Engineer', '150000.00', 1),
        ('Software Engineer', '120000.00', 1),
        ('Accountant Manager', '160000.00', 2),
        ('Accountant', '125000.00', 2),
        ('Lawyer', '190000.00', 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Pam', 'Beesly', 1, null),
        ('Michael', 'Scott', 2, 1),
        ('Dwight', 'Schrute', 3, null),
        ('Tobey', 'Flenderson', 4, 3),
        ('Jim', 'Halpert', 5, null);

