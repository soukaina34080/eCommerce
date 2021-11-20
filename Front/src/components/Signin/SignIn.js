const SignIn = () => {
  return (
    <div align="center" margin-top="100px">
      <br />
      <br />
      <br />
      <form /*action="" onSubmit={handleLogin} id="sign-up-form"*/>
        <h1>Login to your account </h1>
        <br />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          /*onChange={(e) => setEmail(e.target.value)}
        value={email}*/
        />
        <div className="email error"></div>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          /*onChange={(e) => setPassword(e.target.value)}
        value={password}*/
        />
        <div className="password error"></div>
        <br />
        <input type="submit" value="Login" />
        <br/>
        <br/>
        <a href="/">You don't have an account ? Please click Here to signup !</a>
      </form>
    </div>
  );
};
export default SignIn;
