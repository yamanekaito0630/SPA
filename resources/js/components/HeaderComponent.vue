<template>
    <div class="container-fluid bg-dark mb-3">
        <div class="container">
            <nav class="navbar navbar-dark">
                <span class="navbar-brand mb-0 h1">SPA</span>
                <div>
                    <router-link v-bind:to="{name:'task.list'}">
                        <button class="btn btn-success mx-1">List
                        </button>
                    </router-link>
                    <button class="btn btn-success mx-1" data-bs-toggle="modal" data-bs-target="#createModal">ADD</button>
                </div>
            </nav>
        </div>
    </div>

    <!-- CreateModal -->
    <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-sm-6">
                                <form v-on:submit.prevent="submit">
                                    <div class="form-group row">
                                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                                        <input type="text" class="col-sm-9 form-control" id="title"
                                               v-model="task.title">
                                    </div>
                                    <div class="form-group row">
                                        <label for="content" class="col-sm-3 col-form-label">Content</label>
                                        <input type="text" class="col-sm-9 form-control" id="content"
                                               v-model="task.content">
                                    </div>
                                    <div class="form-group row">
                                        <label for="person-in-charge" class="col-sm-3 col-form-label">Person In
                                            Charge</label>
                                        <input type="text" class="col-sm-9 form-control" id="person-in-charge"
                                               v-model="task.person_in_charge">
                                    </div>
                                    <button type="submit" class="btn btn-primary my-2" data-bs-dismiss="modal">Submit</button>
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
</template>

<script>
export default {
    name: "HeaderComponent.vue",
    data: function () {
        return {
            task: {}
        }
    },
    methods: {
        submit() {
            axios.post('/api/tasks', this.task)
            .then((res) => {
                this.$router.go({name: 'task.list'});
            });
        },
    }
}
</script>

<style scoped>

</style>
