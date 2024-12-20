Currency Converter User Management

##Project Structure
The project consists of several HTML templates for user management in a currency converter application. The templates include functionalities such as login, registration, user profile management, adding users, and user management.

##Features
#1)Login Page (login.html):
1).User login form with username and password fields.
2).Uses Bootstrap for a responsive design.
3).JavaScript validation for required fields.

#2)Registration Page (register.html):
1).User registration form with username, email, password, and confirm password fields.
2).Responsive design using Bootstrap.
3).JavaScript validation for required fields, email format, and password strength.

#3)User Profile Page (user_profile.html):
1).Displays user information such as username and email.
2).Form to update user email and password.
3).Uses Bootstrap for consistency and responsiveness.
4).JavaScript validation for email format and password strength.

#4)Add User Page (add_user.html):
1).Form to add a new user with fields for username, email, password, and role.
2).Bootstrap components ensure a professional look.

#5)User Management Page (user_management.html):
1).Table displaying a list of users with options to edit or delete each user.
2).Utilizes Bootstrap for table styling and responsive layout.

#5)Edit User Page (edit_user.html):

1).Form to edit existing user information including username, email, and role.
2).Responsive design with Bootstrap.



##How to Run
To run the project, you can simply open the HTML files in a web browser. Here are the steps:

1).Clone the Repository
2).Open HTML Files
3).Include Bootstrap: Ensure Bootstrap CSS and JS files are included in your HTML templates. The provided templates already include Bootstrap CDN links.

html

///////

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            padding: 20px;
        }
        header {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <!-- Rest of the HTML content -->
</body>
</html>

//////

4).JavaScript Validation: The script.js file contains JavaScript for form validation. Ensure it's included in your HTML templates.

html

/////
<script src="script.js"></script>
/////
