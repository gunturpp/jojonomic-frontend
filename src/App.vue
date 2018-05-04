<template>
<div id="app">
    <!-- header -->
    <app-header></app-header>
    <!-- main content in router-view -->
    <router-view/>
    <!-- footer -->
    <app-footer></app-footer>
</div>
</template>

<script>
export default {
  
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
