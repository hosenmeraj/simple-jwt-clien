import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)

        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })

        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate('/orders')
                }
                console.log(data)
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' name='email' required /><br />
                <input type="password" placeholder='password' name='password' required /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;