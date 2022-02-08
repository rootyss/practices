import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";
import UserItem from "./UserItem";


const UserList = () => {
    const {users, error, loading} = useTypedSelector((state) => state.user);
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <ul>
            {users.map(({name, id}) =>
              <UserItem key={id} name={name}/>
            )}
        </ul>
    );
};

export default UserList;
