import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/users`)
      .then(res => {
        const users = res.data.success[0];
        console.log(res.data);
        this.setState({ users });
      })
  }

  render() {
    return (
      
      <ul>
        { this.state.users.map(user => <li>{user.nom}</li>)}
      </ul>
      
    )
  }
}