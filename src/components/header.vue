<template>
<b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/">JojoRello</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item right>
                <router-link class="nav-right" to="/">Login</router-link>
                <router-link class="nav-right" to="/register">Register</router-link>
            </b-nav-item>
            <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em class="nav-right">User</em>

        </template>
                <b-dropdown-item v-on:click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>

    </b-collapse>
</b-navbar>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            // datas: ['a', 'b', 'c']
        }
    },
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace('/')
                    localStorage.removeItem('account')
                    localStorage.removeItem('isLoggedIn')
                });
        }
    }
}
</script>

<style>
.nav-right {
    color: white !important;
    font-weight: bold;
}

.header {
    background-color: #42a5ce;
}

b-navbar-brand {
    border: solid 1px;
}
</style>
