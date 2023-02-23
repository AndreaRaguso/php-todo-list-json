const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: './api.php',
            todos: [],
            newTask:{
                'text' : '',
                'done' : false,
            },
            createUrl: './create.php',
            deleteUrl: './delete.php',
        };
    },
    methods: {

        todone(task) {
            task.done = !task.done
        },

        addTask() {
            
            axios.post(this.createUrl, {
                task: this.newTask
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(() => {
                this.ids = this.ids + 1;
                this.todos.push({
                    text: this.newTask.text,
                    done: this.newTask.done,
                });

                this.newTask.text = '';
            });
        },

        delTask(index){
            axios.post(this.deleteUrl, {
                task: this.todos[index]
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(() => {
                this.todos.splice(index , 1);
            });
        }

    },
    created() {
        axios
            .get(this.apiUrl)
            .then((response) => {
                this.todos = response.data.todos;
            });
    },
}).mount('#app');