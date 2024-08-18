import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

export default function IsLogged({children, isAuthNeeded = true}) {
    const navigate = useNavigate(); //for redirection
    const [loading, setLoading ] = useState(true); //till checking authStatus and pageStatus
    const authStatus = useSelector(state => state.auth.authStatus);

    useEffect(() => {

      if(isAuthNeeded && authStatus !== isAuthNeeded){ //true && true !== true => true && false
        //if page needs auth & user not logged then redirect for login
        navigate('/login');
      } else if(!isAuthNeeded && authStatus !== isAuthNeeded) { //false && true !== true => false && false
        //if page doesn't need auth but user is logged(login/register pages), redirect to profile/dashboard
        navigate('/profile');
      } //else whether user logged or not, pages don't care😉
      setLoading(false); 
    }, [authStatus, navigate, isAuthNeeded]);
    
    return loading ? <h1><Loading /></h1> : {children};
}