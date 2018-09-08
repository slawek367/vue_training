<template>
  <div>
    <ul>
        <Item v-for="user in users" :key=user.id :item=user @item-remove="removeItem"></Item>
    </ul>
    <p v-if="!users.length">No users!</p>
  </div>

</template>

<script>
import Item from './Item';

export default {
  name: "UserList",
  components: {
    Item
  },
  props: {
    users: {
      type: Array
    }
  },
  methods: {
    removeItem(itemId) {
      this.$emit("user-remove", itemId);
    }
  }
};
</script>