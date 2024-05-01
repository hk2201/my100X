import { Header } from "../Components/Header"
import { InputBox } from "../Components/InputBox"
import { Buttons } from "../Components/Buttons"
import { Subheading } from "../Components/Subheading"
import { Warnings } from "../Components/Warnings"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
export function Signup() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: ""

    })
    const navigate = useNavigate();
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">

                    <Header label={"Sign Up"} />
                    <Subheading label={"Enter your Information to create an account"} />
                    <InputBox type={"text"} label={"First Name"} placeholder={"Harshad"} onChange={(e) => {
                        setData((prev) => ({
                            ...prev,
                            firstName: e.target.value
                        }))
                    }} />

                    <InputBox type={"text"} label={"Last Name"} placeholder={"Khandare"} onChange={(e) => {
                        setData((prev) => ({
                            ...prev,
                            lastName: e.target.value
                        }))
                    }} />
                    <InputBox type={"email"} label={"Email"} placeholder={"harshad@gmail.com"} onChange={(e) => {
                        setData((prev) => ({
                            ...prev,
                            username: e.target.value
                        }))
                    }} />
                    <InputBox type={"password"} label={"Password"} placeholder={"1234"} onChange={(e) => {
                        setData((prev) => ({
                            ...prev,
                            password: e.target.value
                        }))
                    }} />
                    {console.log(data)}
                    <div className="pt-4">

                        <Buttons onClick={async () => {
                            const res = await axios.post("http://localhost:3000/api/v1/user/signup", data)
                            localStorage.setItem("token", res.data.token);
                            navigate("/signin")
                        }} label={"Sign up"} navigate={"/signin"} />
                    </div>
                    <Warnings label={"Already have an account ?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>
    )
};