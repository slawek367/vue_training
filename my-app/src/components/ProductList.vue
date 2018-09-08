<template>
    <ul>
        <Item v-for="item in itemList" :key=item.id :item=item @item-remove="removeItem"></Item>
    </ul>
</template>


<script>
import Item from './Item';

export default {
  name: "ProductList",
  components: {
      Item
  },
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