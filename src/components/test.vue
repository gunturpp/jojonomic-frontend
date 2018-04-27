<template>
<div id="app-4">
    <ol>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }}
        </li>
    </ol>
</div>
</template>

<script>
</script>
