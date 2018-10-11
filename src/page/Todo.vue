<template>
    <div class="container">
        <h2>Todo List</h2>
        <input type="text" placeholder="add Todo.." v-model="newTodo" @keyup.enter="actionAddTodo()">
        <!-- 增加按鈕 -->
        <button @click="actionAddTodo()">Add Todo</button>
        <ul>
            <li v-for="(todo, index) in todo">
                {{todo.content}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        data() {
            return {
                newTodo: '',
            }
        },
        computed: mapGetters({
            todo: 'getTodos',
        }),
        methods: {
            ...mapActions([
                'addTodo'
            ]),
            actionAddTodo() {
                this.addTodo(this.newTodo);
                this.newTodo = '';
            }
        }
    }
</script>
