import React,{useState} from 'react'

const LoginForm = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [allEnrty, setallEnrty] = useState([])

const submitForm=(e)=>{

   e.preventDefault()
   if (email && password){
   // here id is time which is diffrent always .we are taking this time to set key in map function (allEntry)
   const newentry={id:new Date().getTime().toString(),email:email, password:password};
   setallEnrty([...allEnrty,newentry])
// TO REMOVE EMAIL AND PASS FROM SCREEN AFTER LOGIN BUTTON CLICK
   setemail("");
   setpassword("");
   }else{
        alert("please fill the form then submit")
   }

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
                     const {id,email,password}=ele
                     return(                     
                     <div className="container" key={id}>
                     <p>{email}</p>
                     <p>{password}</p>
                     </div>

                 ) })
           }
      </div>
      </>
)}
export default LoginForm
