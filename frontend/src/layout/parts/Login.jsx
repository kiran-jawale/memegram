import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button';

export default function Login() {
    const navigate = useNavigate();
    return (
        <Button className='hover:bg-zinc-700 hover:border-zinc-400'
        onnClick={() => navigate('/authpage')}>
            Login
        </Button>
    )
}