import "../style/register-login.scss"




const Login = () => {
  return (
    <>
    <div className="box">

      <div className="container">
        <div className="title">Login</div>
        <form action="#">
          <div className="user_details">
            <div className="input_pox">
              <span className="datails">Username</span>
              <input type="text" placeholder="enter your Username" required />
            </div>
            <div className="input_pox">
              <span className="datails">Email</span>
              <input type="text" placeholder="enter your Email" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
