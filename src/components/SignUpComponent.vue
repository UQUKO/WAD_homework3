<template>
    <div class="signup-form">
        <div class="login-text">
            <!--login form taken from homework 2 and modified-->
        </div>
        <form id="loginForm">
        <!--<form action="index.html"> method="POST" commented this line out because of an error-->
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required>
            </div>
    
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required>
            </div>
    
            <div class="form-group">
                <button type="submit" class="submit-button">Signup</button>
            </div>
        </form>

    </div>
  </template>
  
  <script>
  export default {
    name: "SignUpComponent",
  };
  </script>
  
  <style>
  .signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    background-color: lightgreen;
    margin: auto;
    width: 25%;
    border-radius: 25px;
  }

  .form-group{
    padding: 5px;
  }

  .form-group label{
    padding-right: 5px;
  }

  </style>
  