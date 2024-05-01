import { Header } from "../Components/Header"
import { InputBox } from "../Components/InputBox"
import { Buttons } from "../Components/Buttons"
import { Subheading } from "../Components/Subheading"
import { Warnings } from "../Components/Warnings"
import { useState } from 'react';
export function Signin() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: ""

    })
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">

                    <Header label={"Sign In"} />
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
                    <div className="pt-4">

                        <Buttons label={"Sign in"} onClick={() => {

                        }} />
                    </div>
                    <Warnings label={"Don't have an account?"} buttonText={"Sign up"} to={"/"} />
                </div>
            </div>
        </div>
    )
};