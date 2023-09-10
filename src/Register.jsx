import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('Technician');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [isClicked, setIsClicked] = useState(false);

    const navigate = useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
                name: name,
                email: email,
                phone: phone,
                role: role,
                password: password,
            });

            const token = response.data.token;

            localStorage.setItem('token', token);

            navigate('/registerCustomer');
            setIsClicked(true);


        } catch (error) {
            setError('Registration failed, try again.')
            console.error(error);
        }
    }

    return(
        <div className="flex justify-center items-center h-screen bg-customMedium">
            <div className="w-2/5 p-6 shadow-lg bg-customLight rounded-xl">
                <form className="text-center" onSubmit={handleSubmit}>
                    <h1 className="text-xl block text-customDark text-center font-semibold mb-12 mt-2">SIGNUP</h1>
                    <label htmlFor="name" className="text-left text-xs block text-customDark text-base m-2 ml-12">NAME</label>
                    <input required value={name} onChange={(e) => setName(e.target.value)} id="name" type="name" placeholder="Your name" className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <label htmlFor="email" className="text-left text-xs block text-customDark text-base m-2 ml-12">EMAIL</label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Your email" className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <label htmlFor="phone" className="text-left text-xs block text-customDark text-base m-2 ml-12">PHONE</label>
                    <input required value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" type="phone" placeholder="Your phone" className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <label htmlFor="phone" className="text-left text-xs block text-customDark text-base m-2 ml-12">ROLE</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} id="role" className="text-customDark shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg">
                        <option value="Technician" className="text-customMedium">Technician</option>
                        <option value="MarketingManager">Marketing Manager</option>
                        <option value="FinancialManager">Financial Manager</option>
                    </select>
                    <label htmlFor="password" className="text-left text-xs block text-customDark text-base m-2 ml-12">PASSWORD</label>
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password" className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <button type="submit" className="text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-2/5 rounded-lg m-4">SIGNUP</button>
                </form>
                <div className="text-center mb-2 text-customDark">
                    <button>
                        <Link to={"/login"}>You already have an account? Login</Link>
                    </button>
                </div>
                {error && <p className="text-red-500">{error}</p>} {/* Display error message if present */}
            </div>
        </div>
    )
}