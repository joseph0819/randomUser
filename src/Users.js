import React from "react";
import User from "./User";


const Users = ({profile,page }) => {
   const startIndex = (page -1) * 5;
   const selectedUsers = profile.slice(startIndex, startIndex + 5)
    return(
    selectedUsers.map((user)=> (
        <User user ={user} key={user.login.uuid}/>
    ))
    
     );
}
 
export default Users;