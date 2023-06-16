import React,{ useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const RegisterCustomer = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className="bg-customLight h-screen flex">
            <div className="h-full w-1/12 bg-customMedium py-56">
                <div className="w-full text-center mt-3.5 shadow-xl pb-8">
                    <button><FontAwesomeIcon icon={faCity} className="text-2xl text-customLight" /></button>
                </div>
                <div className="w-full text-center shadow-xl pb-8">
                    <button><FontAwesomeIcon icon={faFireExtinguisher} className="text-3xl text-customDark mt-9" /></button>
                </div>
                <div className="w-full text-center shadow-xl pb-8">
                    <button><FontAwesomeIcon icon={faToolbox}className="text-3xl text-customDark mt-9 animate-fade" /></button>
                </div>
                <div className="w-full text-center shadow-xl pb-8">
                    <button><FontAwesomeIcon icon={faArrowRight} className="text-3xl text-customDark mt-9" /></button>
                </div>
            </div>
            <div className="flex-grow m-7">
                <div className="flex flex-grow justify-end">
                    <h1 className="m-7 text-lg block text-customDark font-semibold">SHAMI SION</h1>
                    <div className="h-20 w-20 bg-customMedium rounded-full"></div>
                </div>
                <h1 className="text-2xl text-customDark font-semibold mb-7">CUSTOMERS</h1>
                <div className="flex">
                    <button className="text-xs border-2 border-light bg-light text-customDark py-2 w-48 mr-2 rounded-lg shadow-lg">CUSTOMERS</button>
                    <button className="text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-48 mr-2 rounded-lg shadow-lg">REGISTER</button>
                    <input type="text" id="search" placeholder="Search here" className="shadow-lg border w-96 text-base px-2 py-1 focus: outline-none bg-light rounded-2xl" />
                    <button className="ml-2">
                        <FontAwesomeIcon icon={faSearch} className="text-2xl text-customDark " />
                    </button>
                </div>
                <div className="flex mt-10">
                    <h1 className="ml-14 mr-64 text-xs text-customDark font-semibold">NAME</h1>
                    <h1 className="mr-96 text-xs text-customDark font-semibold">EMAIL</h1>
                    <h1 className="mr-80 text-xs text-customDark font-semibold">PHONE</h1>
                </div>
                <hr className="border-b border-customMedium mt-9" />
                <div className="flex">
                    <h1 className="mt-9 ml-14 mr-64 text-xs text-customDark font-semibold">AUCA</h1>
                    <h1 className="mt-9 mr-64 text-xs text-customDark font-semibold">auca0gishushu@gmail.com</h1>
                    <h1 className="mt-9 text-xs text-customDark font-semibold">0783846959</h1>
                    <button className="ml-32 mt-7 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-24 mr-2 rounded-lg shadow-lg">UPDATE</button>
                    <button className="ml-24 mt-7 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-24 mr-2 rounded-lg shadow-lg">DELETE</button>
                </div>
                <hr className="border-b border-customMedium mt-9" />
                <div className="flex">
                    <h1 className="mt-9 ml-14 mr-64 text-xs text-customDark font-semibold">AUCA</h1>
                    <h1 className="mt-9 mr-64 text-xs text-customDark font-semibold">auca0gishushu@gmail.com</h1>
                    <h1 className="mt-9 text-xs text-customDark font-semibold">0783846959</h1>
                    <button className="ml-32 mt-7 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-24 mr-2 rounded-lg shadow-lg">UPDATE</button>
                    <button className="ml-24 mt-7 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-24 mr-2 rounded-lg shadow-lg">DELETE</button>
                </div>
                <hr className="border-b border-customMedium mt-9" />
                <div className="flex">
                    <h1 className="mt-9 ml-14 mr-64 text-xs text-customDark font-semibold">AUCA</h1>
                    <h1 className="mt-9 mr-64 text-xs text-customDark font-semibold">auca0gishushu@gmail.com</h1>
                    <h1 className="mt-9 text-xs text-customDark font-semibold">0783846959</h1>
                    <button className="ml-32 mt-7 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-24 mr-2 rounded-lg shadow-lg">UPDATE</button>
                    <button className="ml-24 mt-7 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-24 mr-2 rounded-lg shadow-lg">DELETE</button>
                </div>
                <hr className="border-b border-customMedium mt-9" />
                <div className="flex">
                    <h1 className="mt-9 ml-14 mr-64 text-xs text-customDark font-semibold">AUCA</h1>
                    <h1 className="mt-9 mr-64 text-xs text-customDark font-semibold">auca0gishushu@gmail.com</h1>
                    <h1 className="mt-9 text-xs text-customDark font-semibold">0783846959</h1>
                    <button className="ml-32 mt-7 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-24 mr-2 rounded-lg shadow-lg">UPDATE</button>
                    <button className="ml-24 mt-7 text-xs border-2 border-customMedium bg-customMedium text-customDark py-2 w-24 mr-2 rounded-lg shadow-lg">DELETE</button>
                </div>
                <hr className="border-b border-customMedium mt-8" />
            </div>
        </div>
     );
}
 
export default RegisterCustomer;