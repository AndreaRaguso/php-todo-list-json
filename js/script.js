const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: './api.php',
            todos: [],
            newTask:{
                'text' : '',
                'done' : false
            },
            createUrl: './create.php',
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

                this.todos.push({
                    text: this.newTask.text,
                });

                this.newTask.text = '';
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