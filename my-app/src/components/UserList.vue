<template>
  <div>
    <ul>
      <li v-for="p in users" :key="p.id">{{ p.name }}</li>
    </ul>
    <p v-if="!users.length">No users!</p>
  </div>
</template>

<script>
  export default {
    name: "UserList",
    props: {
      users: {
        type: Array,
      }
    }
  }
</script>