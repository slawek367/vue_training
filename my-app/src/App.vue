<template>
    <div id="app">
        <ul>
            <li v-for="item in itemList"> {{item.name}} <button class="button2" v-bind:id="item.id" @click="removeItem(item.id)">DEL</button> </li>
        </ul>
        <button id="button1" @click="addItem('aaa')">Add item</button>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

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