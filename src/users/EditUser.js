import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

    let navigate = useNavigate()
    const {id} = useParams()

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        role:"",
        email: "",
        phoneNumber: "",
        password:""
    })

    const {firstName, lastName, role, email, phoneNumber, password} = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault() //to avoid showing user detail on uri 
        await axios.patch(`http://localhost:8080/editUser/${id}`, user)
        navigate("/")
    }

    useEffect(() => { //load the detail of current user, showing the original detail
        loadUsers()
    },[])

    const loadUsers = async () => {
        const response = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(response.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h3 className='text-center m-4'>Edit user</h3>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                    <label htmlFor='FirstName' className='form-label'> 
                    Fist name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter first name'
                    name="firstName"
                    value = {user.firstName}
                    onChange = {(e) => onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Lastname' className='form-label'> 
                    Last name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter last name'
                    name="lastName"
                    value = {user.lastName}
                    onChange = {(e) => onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Role' className='form-label'> 
                    Role
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter user's role"
                    name="role"
                    value = {user.role}
                    onChange = {(e) => onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Phone number' className='form-label'> 
                    Phone number
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter phone number'
                    name="phoneNumber"
                    value = {user.phoneNumber}
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
                    placeholder='Enter email'
                    name="email"
                    value = {user.email}
                    onChange = {(e) => onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Password' className='form-label'> 
                    Password
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter a default password'
                    name="password"
                    value = {user.password}
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

export default EditUser