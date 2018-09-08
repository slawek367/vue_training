<template>
    <div id="app">
        <ul>
            <li v-for="item in itemList" :key="item.id"> {{item.name}} <button class="button2" v-bind:id="item.id" @click="removeItem(item.id)">DEL</button> </li>
        </ul>
        <form @submit.prevent="onSubmit()">
            <input
                name="itemName"
                v-model="itemName"
                v-validate="'required|min:3'"
            >
            <button>Add</button>
            <div v-show="errors.has('itemName')">
                {{ errors.first('itemName') }}
            </div>
        </form>
    </div>
</template>

<script>
import uuid from 'uuid/v4';
import VeeValidate from 'vee-validate';
import Vue from 'vue';
Vue.use(VeeValidate);

export default {
  name: "#app",
  data() {
    return {
      lastItemId: 3,
      itemList: [
        { name: "aaa", id: 1 },
        { name: "bbb", id: 2 },
        { name: "ccc", id: 3 }
      ]
    };
  },
  methods: {
    addItem(itemName) {
      this.lastItemId++;
      this.itemList.push({ name: itemName, id: this.lastItemId });
    },
    removeItem(itemId) {
      console.log(itemId);
      this.itemList = this.itemList.filter(el => el.id !== itemId);
    },
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.itemList.push({
          id: uuid(),
          name: this.itemName
        });
        this.itemName = "";
        this.$validator.reset();
      });
    }
  }
};
</script>

<style>
#button1 {
  width: 100px;
  height: 40px;
}
.button2 {
  height: 30px;
}
</style>