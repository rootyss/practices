import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => (
  <li className="list-item">
    <span>{user.name}</span>
    <span>{user.email}</span>
    <span>{user.address.street}</span>
    <span>{user.address.city}</span>
  </li>
);

export default UserItem;