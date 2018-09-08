<template>
    <button @click="sort">sort</button>
</template>

<script>
export default {
  name: 'OrderList',
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    sort() {
      let items = this.items.sort((a, b) => {
        if (a.name < b.name){
            return -1
        } else if (a.name > b.name) {
            return 1
        }
        return 0;
      });
      this.$emit('sort', items);
    },
  },
};
</script>

<style scoped>
</style>