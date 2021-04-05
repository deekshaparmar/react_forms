import React,{useState} from 'react'

const LoginForm = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [allEnrty, setallEnrty] = useState([])

const submitForm=(e)=>{

   e.preventDefault()

   const newentry={email:email, password:password};

   setallEnrty([...allEnrty,newentry])

}
    return (
    <>
    <form>
    <h2>Welcome To REACT Form</h2>
    <p>LOGIN</p>
    <div className="container">
      
      <label htmlFor="email"><b>Email</b></label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e)=>{setemail(e.target.value)}}
                 required pattern='/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'/>

     

      <label htmlFor="name"><b>Password</b></label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={password}
            placeholder="Enter your password"
            minLength="8"
                 required
            onChange={(e)=>{setpassword(e.target.value)}}
                 />
      
      <button onClick={submitForm} type="submit">Login</button>
    
      </div>
      </form>
      <div>
           {
                allEnrty.map((ele)=>{
                     return(                     
                     <div className="container">
                     <p>{ele.email}</p>
                     <p>{ele.password}</p>
                     </div>

                 ) })
           }
      </div>
      </>
)}
export default LoginForm
