import axios from 'axios';

const store = {
  state: {
    users: []
  },
  async fetchUsers() {
    this.state.users = await axios.get('users.json').then(res => res.data);
  },
  addUser(user) {
    this.state.users.push(user);
  }
};

export default store;