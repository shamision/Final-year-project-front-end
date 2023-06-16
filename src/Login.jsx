import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="flex justify-center items-center h-screen bg-customMedium">
            <div className="w-2/5 p-6 shadow-lg bg-customLight rounded-xl">
                <form className="text-center">
                    <h1 className="text-xl block text-customDark text-center font-semibold mb-12 mt-2">LOGIN</h1>
                    <label htmlFor="email" className="text-left text-xs block text-customDark text-base m-2 ml-12">EMAIL</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Your email" className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <label htmlFor="password" className="text-left text-xs block text-customDark text-base m-2 ml-12">PASSWORD</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="***********" id="password" name="password" className="shadow-lg border w-5/6 bg-base px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <button onClick={() => props.onFormSwitch('registerCustomer')} type="submit" className="text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-2/5 rounded-lg m-4">LOGIN</button>
                </form>
                <div className="text-center mb-2 text-customDark">
                    <button onClick={() => props.onFormSwitch('register')}>You don't have an account? Sign up</button>
                </div>
            </div>
        </div>
    )
}