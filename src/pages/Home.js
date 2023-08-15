import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Home = () => {
    const [users, setUsers]  = useState([])

    const {id} = useParams()

    //everytime when opening web, it renders again
    useEffect(() => {
        // console.log("render")
        loadUsers()
    }, []) //if we not put the empty array, it will reder unlimted time
    //wait for everything to load, otherwise it won't excute the next line
    const loadUsers = async() => {
        const response = await axios.get("http://localhost:8080/users")
        setUsers(response.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }


  return (
    <div className='container'>Home
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">

                {
                    users.map((user, index) => (
                    <tr>
                    <th scope="row" key={index}>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className='btn btn-primary mx-2' to={`/viewUser/${user.id}`}>View</Link>
                        <Link className='btn btn-outline-primary mx-2' to={`/editUser/${user.id}`}>Edit</Link>
                        <button 
                        className='btn btn-danger mx-2'
                        onClick={()=> deleteUser(user.id)}>Delete</button>
                    </td>
                    </tr>
                    ))
                }   
                </tbody>
                </table>
        </div>
    </div>
  )
}

export default Home