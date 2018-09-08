import axios from 'axios';

const store = {
  state: {
    users: []
  },
  async fetchUsers() {
    this.state.users = await axios.get('http://localhost:3000/users').then(res => res.data);

  },
  addUser(user) {
    this.state.users.push(user);
  }
};

export default store;