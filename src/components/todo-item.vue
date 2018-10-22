<template>

    <li>
        <div v-if="!updateMode">
            <label>
                <!-- 
              改變狀態
              套用 vuex 因此不能使用 v-model 做雙向綁定，會報錯誤
              1. 將 list 的 value bind 到 input checked 屬性上，改變樣式。
              2. onchange 事件發出 action 帶入 key
             -->

                <input type="checkbox" :checked="item.done" @change="toggleTodo( item.key )">
                {{ item.content }}
            </label>

            <!-- 修改TodoList -->
            <button class="btn btn-xs btn-primary" @click="showEditMode">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </button>
            <!-- 刪除按鈕
            onclick 事件發出 action 帶入 key-->
            <button class="btn btn-xs btn-danger" @click="deleteTodo( item.key )">
                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
        </div>
        <div v-if="updateMode">
            <input class="edit-input" v-focus="updateMode" placeholder="edit Todo.." :value="item.content" @keyup.enter="actionEdit" @blur="cancelEdit" @keyup.esc="cancelEdit" />
        </div>
    </li>

</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    props: {
        item: Object
    },

    data () {
        return {
            updateMode: false
        }
    },
    /*
    此 directives 是參考作者的 code
    主要功能是切換模式之後 focus input 功能
    value 為 updateMode
    $nextTick 功能是：上個動作完成後，才執行裡面包含的程式。
    之後會寫一篇關於自訂：Vue Directive
  */
    directives: {
        focus (el, { value }, { context }) {
            if (value) {
                context.$nextTick(() => {
                    el.focus();
                })
            }
        }
    },
    methods: {
        ...mapActions([
            'toggleTodo',
            'deleteTodo',
            'updateTodo'
        ]),
        showEditMode () {
            this.updateMode = true;
        },
        /*
        action 只能帶一個 value 因此包裝成 object
      */
        actionEdit (e) {
            const userChange = e.target.value.trim();
            console.log(e.target);
            console.log('userChange', this.item.key, userChange);
            this.updateTodo({
                key: this.item.key,
                updateString: userChange
            });
            this.updateMode = false;
        },
        /*
      取消更新
      因此必須把 input 的 value 修改回去
      不然下次打開會是上次未修改成功的值
    */
        cancelEdit (e) {
            e.target.value = this.item.title;
            this.updateMode = false;
        }
    }
}
</script>
