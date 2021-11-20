import React, {useState} from "react";


const SignUp = () => {
  /*const [firstName, setFirstName] = useState('')
  const [lasttName, setLasttName] = useState('')
  const [firstName, setFirstName] = useState('')*/



  return (
    <>
      {
        <div align="center" margin-top="100px">
          <br/>
          <br/>
          <br/>
        <form action=""  /*onSubmit={handleRegister}*/>
        <h1>Create an account </h1>
          <br/>
          <br/>
          <input
            type="text"
            name="firstName"
            id="name"
            placeholder="First name*"
            
            
            /*onChange={(e) => setFirst_name(e.target.value)}
            value={first_name}*/
          />
          <div className="firstName error"></div>
          <br /> 
          <input
            type="text"
            name="lastName"
            id="name"
            placeholder="Last name*"
            
            /*onChange={(e) => setLast_name(e.target.value)}
            value={last_name}*/
          />
          <div className="firstName error"></div>
          <br /> 
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter an email adress*"
            /*onChange={(e) => setEmail(e.target.value)}
            value={email}*/
          />
          <div className="email error"></div>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password*"
            /*onChange={(e) => setPassword(e.target.value)}
            value={password}*/
          />
          <div className="password error"></div>
          <br />

          <input
            type="password"
            name="password"
            id="password-conf"
            placeholder="Repeat your password*"
            /*onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}*/
          />
          <div className="password-confirm error"></div>
          <br />
          <label for="role">Role : </label>
          <br />
            <select name="role" id="role">
            <option value="seller">Vendeur</option>
            <option value="customer">Client</option>
            </select> 
           
           <br/><br/>
           
        <input type="submit" value="Signup" />
        </form>
      </div>
      }
    </>
  );
};

export default SignUp;