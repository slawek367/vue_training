<template>
    <li> {{item.name}} <button class="button2" @click="removeItem(item.id)">DEL</button> </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    removeItem(itemId) {
      this.$emit('item-remove', itemId);
    }
  }
};
</script>