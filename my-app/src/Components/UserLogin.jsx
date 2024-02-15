import React, { useState } from 'react'
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import{Link} from "react-router-dom";
function UserLogin  ()  {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const submitHandler = (e)=>{
    e.preventDefault();
  }
  return (
   <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <form onSubmit={submitHandler}>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'
      value={email} onChange={event => setEmail(event.target.value)}
      />
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
      value={password} onChange={event => setPassword(event.target.value)}
      />
</form>
      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

  <Link to={"/Login"}> <MDBBtn className="mb-4 w-100">Sign in</MDBBtn></Link>   

      <div className="text-center">
        <p>Not a member? <a href="/UserSignup">Register</a></p>
     <p>or sign up with:</p>
        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
  )
}

export default UserLogin;