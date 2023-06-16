import React, { useState } from "react";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="flex justify-center items-center h-screen bg-customMedium">
            <div className="w-2/5 p-6 shadow-lg bg-customLight rounded-xl">
                <form className="text-center">
                    <h1 className="text-xl block text-customDark text-center font-semibold mb-12 mt-2">SIGNUP</h1>
                    <label htmlFor="name" className="text-left text-xs block text-customDark text-base m-2 ml-12">NAME</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} id="name" type="name" placeholder="Your name" className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <label htmlFor="email" className="text-left text-xs block text-customDark text-base m-2 ml-12">EMAIL</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Your email" className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <label htmlFor="phone" className="text-left text-xs block text-customDark text-base m-2 ml-12">PHONE</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" type="phone" placeholder="Your phone" className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <label htmlFor="phone" className="text-left text-xs block text-customDark text-base m-2 ml-12">ROLE</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} id="role" className="text-customDark shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg">
                        <option value="Technisian" className="text-customMedium">Technisian</option>
                        <option value="Marketing Manager">Marketing Manager</option>
                        <option value="Financial Manager">Financial Manager</option>
                    </select>
                    <label htmlFor="password" className="text-left text-xs block text-customDark text-base m-2 ml-12">PASSWORD</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password" className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <button type="submit" className="text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-2/5 rounded-lg m-4">SIGNUP</button>
                </form>
                <div className="text-center mb-2 text-customDark">
                    <button onClick={() => props.onFormSwitch('login')}>You already have an account? Login</button>
                </div>
            </div>
        </div>
    )
}