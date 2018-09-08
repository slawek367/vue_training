<template>
    <div id="orders">
        <ul>
            <li v-for="item in orderList" :key="item.id"> {{item.name}} <button class="button2" v-bind:id="item.id" @click="removeItem(item.id)">DEL</button> </li>
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
  name: "orders",
  data() {
    return {
      itemName: "",
      orderList: [
        { name: "order1", id: uuid() },
        { name: "order2", id: uuid() },
        { name: "order3", id: uuid() }
      ]
    };
  },
  methods: {
    removeItem(itemId) {
      console.log(itemId);
      this.orderList = this.orderList.filter(el => el.id !== itemId);
    },
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.orderList.push({
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