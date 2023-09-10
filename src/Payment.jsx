import axios from "axios";
import { useState } from "react";

export const Payment = (props) => {
    const [number, setNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            number: number,
            amount: amount,
        };

        try {
            const response = await axios.post('http://localhost:5015/api/pay', data);
            setIsClicked(true);
        } catch (error) {
            setError('Check your phone for the message');
        }
    };

    return(
        <div className="flex justify-center items-center h-screen bg-customMedium">
            <div className="w-2/5 p-6 shadow-lg bg-customLight rounded-xl">
                <form className="text-center" onSubmit={handleSubmit}>
                    <h1 className="text-xl block text-customDark text-center font-semibold mb-12 mt-2">Payment</h1>
                    <h1 className="text-left text-xs block text-customDark text-base m-2 ml-12">Phone</h1>
                    <input value={number} onChange={(e) => setNumber(e.target.value)} type="text" id="number" placeholder="Your Phone number" className="shadow-lg border w-5/6 px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <h1 className="text-left text-xs block text-customDark text-base m-2 ml-12">Amount</h1>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" id="amount" placeholder="Enter the amount" className="shadow-lg border w-5/6 px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <button className="text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-2/5 rounded-lg m-4">PAY</button>
                    {error && <p className="text-customDark">{error}</p>}
                </form>
            </div>
        </div>
    )
}