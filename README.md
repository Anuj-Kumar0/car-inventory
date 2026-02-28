# car-inventory
A full-stack inventory management application built with Node.js, Express, PostgreSQL, and EJS.
This app allows users to manage car categories and their associated inventory while protecting destructive actions (update/delete) using an admin password.

Features:

1) Categories:

a) Create new car categories
b) Edit existing categories
c) Delete categories (admin password required)
d) View all categories sorted alphabetically

2) Cars:

a) Add cars inside a category
b) Edit car details (admin password required)
c) Delete cars (admin password required)
d) View cars sorted alphabetically

3)Security

a) Destructive actions (update/delete) are protected by:
b) Middleware-based admin password verification

4)Environment variables used for:

a) Database connection
b) Admin password

5) Custom error handling for:

a) 403 Forbidden
b) 404 Not Found
c) 500 Internal Server Error

UI:

Clean responsive design
Modal-based create/edit forms
Confirmation modal for delete actions
Custom styled error pages

Tech Stack:

Backend: Node.js, Express
Database: PostgreSQL
Templating Engine: EJS
Styling: CSS
Deployment: Railway
