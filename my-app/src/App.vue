<template>
    <div id="app">
        <ProductList :itemList="itemList"
            @item-remove="onItemRemove"></ProductList>
        <ProductForm @add-product="addItem"></ProductForm>
        <h2>Users</h2>
        <UserList :users="sharedState.users" ></UserList>
        <UserForm @add-user="onAddUser"></UserForm>
    </div>
</template>

<script>
//        <OrderList @sort="order(items)"></OrderList>
import uuid from 'uuid/v4';
import VeeValidate from 'vee-validate';
import Vue from 'vue';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import OrderList from './components/OrderList';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);

export default {
//  name: "app",
  components: {
      ProductList,
      ProductForm,
      OrderList,
      UserList,
      UserForm
  },
  created() {
    store.fetchUsers();
  },
  data() {
    return {
      itemName: "",
      lastItemId: 3,
      itemList: [
        { name: "aaa", id: 1 },
        { name: "bbb", id: 2 },
        { name: "ccc", id: 3 }
      ],
      sharedState: store.state
    }
  },
  methods: {
    addItem(item) {
      this.itemList.push({ name: item.name, id: item.id });
      console.log(item)
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
        console.log(this.itemList)
        this.itemName = "";
        this.$validator.reset();
      });
    },
    onItemRemove(itemId) {
      this.itemList = this.itemList.filter(el => el.id !== itemId);
    },
    order(items) {
      this.itemList = items;
    },
    onAddUser(user) {
      console.log("Add user")
      store.addUser(user);
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