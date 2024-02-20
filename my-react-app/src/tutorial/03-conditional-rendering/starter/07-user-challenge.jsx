import { useState } from "react";
const UserChallenge = () => {
  const[user,setUser]= useState(null)

  const login= ()=>{
    setUser({name: "Dominion"})
  }
  const logout= ()=> {
    setUser(null)
  
  }
  return (
  <div>
      {user?(
      <div>
          <h4>hello there,{user.name}</h4>
          <button className="btn" onClick={logout}>Login</button>
      </div>
      )
        : 
        (<div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>Logout </button>
      </div>
        )
        }
  </div>);
};

export default UserChallenge;
