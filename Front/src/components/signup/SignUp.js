import React, {useState} from "react";
import axios from 'axios';


const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const register = () => {
    axios.post(`http://localhost:4000/api/auth/register`, {
      nom:lastName,
      prenom:firstName,
      email:email, 
      mot_de_passe:password,
      role:role,
    }).then((response)=>{
      console.log(response);
    });
  };
  return (
    <>
      {
        <div align="center" margin-top="100px">
          <br/>
          <br/>
          <br/>
        <form>
        <h1>Create an account </h1>
          <br/>
          <br/>
          <input
            type="text"
            name="firstName"
            id="name"
            placeholder="First name*"
            onChange={(e) => {
              setFirstName(e.target.value);
            }} 
          />
          <div className="firstName error"></div>
          <br /> 
          <input
            type="text"
            name="lastName"
            id="name"
            placeholder="Last name*"
            
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <div className="firstName error"></div>
          <br /> 
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter an email adress*"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="email error"></div>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password*"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="password error"></div>
          <br />

          <label for="role">Role : </label>
          <br />
            <select 
            name="role" 
            id="role" 
            onChange={(e)=>{
              const selectedRole = e.target.value;
             setRole(selectedRole);
            }}
            >
            <option value="Vendeur">Vendeur</option>
            <option value="Client">Client</option>
            </select> 
           
           <br/><br/>
           
        <input type="submit" value="Signup" onClick={register} />
        </form>
      </div>
      }
    </>
  );
};

export default SignUp;