import React from 'react'
import UserList from '../components/UserList'

const Users = () => {
  const USERS = [{
    id: "u1",
    name: "Tuan Le",
    image: "https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897",
    places: 3

  }]
  return <UserList items={USERS} />;
};

export default Users;