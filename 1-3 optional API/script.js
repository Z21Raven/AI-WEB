const { createApp, ref, computed } = Vue

createApp({
    data() {
        // create  reference which is reactive variable that can be render when needed 
        return {
            //when you want to handle items always do 1) create newItem variable    2)create array to collect these items
            newTask: '',
            tasks: [],
            isEditing: false,
            updateIndex: null
        }
    },

    methods: {
        addTask() {
            // when you wan add text always do  1) use trim function  2) check for null state 3)empty the ref data or input
            // input --> newTask       || output:

            if (this.newTask === '' || this.newTask === null) {
                return;
            }

            let taskTrimmed = this.newTask.trim();
            this.tasks.push(taskTrimmed);
            this.newTask = '';
        },
        deleteTask(index) {
            let delConfirmed = confirm('are you sure');
            if (delConfirmed == false) {
                return;
            }
            this.tasks.splice(index, 1)
        },
        // the editing procedures begin here
        editTask(index) {
            this.isEditing = true;
            this.updateIndex = index;
            if (this.updateIndex == null) {
                return
            }
            this.newTask = this.tasks[this.updateIndex];
        },
        endEditingMode() {
            this.tasks[this.updateIndex] = this.newTask;
            this.newTask = '';
            this.isEditing = false;
        }
        // end here. it needed two variables and two functions


    },

    computed: {
        lastTask() {
            if (this.tasks.length == 0) {
                return;
            }
            return this.tasks[this.tasks.length - 1]
        },

        taskFull() {
            return this.tasks.length;
        }

    },

    watch: {
        taskFull(newValue, oldValue) {
            if (newValue >= 5) {
                alert('the List is full')
            }
        }
    }

}).mount('#app') //based on lifecycle hooks, when the web is open the createApp will be mounted to the root div with id (app)