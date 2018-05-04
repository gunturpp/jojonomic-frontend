<template>
<div id="components-demo">
    <h1 style="text-align:center">Test all tag in vue</h1>
    modal input<br>
    <b-btn v-b-modal.modalPrevent>Create Task</b-btn>

    <!-- Modal Component Create Task -->
    <b-modal id="modalPrevent" ref="modal" title="Submit your task" @ok="handleOk" @shown="clearName">
        <b-form @submit="createTasks" @reset="deleteTask" v-if="show">
            <b-form-group id="exampleInputGroup1" label="Title:" label-for="exampleInput1" description="Create the title">
                <b-form-input id="exampleInput1" type="title" v-model="form.title" required placeholder="Title">
                </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2" label="Description:" label-for="exampleInput2">
                <b-form-textarea id="exampleInput2" v-model="form.description" placeholder="Description" :rows="3" :max-rows="6">
                </b-form-textarea>
            </b-form-group>
            <b-form-group id="exampleInputGroup3" label="Date:" label-for="exampleInput3">
                <datepicker v-model="form.date" name="uniquename"></datepicker>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </b-modal>

    card group
    <b-card-group deck class="mb-4">
        <b-card border-variant="primary" header="On Going Task" header-bg-variant="primary" header-text-variant="white" align="center">
            <!-- Main UI -->
            <b-card-group deck v-for="newtask in this.tasks" :key="newtask.id">
                <b-card  header="form.title" header-tag="header" footer="Card Footer" footer-tag="footer" title="Title">
                    <p class="card-text">{{ form.description }}</p>
                    <p class="card-text">{{ form.date }}</p>
                </b-card>
            </b-card-group>
        </b-card>
        <b-card border-variant="success" header="Done Task" header-bg-variant="success" header-text-variant="white" align="center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
        <b-card border-variant="danger" header="Expired" header-bg-variant="danger" header-text-variant="white" align="center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>

    </b-card-group>

    binding statis array
    <ul>
        <li v-for="array1 in array" :key="array1.id">
            {{ array1 }}
        </li>
    </ul>

</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import moment from 'moment'
export default {
    data() {
        return {
            datas: ['a', 'b', 'c'],
            form: [{
                title: '',
                description: '',
                date: '',
            }],
            tasks: [],
            show: true
        }
    },
    methods: {
        createTasks(evt) {
            evt.preventDefault();
            this.tasks = this.form;
            console.log(this.tasks);
        },
        deleteTask(evt) {
            evt.preventDefault();
            /* Reset our form values */
            // this.form.email = '';
            // this.form.name = '';
            // this.form.food = null;
            // this.form.checked = [];
            this.tasks = '';
            /* Trick to reset/clear native browser form validation state */
            this.show = false;
            this.$nextTick(() => {
                this.show = true
            });
        }
    },
    components: {
        'datepicker': Datepicker
    }
}
</script>

<style>
#components-demo {
    border: solid;
    padding: 50px;
}
</style>
