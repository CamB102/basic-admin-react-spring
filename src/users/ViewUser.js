import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewUser = () => {
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const {id} = useParams()

    useEffect(() => {
        loadUser()
    },[])


    const loadUser = async () => {
        const response = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(response.data)
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
                                <b>Name:</b>
                                {user.name}
                            </li>
                            <li className='list-group-item'>
                                <b>Username:</b>
                                {user.username}
                            </li>
                            <li className='list-group-item'>
                                <b>Email:</b>
                                {user.email}
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