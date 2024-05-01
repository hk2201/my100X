import { useEffect, useState } from "react"
import { Buttons } from "./Buttons"
import { SendMoney } from "../Pages/SendMoney"
import { useNavigate } from 'react-router-dom'
import axios from "axios"


export function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFiler] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return <>
        <div className="font-bold  text-md p-3">
            Users
        </div>
        <div className="my-2 p-3 w-3/4 ">
            <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded-md border-slate-200" onChange={(e) => {
                setFiler(e.target.value)
            }}></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>

}

function User({ user }) {
    const navigate = useNavigate();
    return <div className="flex justify-between w-3/4 ">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful ">
            <Buttons label={"Send Money"} onClick={() => {
                navigate(`/send?id=${user._id}&name=${user.firstName}`)
            }} />
        </div>
    </div>
}