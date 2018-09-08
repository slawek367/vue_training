<template>
    <ul>
        <li v-for="item in itemList" :key="item.id"> {{item.name}} <button class="button2" v-bind:id="item.id" @click="removeItem(item.id)">DEL</button> </li>
    </ul>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    itemList: {
      type: Array
    }
  },
  methods: {
    removeItem(itemId) {
      this.$emit('item-remove', itemId);
    }
  }
};
</script>