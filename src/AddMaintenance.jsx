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



export const AddMaintenance = (props) => {
    const [productName, setName] = useState('');
    const [qty, setQty] = useState('');
    const [customer, setCustomer] = useState('');
    const [error, setError] = useState('');
    const [cost, setCost] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [selectedEquipment, setSelectedEquipment] = useState('');
    const [date, setDate] = useState('');
    const { data: equipments } = useFetch('http://localhost:8080/api/equipment');
    const { data: employees } = useFetch('http://localhost:8080/api/v1/auth/employees');


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
            equipment: {
                "id": selectedEquipment
            },
            employee: {
                "id": selectedName
            },
            cost: cost
        };

        try {
            const response = await axios.post('http://localhost:8080/api/maintenance/register', data, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            navigate('/maintenances')
            setIsClicked(true)

        } catch (error) {
            setError('Maintenance registration failed, try again.')
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
                <Link to={"/equipments"}>
                    <button><FontAwesomeIcon icon={faFireExtinguisher} className="text-3xl text-customDark mt-9" /></button>
                </Link>
                </div>
                <div className="w-full text-center shadow-xl pb-8">
                    <button><FontAwesomeIcon icon={faToolbox}className="text-3xl text-customDark mt-9 animate-fade" /></button>
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
                <h1 className="ml-14 animate-fade-in text-2xl text-customDark font-semibold mb-7">MAINTENANCES</h1>
                <div className="flex ml-14">
                <Link to={"/maintenances"}><button className="text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-48 mr-2 rounded-lg shadow-lg">MAINTENANCES</button></Link>
                    <button className="text-xs border-2 border-light bg-light text-customDark py-2 w-48 mr-2 rounded-lg shadow-lg">REGISTER</button>
                    {/* <input type="text" id="search" placeholder="Search here" className="shadow-lg border w-96 text-base px-2 py-1 focus: outline-none bg-light rounded-2xl" />
                    <button className="ml-2">
                        <FontAwesomeIcon icon={faSearch} className="text-2xl text-customDark " />
                    </button> */}
                </div>
                <form onSubmit={handleSubmit}>
                    <h1 className="mt-14 ml-14 mr-64 text-xs text-customDark font-semibold">EQUIPMENT</h1>
                    <select value={selectedEquipment} onChange={(e) => setSelectedEquipment(e.target.value)} id="equipment" className="ml-14 mt-4 shadow-lg border w-2/6 px-2 py-1 focus:outline-none bg-light rounded-lg">
                    { equipments && equipments.map((equipment) => (
                        <option key={equipment.id} value={equipment.id}>
                            {equipment.productName}
                        </option>
                    ))}
                    </select>
                    <h1 className="mt-8 ml-14 mr-64 text-xs text-customDark font-semibold">EMPLOYEE</h1>
                    <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)} id="employee" className="ml-14 mt-4 shadow-lg border w-2/6 px-2 py-1 focus:outline-none bg-light rounded-lg">
                    { employees && employees.map((employee) => (
                        <option key={employee.id} value={employee.id}>
                            {employee.name}
                        </option>
                    ))}
                    </select>
                    <h1 className="mt-8 ml-14 mr-64 text-xs text-customDark font-semibold">DATE CREATED</h1>
                    <input value={cost} onChange={(e) => setCost(e.target.value)} id="cost" type="text" placeholder="Cost" className="ml-14 mt-4 shadow-lg border w-2/6 px-2 py-1 focus:outline-none bg-light rounded-lg"/>
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
 