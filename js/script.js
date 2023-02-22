const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: './api.php',
            todos: [],
        };
    },
    methods: {

    },
    created() {
        axios
            .get(this.apiUrl)
            .then((response) => {
                this.todos = response.data.todos;
            });
    }
}).mount('#app');