<template>
    <div class="container">
        <h2>Todo List</h2>
        <div class="row">
            <div class="input-group col-md-4">
                <input type="text" class="form-control" placeholder="add Todo.." v-model="newTodo" @keyup.enter="actionAddTodo()">
                <!-- 增加按鈕 -->
                <span class="input-group-btn">
                    <button class="btn btn-success" type="button" @click="actionAddTodo()">
                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button>
                </span>
            </div>
        </div>
       <!-- 左右兩個欄位分別存放 todo / done -->
    <div class="row">
      <div class="col-md-6">
        <h2>Todo List:</h2>
        <ol>
            <!-- 將item傳進去 -->
            <todoItem v-for="(item ,index ) in todo" :item="item" />
        </ol>
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
import todoItem from '../components/todo-item.vue'
export default {
    components: {
        todoItem,
    },
    data () {
        return {
            newTodo: '',
        }
    },

    computed: {
        ...mapGetters({
        todo: 'getTodos',
        done: 'getDone'
    }),


    },
    //ES 7 寫法
    // computed: {
    //     ...mapGetters([
    //         'getTodos',
    //         'getDone'

    //     ])
    // },

    methods: {
        ...mapActions([
            'addTodo',
            'toggleTodo',
        ]),
        
        actionAddTodo () {
            //沒打字就不新增
            if(this.newTodo ===''){
                return;
                }
            this.addTodo(this.newTodo);
            this.newTodo = '';
        }
    }
}
</script>
