import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewUser = () => {
    const {id} = useParams()

    useEffect(() => {
        loadUser()
    },[])

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        role:"",
        email: "",
        phoneNumber: "",
        password:""
    })

    const {firstName, lastName, role, email, phoneNumber, password} = user

    const loadUser = async () => {
        const response = await axios.patch(`http://localhost:8080/editUser/${id}`, user)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h3 className='text-center m-4'>User Detail</h3>
                <div className='card'>
                    <div className='card-header'>
                        Details of user id:
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>First Name:</b>
                                {user.firstName}
                            </li>
                            <li className='list-group-item'>
                                <b>Username:</b>
                                {user.lastName}
                            </li>
                            <li className='list-group-item'>
                                <b>Role:</b>
                                {user.role}
                            </li>
                            <li className='list-group-item'>
                                <b>Phone number:</b>
                                {user.phoneNumber}
                            </li>
                            <li className='list-group-item'>
                                <b>Email:</b>
                                {user.email}
                            </li>
                            <li className='list-group-item'>
                                <b>Password:</b>
                                {user.password}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to={"/"}>Back to home</Link>
            </div>
        </div>
    </div>
  )
}

export default ViewUser