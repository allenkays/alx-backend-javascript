# 0x05. NodeJS Basics
## Tasks
### 0. Executing basic javascript with Node JS

File 0-console.js with function named displayMessage that prints in STDOUT the string argument.


### 1. Using Process stdin

Program named 1-stdin.js that is executed through command line:

    - It displays the message Welcome to Holberton School, what is your name? (followed by a new line)
    - The user is able to input their name on a new line
    - The program displays Your name is: INPUT
    - When the user ends the program, it displays This important software is now closing (followed by a new line)

### 2. Reading a file synchronously with Node JS

Function countStudents in the file 1-read_file.js uses the database database.csv
    - It accepts a path in argument
    - The script attempts to read the database file synchronously
    - It throws an error with the text Cannot load the database, if database is missing
    - If the database is available, it logs the following message to the console Number of students: NUMBER_OF_STUDENTS
    - It logs the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
    - CSV file can contain empty lines (at the end) - and they are not a valid student!

### 3. Reading a file asynchronously with Node JS

Function countStudents in the file 3-read_file_async.js that uses the database database.csv.
    - It accepts a path in argument (same as in 2-read_file.js)
    - The script attempts to read the database file asynchronously
    - The function returns a Promise
    - If the database is not available, it throws an error with the text Cannot load the database
    - If the database is available, it logs the following message to the console Number of students: NUMBER_OF_STUDENTS
    - It logs the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
    - CSV file can contain empty lines (at the end) - and they are not a valid student!

### 4. Create a small HTTP server using Node's HTTP module

File named 4-http.js, creates a small HTTP server using the http module:

    - It is assigned to the variable app and this which is exported
    - HTTP server listens on port 1245
    -  Displays Hello Holberton School! in the page body for any endpoint as plain text

### 5. Create a more complex HTTP server using Node's HTTP module

File named 5-http.js, creates a small HTTP server using the http module:

    - It is assigned to the variable app and this one must be exported
    - HTTP server listens on port 1245
    - It returns plain text
    - When the URL path is /, it displays Hello Holberton School! in the page body
    - When the URL path is /students, it displays "This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
    - CSV file can contain empty lines (at the end) - and they are not a valid student!

### 6. Create a small HTTP server using Express

Install Express

File named 6-http_express.js, creates a small HTTP server using Express module:

    - It is assigned to the variable app and which must be exported
    - HTTP server listens on port 1245
    - Displays Hello Holberton School! in the page body for the endpoint /

### 7. Create a more complex HTTP server using Express

File named 7-http_express.js, recreates the small HTTP server using Express:

    - It is assigned to the variable app which must be exported
    - HTTP server listens on port 1245
    - It returns plain text
    - When the URL path is /, it displays Hello Holberton School! in the page body
    - When the URL path is /students, it displays: This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
    - CSV file can contain empty lines (at the end) - and they are not a valid student!

