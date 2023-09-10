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



export const AddCustomer = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

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
            name: name,
            email: email,
            phone: phone,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/customer/register', data, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            navigate('/registerCustomer')
            setIsClicked(true)

        } catch (error) {
            setError('Customer registration failed, try again.')
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
                    <button className="h-full pb-8" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <FontAwesomeIcon icon={faCity} className={`text-2xl text-customLight ${hovered ? 'hidden' : ''}`} />
                        <span className={`font-bold text-xs text-customLight ${hovered ? '' : 'hidden'}`}>
                            CUSTOMERS
                        </span>
                    </button>
                </div>
                <div className="w-full text-center shadow-xl pb-8">
                    <button><Link to={"/equipments"}><FontAwesomeIcon icon={faFireExtinguisher} className="text-3xl text-customDark mt-9" /></Link></button>
                </div>
                <div className="w-full text-center shadow-xl pb-8">
                    <button><Link to={"/maintenances"}><FontAwesomeIcon icon={faToolbox}className="text-3xl text-customDark mt-9 animate-fade" /></Link></button>
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
                <h1 className="ml-16 animate-fade-in text-2xl text-customDark font-semibold mb-7">CUSTOMERS</h1>
                <div className="flex ml-16">
                <Link to={"/registerCustomer"}><button className="text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-48 mr-2 rounded-lg shadow-lg">CUSTOMER</button></Link>
                    <button className="text-xs border-2 border-light bg-light text-customDark py-2 w-48 mr-2 rounded-lg shadow-lg">REGISTER</button>
                    {/* <input type="text" id="search" placeholder="Search here" className="shadow-lg border w-96 text-base px-2 py-1 focus: outline-none bg-light rounded-2xl" />
                    <button className="ml-2">
                        <FontAwesomeIcon icon={faSearch} className="text-2xl text-customDark " />
                    </button> */}
                </div>
                <form onSubmit={handleSubmit}>
                    <h1 className="mt-14 ml-14 mr-64 text-xs text-customDark font-semibold">NAME</h1>
                    <input value={name} onChange={(e) => setName(e.target.value)} id="name" type="name" placeholder="Customer Name" className="ml-14 mt-4 shadow-lg border w-2/6 px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <h1 className="mt-8 ml-14 mr-64 text-xs text-customDark font-semibold">EMAIL</h1>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Customer Email" className="ml-14 mt-4 shadow-lg border w-2/6 px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <h1 className="mt-8 ml-14 mr-64 text-xs text-customDark font-semibold">PHONE</h1>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" type="text" placeholder="Customer phone number" className="ml-14 mt-4 shadow-lg border w-2/6 px-2 py-1 focus:outline-none bg-light rounded-lg"/>
                    <br />
                    <div className="p-5">
                    <button className="ml-72 mt-8 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-48  mr-2 rounded-lg shadow-lg">REGISTER</button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>} {/* Display error message if present */}
                </form>
            </div>
        </div>
     );
}
 