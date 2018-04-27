<template>
<div id="app">
    <!-- header -->
    <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">JojoRello</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
          <em>User</em>
        </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
    <div class="main-app">
        <div>
            <b-btn v-b-modal.createTask>Create Task</b-btn>
            <!-- Modal Create -->
            <!-- <b-modal id="createTask" title="Create Task">
                <input v-model.trim="title" placeholder="Title">
                <br>
                <textarea v-model="description" placeholder="Description"></textarea>
                {{title}}
            </b-modal> -->
        </div>
        <createtask></createtask>
        <!-- <div id="components-demo">
            <p>{{title}}</p>
            <br>
            <p style="white-space: pre-line;">{{description}}</p>
            <b-card-group deck class="mb-3">
                <b-card border-variant="primary" header="On Going Task" header-bg-variant="primary" header-text-variant="white" align="center">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </b-card>
                <b-card border-variant="success" header="Done Task" header-bg-variant="success" header-text-variant="white" align="center">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </b-card>
                <b-card border-variant="danger" header="Expired" header-bg-variant="danger" header-text-variant="white" align="center">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </b-card>

            </b-card-group>
        </div>
 -->
        <!-- redirect comppnent view -->
        <!-- <router-view/> -->
    </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: '',
      description: ''
    }
  }
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.main-app {
    padding: 40px;
    border: solid;
}

#components-demo {
    border: solid;
    padding: 50px;
}
</style>
