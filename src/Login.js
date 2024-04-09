import React from 'react'
import './Login.css'
import { Button } from '@mui/material';
import {auth, provider} from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();

        const signIn = () => {
            //sign In
            auth.signInWithPopup(provider)
            .then (result =>{

              dispatch({
                type: actionTypes.SET_USER,
                user: result.user,

              })
                console.log (result.user);
            }).
            catch(error => alert(error.message));
        };

  return (
    <div className='login'>
      <div className="login__logo">
        <img  src='https://betterstudio.com/wp-content/uploads/2022/12/5-facebook-logo-logo-PNG-betterstudio.com_.png'
        alt=''
        />
      </div>
      <Button type='submit' onClick={signIn} 
      >
        Sign In
      </Button>  
    </div>
  )
}

export default Login;
