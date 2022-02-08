import React, {FC} from 'react';
import {UItem} from "../types/users";

const UserItem: FC<UItem> = ({name}) => {
    return (
        <li>{name}</li>
    );
};

export default UserItem;
