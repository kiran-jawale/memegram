import React from "react";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import Button from '../../components/Button'

export default function Logout() {
  const dispatch = useDispatch();

  async function logoutHandler() {
      fetch('/api/v1/logout')
      .then(response => response.json())
      .then(result => {
        if(!result.success) {
          console.log(result)
        }
        dispatch(logout())
      });      
  }

  return (
    <Button className="inline-bock px-6 py-2 duration-200 hover:bg-zinc-700 rounded-full"
    onClick = {logoutHandler}>
        Logout
    </Button>
  )
}