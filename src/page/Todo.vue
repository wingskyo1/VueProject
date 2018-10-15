<template>
    <div class="container">
        <h2>Todo List</h2>
        <div class="row">
            <div class="input-group col-md-4">
                <input type="text" class="form-control" placeholder="add Todo.." v-model="newTodo" @keyup.enter="actionAddTodo()">
                <!-- 增加按鈕 -->
                <span class="input-group-btn">
                    <button class="btn btn-success" type="button" @click="actionAddTodo">
                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button>
                </span>
            </div>
        </div>
       <!-- 左右兩個欄位分別存放 todo / done -->
    <div class="row">
      <div class="col-md-6">
        <h2>Todo List:</h2>
        <li v-for="(item, index) in todo">
          <label>
            <!-- 
              改變狀態
              套用 vuex 因此不能使用 v-model 做雙向綁定，會報錯誤
              1. 將 list 的 value bind 到 input checked 屬性上，改變樣式。
              2. onchange 事件發出 action 帶入 key
             -->
            <input 
              type="checkbox"
              :checked="item.done"
              @change="toggleTodo( item.key )">
              {{ item.content }}
          </label>
          <!-- 
            刪除按鈕
            onclick 事件發出 action 帶入 key
          -->
          <button class="btn btn-xs btn-danger" @click="deleteTodo( item.key )">
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
        </li>
      </div>
      <div class="col-md-6">
        <h2>Done List:</h2>
        <ul >
          <li v-for="(item, index) in done">
            <label>
              <input 
                type="checkbox"
                :checked="item.done"
                @change="toggleTodo( item.key )">
                {{ item.content }}
            </label>
          </li>
        </ul>
      </div>
    </div><!-- end row -->
    </div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    data () {
        return {
            newTodo: '',
        }
    },
    computed: mapGetters({
        todo: 'getTodos',
        done: 'getDone'
    }),
    methods: {
        ...mapActions([
            'addTodo',
            'toggleTodo',
            'deleteTodo'
        ]),
        actionAddTodo () {
            this.addTodo(this.newTodo);
            this.newTodo = '';
        }
    }
}
</script>
