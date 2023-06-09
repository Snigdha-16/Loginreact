import React, { useState } from 'react'

const Login = () => {

  const [userRegistration, setuserRegistration] = useState({
    username: "",
    phone: "",
    email: "",
    password: ""
  });
  const[records,setRecords]= useState([]);

  const handle = (e) => {
    const name=e.target.name;
    const value =e.target.value;
    console.log(name, value);

    setuserRegistration({...userRegistration,[name]:value});

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newRecord = { ...userRegistration, id : new Date().getTime().toString()}
    console.log(records);
setRecords([...records, newRecord]);
console.log(records);

setuserRegistration({username:"",phone:"",email:"",password:""});
  }
  return (
    <>
      <form action='' onSubmit={handleSubmit}>
        <div className='container'>
          <div>
            <label htmlFor='username'>FullName</label>
            <br></br>
            <input type="text" autoComplete="off" value={userRegistration.username} onChange={handle} name="username" id="username" />
          </div>
          <br></br>
          <div>
            <label htmlFor='phone'>PhoneNumber</label><br></br>
            <input type="text" autoComplete="off" value={userRegistration.phone} onChange={handle} name="phone" id="phone" />
          </div>
          <br></br>
          <div>
            <label htmlFor='email'>Email</label>
            <br></br>
            <input type="text" autoComplete="off" value={userRegistration.email} onChange={handle} name="email" id="email" />
          </div>
          <br></br>
          <div>
            <label htmlFor='password'>Password</label><br></br>
            <input type="password" autoComplete="off" value={userRegistration.password} onChange={handle} name="password" id="password" />
          </div>
          <br></br>
          <button className='submit'>Registration</button>
        </div>
        <br></br>
        <br></br>
      </form>

      <div className='con'>
      {

        records.map((curElem)=>{
          return(
            <div className='showDataStyle'>
             <p>{curElem.username}</p>
             <p>{curElem.phone}</p>
             <p>{curElem.email}</p>
             <p>{curElem.password}</p>
            </div>
          )
        })
      }

      </div>


    </>)
}

export default Login
