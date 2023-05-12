import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../store/users/userSlice'


function Users() {
 const dispatch = useDispatch()
 useEffect(() => {
  dispatch(fetchUser());
}, [dispatch]);
 const { users, isLoading, error } = useSelector((state) => state.user)
 console.log(users);
 if (isLoading) {
  return (
   <h4> Loading ...</h4>
  )
 }
 if (error){
  return (
  <h4>{error}</h4> 
  )
 }

 return(
  users?.map((user, i) => (
   <div key={++i} >
   <p>Firstname: {user.name.first} </p>
   <p>lastName : {user.name.last} </p>
   <hr></hr>
   </div>
  )
  )
 )
}

export default Users