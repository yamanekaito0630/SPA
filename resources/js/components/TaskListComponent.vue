<template>
    <div class="container">
        <table class="table table-hover">
            <thead class="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Person In Charge</th>
                <th scope="col">Show</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(task, index) in tasks" :key="index">
                <th scope="row">{{ task.id }}</th>
                <td>{{ task.title }}</td>
                <td>{{ task.content }}</td>
                <td>{{ task.person_in_charge }}</td>
                <td>
                    <router-link v-bind:to="{params:{taskID:task.id}}">
                        <button v-on:click="showModal(task.id, task.title, task.content, task.person_in_charge)"
                                class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#showModal">Show
                        </button>
                    </router-link>
                </td>
                <td>
                    <router-link v-bind:to="{params:{taskID:task.id}}">
                        <button v-on:click="editModal(task.id, task.title, task.content, task.person_in_charge)"
                                class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">Edit
                        </button>
                    </router-link>
                </td>
                <td>
                    <button v-on:click="deleteTask(task.id)" class="btn btn-danger">Delete</button>
                </td>

                <!-- ShowModal -->
                <div class="modal fade" id="showModal" tabindex="-1" aria-labelledby="showModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Show</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-sm-6">
                                            <form>
                                                <div class="form-group row border-bottom">
                                                    <label for="id" class="col-sm-3 col-form-label">ID</label>
                                                    <input type="text" class="col-sm-9 form-control-plaintext" readonly
                                                           id="id"
                                                           v-model="id">
                                                </div>
                                                <div class="form-group row border-bottom">
                                                    <label for="title" class="col-sm-3 col-form-label">Title</label>
                                                    <input type="text" class="col-sm-9 form-control-plaintext" readonly
                                                           id="title"
                                                           v-model="title">
                                                </div>
                                                <div class="form-group row border-bottom">
                                                    <label for="content" class="col-sm-3 col-form-label">Content</label>
                                                    <input type="text" class="col-sm-9 form-control-plaintext" readonly
                                                           id="content"
                                                           v-model="content">
                                                </div>
                                                <div class="form-group row border-bottom">
                                                    <label for="person-in-charge" class="col-sm-3 col-form-label">Person
                                                        In Charge</label>
                                                    <input type="text" class="col-sm-9 form-control-plaintext" readonly
                                                           id="person-in-charge"
                                                           v-model="person_in_charge">
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- EditModal -->
                <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-sm-6">
                                            <form v-on:submit="submit(id,title,content,person_in_charge)">
                                                <div class="form-group row">
                                                    <label for="id" class="col-sm-3 col-form-label">ID</label>
                                                    <input type="text" class="col-sm-9 form-control-plaintext" readonly
                                                           id="id"
                                                           v-model="id">
                                                </div>
                                                <div class="form-group row">
                                                    <label for="title" class="col-sm-3 col-form-label">Title</label>
                                                    <input type="text" class="col-sm-9 form-control" id="title"
                                                           v-model="title">
                                                </div>
                                                <div class="form-group row">
                                                    <label for="content" class="col-sm-3 col-form-label">Content</label>
                                                    <input type="text" class="col-sm-9 form-control" id="content"
                                                           v-model="content">
                                                </div>
                                                <div class="form-group row">
                                                    <label for="person-in-charge" class="col-sm-3 col-form-label">Person
                                                        In Charge</label>
                                                    <input type="text" class="col-sm-9 form-control"
                                                           id="person-in-charge"
                                                           v-model="person_in_charge">
                                                </div>
                                                <button type="submit" class="btn btn-primary my-2"
                                                        data-bs-dismiss="modal">Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TaskListComponent",
    data: function () {
        return {
            tasks: []
        }
    },
    methods: {
        getTasks() {
            axios.get('/api/tasks')
                .then((res) => {
                    this.tasks = res.data;
                });
        },
        deleteTask(id) {
            axios.delete('/api/tasks/' + id)
                .then((res) => {
                    this.getTasks();
                });
        },
        showModal(id, title, content, person_in_charge) {
            this.id = id;
            this.title = title;
            this.content = content;
            this.person_in_charge = person_in_charge;
        },
        editModal(id, title, content, person_in_charge) {
            this.id = id;
            this.title = title;
            this.content = content;
            this.person_in_charge = person_in_charge;
        },
        submit(id, title, content, person_in_charge) {
            this.task = {id, title, content, person_in_charge};
            axios.put('/api/tasks/' + id, this.task);
        }
    },
    mounted() {
        this.getTasks();
    }
}
</script>

<style scoped>

</style>
