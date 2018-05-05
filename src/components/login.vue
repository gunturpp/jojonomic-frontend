<template>
<div id="login">
    <h4>Login to JojoRello</h4>
    <b-form class="form" @submit="login">
        <b-form-group id="" label="Enter email:">
            <b-form-input id="" type="email" v-model="email" required placeholder="email">
            </b-form-input>
        </b-form-group>
        <b-form-group id="" label="Enter password :" description="&nbsp; Dont tell your account to anyone else.">
            <b-form-input id="" type="password" v-model="password" required placeholder="password">
            </b-form-input>
        </b-form-group>

        <div v-on:click="login" class="btn-primary">login</div>
    </b-form>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'login',
    data() {
        return {
            email: "",
            password: "",
            user: []
        }
    },
    methods: {
        login(e) {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        this.user = user
                        alert('Welcome, ' + this.user.email);
                        this.$router.push('/main');
                        localStorage.setItem('account', JSON.stringify(this.user));
                        localStorage.setItem('isLoggedIn', 'true');
                    },
                    err => {
                        alert(err.message);
                    }
                );
            e.preventDefault();
        }
    }
}
</script>

<style scoped>
#login {
    width: 30vw;
    height: 400px;
    background-color: #eeeeee;
    margin: 60px auto;

}

h4 {
    text-align: center;
    background-color: #42A5CE;
    padding: 10px;
    color: #ffffff;
}
.form {
  padding: 20px;
}
div.btn-primary {
  width:80%;
  margin: auto;
  text-align: center;
  padding: 7px;
}
</style>
