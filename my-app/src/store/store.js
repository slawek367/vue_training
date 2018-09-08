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
    axios.post('http://localhost:3000/users', user);
  },
  removeUser(userId){
    this.state.users.pop(userId);
    axios.delete('http://localhost:3000/users/' + userId);
  }
};

export default store;