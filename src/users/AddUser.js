import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddUser = () => {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const {name, username, email} = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault() //to avoid showing user detail on uri 
        await axios.post("http://localhost:8080/user", user)
        navigate("/")
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h3 className='text-center m-4'>Register user</h3>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'> 
                    Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your name'
                    name="name"
                    value = {user.name}
                    onChange = {(e) => onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='UserName' className='form-label'> 
                    Username
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your username'
                    name="username"
                    value = {user.username}
                    onChange = {(e) => onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'> 
                    Email
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your email'
                    name="email"
                    value = {user.email}
                    onChange = {(e) => onInputChange(e)}
                    />
                </div>
                <button type="submit" className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddUser