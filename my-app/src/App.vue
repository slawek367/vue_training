<template>
    <div id="app">
        <ProductList :itemList="itemList"
            @item-remove="onItemRemove"></ProductList>
        <ProductForm @add-product="addItem"></ProductForm>
    </div>
</template>

<script>
import uuid from 'uuid/v4';
import VeeValidate from 'vee-validate';
import Vue from 'vue';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
Vue.use(VeeValidate);

export default {
//  name: "app",
  components: {
      ProductList,
      ProductForm
  },
  data() {
    return {
      itemName: "",
      lastItemId: 3,
      itemList: [
        { name: "aaa", id: 1 },
        { name: "bbb", id: 2 },
        { name: "ccc", id: 3 }
      ]
    };
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