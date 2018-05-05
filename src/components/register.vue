<template>
<div id="register">
    <h4>Register Here</h4>
    <form>
        <label>Email</label>
        <input v-model="email" type="email" id="email" placeholder="Enter Email">
        <label>Password</label>
        <input v-model="password" type="password" id="password" placeholder="Enter password">
        <button v-on:click="register">Register</button>
    </form>
</div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'register',
    data() {
        return {
            email: "",
            password: "",
            displayName: "Mr. Anonymous"
        }
    },
    methods: {
        register(e) {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    console.log("New Account is :", user);
                    localStorage.setItem('account', JSON.stringify(user));
                    localStorage.setItem('name', JSON.stringify(this.displayName));
                    localStorage.setItem('isLoggedIn', 'true');
                    this.$router.push('/main');
                }, err => {
                    console.log("Failed to register", err.message);
                })
            e.preventDefault();

        }
    }
}
</script>

<style scoped>
#register {
    text-align: center;
    width: 50vw;
    padding: 10px;
    border: solid;
    background-color: #eeeeee;
    margin: auto;
}
</style>
