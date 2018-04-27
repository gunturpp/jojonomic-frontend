<template>
<div id="components-demo">
    <ul>
        <li v-for="data in datas" :key="data.id">
            {{ data }}
        </li>
    </ul>

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
</template>

<script>
export default {
    data() {
        return {
            datas: ['a', 'b', 'c']
        }
    }
}
</script>

<style>
#components-demo {
    border: solid;
    padding: 50px;
}
</style>
