import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import imgFacebook from './img/facebook.png'
import imgGithub from './img/github.png'
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './LogIn.css'
import app from "../../firebase.init";

const auth= getAuth(app)

const LogIn = () => {
  const [email,setEmail]=useState([])
  const [password,setPassword] = useState([])

  

  //Email sign in
    const handleEmailInput=(event)=>{
      setEmail(event.target.value);
    }
    const handlePasswordInput=(event)=>{
      setPassword(event.target.value);
    }

    //Google sign in ..
    const googleProvider= new GoogleAuthProvider()
    const handleGoogleSign=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
          const user = result.user;
          console.log(user);
        }) 
        .catch(error=>{
          console.log(error);
        })
    }
    // facebook login
    const facebookProvider =new FacebookAuthProvider()
    const handleFacebookSign =()=>{
      signInWithPopup(auth, facebookProvider)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error=>{
        console.log(error);
      })

    }
    // gitHub sign ini
    const githubProvider =new GithubAuthProvider()
    const handleGithubSign =()=>{
      signInWithPopup(auth, githubProvider)
      .then(result =>{
        const user= result.user;
        console.log(user);
      })
      .catch(error=>{
        console.log(error);
      })
    }


    const handleSubmitBtn=(event)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredential=>{
          const user = userCredential.user;
          console.log(user);
        })
        .catch(error=>{
          console.log(error);
        })
        event.preventDefault();
    }

    const img =require("./img/84-847501_contact-us-google-app-logo-transparent-hd-png.png")
  return (
    <div className='d-flex justify-content-center'>
      <Form onSubmit={handleSubmitBtn} className='w-25  mt-5 p-5 logIn-form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailInput} type="email" placeholder="Enter email" />
          <Form.Text className=" text-black">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordInput} type="password" placeholder="Enter passwordPassword" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>
      
      <h3 className='orForIcon'>OR</h3>
      <div className="icons-container">
          <div>
          <button onClick={handleGoogleSign} className='d-flex btn-icon-login '>
              <img className='icon-img' src={img}alt="" /> <p>Google Sign in</p>
           </button>
           <button onClick={handleFacebookSign} className='d-flex btn-icon-login'>
              <img className='icon-img' src={imgFacebook}alt="" /> <p>Facebook Sign in</p>
           </button>
           <button onClick={handleGithubSign} className='d-flex btn-icon-login'>
              <img className='icon-img' src={imgGithub}alt="" /> <p>Github Sign in</p>
           </button>
          </div>
        </div>
    </div>
  );
};

export default LogIn;
