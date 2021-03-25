import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/actions/user";
import {useAction} from "../hooks/useAction";

const UserList : React.FC = () => {

    const {error,isLoading,users} = useTypedSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(()=>{
        fetchUsers()
    },[])

    if (isLoading){
        return <h1>Loading...</h1>
    }
    if (error){
        return <h1>Error</h1>
    }

    return (
        <div>
            {
                users.map(user =>
                    <div key={user.id}>
                        {user.name}
                    </div>
                )
            }
        </div>
    );
};

export default UserList;
