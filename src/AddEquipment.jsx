import React,{ useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";



export const AddEquipment = (props) => {
    const [productName, setName] = useState('');
    const [qty, setQty] = useState('');
    const [customer, setCustomer] = useState('');
    const [error, setError] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [date, setDate] = useState('');
    const { data: customers } = useFetch('http://localhost:8080/api/customer');

    const [isClicked, setIsClicked] = useState(false);

    const navigate = useNavigate();

    const storedName = localStorage.getItem('name');
    const customerName = storedName ? storedName: "";

    const handleClearLocalStorage = () => {
        localStorage.clear();
        navigate('/login');
        setIsClicked(true);
    }

    const handleSubmit =async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        const data = {
            productName: productName,
            qty: qty,
            customer: {
                "id": selectedName
            }
            //date: date
        };

        try {
            const response = await axios.post('http://localhost:8080/api/equipment/register', data, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            navigate('/equipments')
            setIsClicked(true)

        } catch (error) {
            setError('Equipment registration failed, try again.')
            console.error(error);
        }

        
    };

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return ( 
        <div className="bg-customLight h-screen flex">
            <div className="h-full w-1/12 bg-customMedium py-56 flex-initial">
                <div className="w-full text-center mt-3.5 shadow-xl">
                    <Link to={"/RegisterCustomer"}>
                        <button className="h-full pb-8" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <FontAwesomeIcon icon={faCity} className={`text-2xl text-customLight ${hovered ? 'hidden' : ''}`} />
                            <span className={`font-bold text-xs text-customLight ${hovered ? '' : 'hidden'}`}>
                                CUSTOMERS
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="w-full text-center shadow-xl pb-8">
                    <button><FontAwesomeIcon icon={faFireExtinguisher} className="text-3xl text-customDark mt-9" /></button>
                </div>
                <div className="w-full text-center shadow-xl pb-8">
                <Link to={"/maintenances"}>
                    <button><FontAwesomeIcon icon={faToolbox}className="text-3xl text-customDark mt-9 animate-fade" /></button>
                </Link>
                </div>
                <div className="w-full text-center shadow-xl pb-8">
                    <button onClick={handleClearLocalStorage} >
                        <FontAwesomeIcon icon={faArrowRight} className="text-3xl text-customDark mt-9" />
                    </button>
                </div>
            </div>
            <div className="flex-grow m-7">
                <div className="flex flex-grow justify-end">
                    <h1 className="m-7 text-lg block text-customDark font-semibold">{storedName}</h1>
                    <div className="h-20 w-20 bg-customMedium rounded-full"></div>
                </div>
                <h1 className="ml-14 animate-fade-in text-2xl text-customDark font-semibold mb-7">EQUIPMENTS</h1>
                <div className="flex ml-14">
                <Link to={"/equipments"}><button className="text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-48 mr-2 rounded-lg shadow-lg">EQUIPMENTS</button></Link>
                    <button className="text-xs border-2 border-light bg-light text-customDark py-2 w-48 mr-2 rounded-lg shadow-lg">REGISTER</button>
                    {/* <input type="text" id="search" placeholder="Search here" className="shadow-lg border w-96 text-base px-2 py-1 focus: outline-none bg-light rounded-2xl" />
                    <button className="ml-2">
                        <FontAwesomeIcon icon={faSearch} className="text-2xl text-customDark " />
                    </button> */}
                </div>
                <form onSubmit={handleSubmit}>
                    <h1 className="mt-14 ml-14 mr-64 text-xs text-customDark font-semibold">NAME</h1>
                    <input value={productName} onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="Equipment Name" className="ml-14 mt-4 shadow-lg border w-2/6 px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <h1 className="mt-8 ml-14 mr-64 text-xs text-customDark font-semibold">QUANTITY</h1>
                    <input value={qty} onChange={(e) => setQty(e.target.value)} id="quantity" type="text" placeholder="Equipment Quantity" className="ml-14 mt-4 shadow-lg border w-2/6 px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <h1 className="mt-8 ml-14 mr-64 text-xs text-customDark font-semibold">CUSTOMER</h1>
                    <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)} id="customer" className="ml-14 mt-4 shadow-lg border w-2/6 px-2 py-1 focus:outline-none bg-light rounded-lg">
                    { customers && customers.map((cust) => (
                        <option key={cust.id} value={cust.id}>
                            {cust.name}
                        </option>
                    ))}
                    </select>
                    <h1 className="mt-8 ml-14 mr-64 text-xs text-customDark font-semibold">DATE CREATED</h1>
                    <input value={date} onChange={(e) => setDate(e.target.value)} id="date" type="date" placeholder="Date Created" className="ml-14 mt-4 shadow-lg border w-2/6 px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <br />
                    <div className="p-5">
                    <button className="ml-72 mt-2 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-48  mr-2 rounded-lg shadow-lg">REGISTER</button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>} {/* Display error message if present */}
                </form>
            </div>
        </div>
     );
}
 