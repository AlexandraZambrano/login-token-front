import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';

const DASHBOARD_URL = '/dashboard/users/list';

function UsersList() {

    const [users, setUsers] = useState([])

    const token = localStorage.getItem("auth_token");
    const userRole = localStorage.getItem("auth_role");

    console.log(token)

    if(userRole == 'ROLE_ADMIN'){
        // useEffect(() => {
        try{


                const axiosRequest = async() => {
                    await axios.get(DASHBOARD_URL,{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(res => {
                        setUsers(res.data)
                    })
                    // .then(data=>console.log(data.data))
                }
        
                axiosRequest()
                
            }catch{
                console.log('Algo salio mal :(')
            }
        // }, [])
        }else {
            return <h1>NO AUTORIZADO</h1>
        }


  return (
    <div>
        {
            users.map(int => {
                return (
                    <div key={int.id}>
                        <h1>{int.username}</h1>
                    </div>
                )
            })
        }
      <h1>ESTAS EN LA USER-LIST</h1>
    </div>
  )
}

export default UsersList
