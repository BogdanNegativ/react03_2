import React, { Component } from 'react';
import User from '../User';
import SelectedUsers from '../SelectedUsers';
import UserList from '../UserList';
const users = [
  {
    id: 1,
    name: 'Арнольд Шварцнегер',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg',
    married: false
  },
  {
    id: 2,
    name: 'Илон Маск',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
    married: false
  },
  {
    id: 3,
    name: 'Сильвестер Сталлоне',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg/220px-Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg',
    married: true
  }
]

class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users.map(user => ({
        ...user,
        isSelected: false
      }))
    }
  }
  selectUser = (id) => {
    const { users } = this.state;
    const newUsers = users.map(user => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected
    }))
    this.setState({ users: newUsers })
  }
  render() {
    const { users } = this.state;

    return (
      <>
        <UserList users={users} selectUser={this.selectUser} />
        <SelectedUsers users={users} selectUser={this.selectUser} />
      </>
    );
  }
}

export default UserSection;
