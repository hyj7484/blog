import {useState, useEffect} from 'react'

const Login = (props) => {
  const setUser = props.setUser;
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const onUserId = (e) => {
    setUserId(e.target.value)
  }
  const onUserPw = (e) => {
    setUserPw(e.target.value)
  }
  const onEnter = (e) => {
    if(e.key === 'Enter'){
      onLogin()
    }
  }
  const onLogin = () => {
    setUser({userId : userId, userPw : userPw})
  }
  return (
    <>
      <div className="Login_Body" style={{width:"100%", height:"100%"}}>
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="Login_Content">
        <h3>Login</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" onChange={onUserId} onKeyUp={onEnter} value={userId}/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" onChange={onUserPw} onKeyUp={onEnter} value={userPw}/>
        <input type="button" onClick={onLogin} value="Log In"/>
        </div>
      </div>
    </>
  )
}

export default Login;
