import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import {login, logout} from './redux/slices/authSlice.js';
import Loading from './components/Loading.jsx';
import Layout from './pages/layout/Layout.jsx'

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {

      fetch('/api/v1/current-user')
      .then(response => response.json())
      .then(userData => {
        if(userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout())
        }
      }).catch(err => console.log(err))
      .finally(() => setLoading(false));
    },[]);

    return (
      loading ? <Loading /> : (
        <Layout />
      )
    )
}

export default App