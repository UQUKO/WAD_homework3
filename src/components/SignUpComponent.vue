<template>
  <div>
      
    <form @submit.prevent ="validateForm">
    <h2>Create an account</h2>
    <label for="email">Email</label>
    <input type="email" required v-model="email">
    <label for="password">Password</label>
    <input type="password" required v-model="password">
    <div v-if="validatePassword" class="error"> {{validatePassword}}</div>
  
  <div class="submit">
      <button>Sign up</button>
  </div>
  </form>
  </div>
  </template>
  
  <script>
  export default {
    name: "SignUpComponent",

  data: function() {
    return {
   email: '',
   password: '',
   role: '',
   terms: false,
   validatePassword:'',
  }},
  methods: {
   /* Validate password */
   validateForm(){
    console.log('signup is submitted');
    let lengthError = this.validateLength(this.password);
    let uppercaseError = this.validateUppercase(this.password);
    let digitError = this.validateDigit(this.password);
    let underscoreError = this.validateUnderscore(this.password);
    let startUppercaseError = this.validateStartUppercase(this.password);
    let lowercaseError = this.validateLowercase(this.password);
    
    if (!uppercaseError && !digitError && !underscoreError && !startUppercaseError && !lowercaseError && !lengthError) {
        this.validatePassword = '';
        this.$router.push('/');
    } else {
        this.validatePassword = uppercaseError || digitError || underscoreError || startUppercaseError || lowercaseError || lengthError;
    }   },

    validateLength(password){
        return (password.length >= 8 && password.length <= 15) ? "": "Password must be between 8-15 characters";
    },

    validateUppercase(password){
        let regex = /[A-Z]/;
        return regex.test(password) ? "" : "Password has to include at least 1 uppercase alphabet letter";
    },

    validateStartUppercase(password){
        let regex = /[A-Z]/;
        return regex.test(password[0]) ? "" : "Password should start with an uppercase letter";
    },

    validateDigit(password){
        let regex = /[0-9]/;
        return regex.test(password) ? "" : "Password should include at least one numeric value";
    },

    validateUnderscore(password){
        let regex = /_/;
        return regex.test(password) ? "" : "Password should include the character '_'";
    },

    validateLowercase(password){
        let regex = /([a-z].*?[a-z])/;
        return regex.test(password) ? "" : "Password should include at least two lowercase alphabet letters"
    }
  }
}
</script>
  
<style scoped>

form {
  max-width: 420px;
  margin: 30px auto;
  background-color: rgb(173, 225, 176);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
    color: rgb(8, 110, 110);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input{
display: block;
padding: 10px 6px;
width: 100%;
box-sizing: border-box;
border: none;
border-bottom: 1px solid white;
color: rgb(10, 74, 74);
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin:  0 10px 0 0;
    position: relative;
    top: 2px;
}
button{
background-color: rgb(115, 0, 160);
color: white;
border: 0;
padding: 10px 20px;
margin-top:  20px;
border-radius: 20px;
}
h2, .submit{
    text-align: center;
    
}

button:hover{
    background: rgb(139, 101, 192);
}

.error{
    color: red;
    font-size: 1em;
    margin-top:  10px;
    text-align: center;
}
</style>
  