CREATE DATABASE ers;

\c ers

CREATE TABLE employee_details(employee_id SERIAL PRIMARY KEY, employee_role VARCHAR(50), employee_email VARCHAR(50), employee_password VARCHAR(50), employee_name VARCHAR(50));
	
CREATE TABLE expense_details(expense_id SERIAL PRIMARY KEY, expense_amount BIGINT, employee_id INT, request_date TIMESTAMP DEFAULT NOW(), 
								expense_status VARCHAR(50), adjudicated_date TIMESTAMP, approve_deny VARCHAR(50));

INSERT INTO employee_details(employee_role, employee_email, employee_password, employee_name) VALUES('associate', 'mario@gmail.com', '1111', 'Mario');

INSERT INTO employee_details(employee_role, employee_email, employee_password, employee_name) VALUES('associate', 'travis@gmail.com', '2222', 'Travis');

INSERT INTO employee_details(employee_role, employee_email, employee_password, employee_name) VALUES('manager', 'john@gmail.com', '3333', 'John');

INSERT INTO employee_details(employee_role, employee_email, employee_password, employee_name) VALUES('manager', 'tim@gmail.com', '4444', 'Tim');

INSERT INTO expense_details(expense_amount, employee_id, expense_status) VALUES(250, 1, 'pending');

INSERT INTO expense_details(expense_amount, employee_id, expense_status) VALUES(500, 2, 'pending');

INSERT INTO expense_details(expense_amount, employee_id, expense_status, adjudicated_date) VALUES(70, 1, 'resolved', NOW());

INSERT INTO expense_details(expense_amount, employee_id, expense_status, adjudicated_date) VALUES(150, 2, 'resolved', NOW());
									