<template>
<div id="main-content">
    <h3 class="welcome-word">Hi, welcome to your task management <b>{{ name }}</b>.</h3>
    <!-- modal input -->
    <b-btn class="modal-create" v-b-modal.modalPrevent>Create Task</b-btn>


    <!-- Modal Component Create Task -->
    <b-modal id="modalTaskDone" hide-footer ref="modalParent" title="Are you sure the task is done?">
        Your task will be move to Done Task List
        <b-btn class="mt-3" variant="primary" block @click="taskIsDone(newtask.tasksId)">Yay, task done!</b-btn>
        <b-btn class="mt-3" variant="outline" block @click="hideModal">Nope, cancel :(</b-btn>
    </b-modal>
    <!-- <b-modal id="modalPrevent" ref="modal" title="Submit your task" @ok="handleOk" @shown="clearName">
        <b-form @submit="createTasks" @reset="deleteTask" v-if="show"> -->
    <b-modal id="modalPrevent" hide-footer ref="modal" title="Submit your task">
        <b-form @submit="createTasks" v-if="show">
            <b-form-group id="" label="Title:" label-for="" description="Create the title">
                <b-form-input id="" type="title" v-model="title" required placeholder="Title">
                </b-form-input>
            </b-form-group>
            <b-form-group id="" label="Description:" label-for="">
                <b-form-textarea id="" v-model="description" placeholder="Description" :rows="3" :max-rows="6">
                </b-form-textarea>
            </b-form-group>
            <b-form-group id="" label="Date:" label-for="">
                <b-form-input v-model="date" type="date"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </b-modal>

    <!-- card group -->
    <b-card-group deck class="mb-4">
        <b-card border-variant="primary" header="On Going Task" header-bg-variant="primary" header-text-variant="white" align="center">
            <!-- Main UI -->
            <b-card-group deck v-for="newtask in this.tasks" :key="newtask.id">
                <b-card v-if="newtask.statusTask==='on going'" v-bind="newtask">
                    <p class="card-text">{{ newtask.description }}</p>
                    <p class="card-text">{{ newtask.date }}</p>
                    <b-btn class="modal-success" @click="taskIsDone(newtask.tasksId)">Done?</b-btn>
                    <!-- <b-btn v-bind="newtask.taskId" class="modal-success" v-b-modal.modalTaskDone>Done</b-btn> -->
                </b-card>
            </b-card-group>
        </b-card>


        <b-card border-variant="success" header="Done Task" header-bg-variant="success" header-text-variant="white" align="center">
            <b-card-group deck v-for="newtask in this.tasks" :key="newtask.id">
                <b-card v-if="newtask.statusTask==='done'" v-bind="newtask">
                    <p class="card-text">{{ newtask.description }}</p>
                    <p class="card-text">{{ newtask.date }}</p>
                    <p class="congrats">Congratulation!</p>
                </b-card>
            </b-card-group>
        </b-card>
        <b-card border-variant="danger" header="Expired" header-bg-variant="danger" header-text-variant="white" align="center">
            <b-card-group deck v-for="newtask in this.tasks" :key="newtask.id">
                <b-card v-if="newtask.statusTask==='expired'" v-bind="newtask">
                    <p class="card-text">{{ newtask.description }}</p>
                    <p class="card-text">{{ newtask.date }}</p>
                    <p class="expiredd">Your tasks failed!</p>

                </b-card>
            </b-card-group>
        </b-card>
    </b-card-group>
</div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'
let account = JSON.parse(localStorage.getItem('account'))

export default {
    name: 'main-content',
    data() {
        return {
            title: '',
            description: '',
            date: new Date(),
            tasks: [],
            show: true,
            name: '',
        }
    },
    created: function () {
        // console.log("maincontent components load", account)
        this.name = name
        this.createUserData()
        this.fetchUserData()
        this.getTasks()
        this.expiredTask()
    },
    props: {
        arrayDate: []
    },
    methods: {
        // get current user data
        fetchUserData(x) {
            firebase.database().ref('/user/' + account.uid).once('value')
                .then(function (snapshot) {
                    var user = (snapshot.val() && snapshot.val());
                    name = user.displayName
                    console.log("current user", name)
                })
        },
        // create new user if not yet
        createUserData() {
            firebase.database().ref('/user/' + account.uid).set({
                userId: account.uid,
                displayName: 'Mr. Anonymous',
                photoUrl: 'null',
                email: account.email,
                dateCreated: new Date().toString(),
            }).then(user => {
                console.log("already have data")
            }, err => {
                console.log("error set new data")
            })
        },
        getTasks(statusTask) {
            firebase.database().ref('/tasks/').once('value')
                .then(value => {
                    this.tasks = value.val();
                    console.log("tasks list", this.tasks)
                })
        },
        randomId() {
            return Math.random().toString(30).substr(2)
        },
        createTasks(evt) {
            var taskId = this.randomId()
            firebase.database().ref('tasks/' + taskId).set({
                title: this.title,
                description: this.description,
                date: this.date,
                statusTask: 'on going',
                tasksId: taskId,
                created_at: moment(new Date()).local().format().toString(),
                updated_at: moment(new Date()).local().format().toString(),
            }).then(tasks => {
                console.log("success save data", tasks)
                location.reload()
            }, err => {
                console.log("failed save data", err)
            })
            evt.preventDefault();
        },
        taskIsDone(tasksId) {
            console.log("id task", tasksId)
            firebase.database().ref('tasks/' + tasksId).update({
                statusTask: 'done',
                updated_at: moment(new Date()).local().format().toString(),
            }).then(tasks => {
                console.log("success change status to done")
                alert("Congratulation your task is done!")
                location.reload()
            }, err => {
                console.log("failed change status", err)
            })
            evt.preventDefault();
        },
        expiredTask(x) {
            // get task date
            var j = 0,
                i = 0
            var date = []
            var tasksId = []
            var statusTask = []
            firebase.database().ref('/tasks').once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    date[j] = childData.date
                    tasksId[j] = childData.tasksId
                    statusTask[j] = childData.statusTask
                    j++
                })
                for (var i = 0; i < date.length; i++) {
                    if (Date.now() > new Date(date[i]) && statusTask[i] != 'expired') {
                        console.log("date expired", date[i])
                        console.log("id task", tasksId[i])
                        firebase.database().ref('tasks/' + tasksId[i]).update({
                            statusTask: 'expired',
                            updated_at: moment(new Date()).local().format().toString(),
                        }).then(tasks => {
                            alert("Fiuuh any task is expired!")
                            // location.reload()
                        }, err => {
                            console.log("failed change status", err)
                        })
                        evt.preventDefault();
                    }
                }
                // console.log("arrayDate X", x)
            })

            //     localStorage.setItem("date array", JSON.stringify(getTask))
            //     today = moment(new Date()).local().format();
            //     days = moment(today).days() - 1;
            //     month = moment(today).month() + 1;
            //     year = moment(today).year();
            //     var a = moment([year, month, days]);

            //     var b = moment([2007, 0, 28]);
            //     var x = a.diff(b, 'days')
            //     console.log("expired datenya", user)
            // })
        },
        // deleteTask(evt) {
        //     evt.preventDefault();
        //     /* Reset our form values */
        //     // this.form.email = '';
        //     // this.form.name = '';
        //     // this.form.food = null;
        //     // this.form.checked = [];
        //     this.tasks = '';
        //     /* Trick to reset/clear native browser form validation state */
        //     this.show = false;
        //     this.$nextTick(() => {
        //         this.show = true
        //     });
        // },
        hideModal() {
            this.$refs.modalParent.hide()
        }
    },
    components: {

    }
}
</script>

<style scoped>
#main-content {
    border: solid;
    padding: 50px;
}

.welcome-word {
    text-align: center;
}

.modal-create {
    margin: 10px;
}

.modal-success {
    padding: 5px;
    width: 80%;
    background-color: #42A5CE;
}

.congrats {
    color: green;
    border: 1px green solid;
    padding: 5px;
    width: 80%;
    margin: auto;
}

.expiredd {
    color: red;
    border: 1px red solid;
    padding: 5px;
    width: 80%;
    margin: auto;
}
</style>
