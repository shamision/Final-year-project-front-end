import React,{ useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";


const Report = () => {
    const navigate = useNavigate();
    const [ isClicked, setIsClicked] = useState(false);
    const { id } = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const customerID = localStorage.getItem('id');
    // console.log("customerID =>", customerID);
    const { data: equipments, isPending,  error } = useFetch(`http://localhost:8080/api/equipment/customerEquipments/${customerID}`);
    console.log("equipments =>", equipments);

    // const handleDelete = (customerID) => {
    //     fetch('http://localhost:8080/api/customer/delete/' + customerID, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         navigate("/addCustomer")
    //         setIsClicked(true);
    //     })
    // }
    

    const storedName = localStorage.getItem('name');
    const customerName = storedName ? storedName: "";

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    const filteredData = searchQuery
    ? equipments.filter((item) =>
        item.productName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : equipments;

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
                    <button>
                        <Link to={"/login"}><FontAwesomeIcon icon={faArrowRight} className="text-3xl text-customDark mt-9" /></Link>
                    </button>
                </div>
            </div>
            <div className="flex-grow m-7 overflow-auto">
                <div className="flex flex-grow justify-end">
                    <h1 className="m-7 text-lg block text-customDark font-semibold">{customerName}</h1>
                    <div className="h-20 w-20 bg-customMedium rounded-full"></div>
                </div>
                <h1 className="animate-fade-in text-2xl text-customDark font-semibold mb-7">INVOICE</h1>
                <div className="flex">
                    <button className="text-xs border-2 border-light bg-light text-customDark py-2 w-48 mr-2 rounded-lg shadow-lg">CUSTOMERS</button>
                    <Link to="/addCustomer"><button className="text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-48 mr-2 rounded-lg shadow-lg">REGISTER</button></Link>
                    <input type="text" id="search" placeholder="Search here" className="shadow-lg border w-96 text-base px-2 py-1 focus: outline-none bg-light rounded-2xl"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    />
                    {/* <button className="ml-2">
                        <FontAwesomeIcon icon={faSearch} className="text-2xl text-customDark " />
                    </button> */}
                </div>
                <div className="flex justify-start gap-2 ml-28 mt-10">
                    <h1 className="ml-1 mr-0.5 text-xs text-customDark font-semibold">NAME</h1>
                    <h1 className="ml-52 text-xs text-customDark font-semibold">EMAIL</h1>
                    <h1 className="ml-60 text-xs text-customDark font-semibold">PHONE</h1>
                </div>
                <hr className="border-b border-customMedium mt-9" />

                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }

                { filteredData && filteredData.map((equipment) => (
                    <div key={equipment.id}>
                        <div className="flex justify-evenly gap-2">
                        <div className="w-32 text-left"><h1 className="mt-9 text-xs text-customDark font-semibold">{ equipment.productName }</h1></div>
                            <div className="w-40 text-left"><h1 className="mt-9 text-xs text-customDark font-semibold">{ equipment.qty }</h1></div>
                            <div className="w-32 text-left"><h1 className="mt-9 text-xs text-customDark font-semibold">{ equipment.dateCreated.join("/") }</h1></div>
                            <div className="w-32 text-left"><h1 className="mt-9 text-xs text-customDark font-semibold">{ equipment.customer.name }</h1></div>
                            {/* <div className="text-left"><button className="mt-7 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-24 rounded-lg shadow-lg">UPDATE</button></div>
                            <div className="text-left"><button onClick={() => handleDelete(customer.id)} className=" mt-7 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-24 rounded-lg shadow-lg">DELETE</button></div> */}
                        </div>
                        <hr className="border-b border-customMedium mt-9" />
                    </div>
                ))}

            </div>
        </div>
     );
}
 
export default Report;










