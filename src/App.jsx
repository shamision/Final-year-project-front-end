import { useState } from "react"
import "./App.css";
import { Login } from "./login";
import { Register } from "./Register";
import RegisterCustomer from "./RegisterCustomer";
import { AddCustomer } from "./AddCustomer";
import { Route, Routes } from "react-router-dom";
import { AddEquipment } from "./AddEquipment";
import Equipments from "./Equipments";
import Maintenance from "./maintenance";
import { Payment } from "./payment";
import { AddMaintenance } from "./AddMaintenance";
import Report from "./Report";

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  let formComponent;
  if (currentForm === 'login') {
    formComponent = <Login onFormSwitch={toggleForm} />;
  }else if (currentForm === 'register') {
    formComponent = <Register onFormSwitch={toggleForm} />;
  }else if (currentForm === 'registerCustomer') {
    formComponent = <RegisterCustomer onFormSwitch={toggleForm} />;
  }else if (currentForm === 'addCustomer') {
    formComponent = <AddCustomer onFormSwitch={toggleForm} />;
  }else if(currentForm === 'addEquipment') {
    formComponent = <AddEquipment onFormSwitch={toggleForm} />;
  }else if(currentForm === 'equipments') {
    formComponent = <Equipments onFormSwitch={toggleForm} />;
  }else if(currentForm === 'maintenances') {
    formComponent = <Maintenance onFormSwitch={toggleForm} />;
  }else if(currentForm === 'payment') {
    formComponent = <Payment onFormSwitch={toggleForm} />;
  }else if(currentForm === 'addMaintenance') {
    formComponent = <AddMaintenance onFormSwitch={toggleForm} />;
  }else if(currentForm === 'report') {
    formComponent = <Report onFormSwitch={toggleForm} />;
  }

  return (
      <div className="App">
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> : <RegisterCustomer onFormSwitch={toggleForm} />
      } */}
      {/* {formComponent} */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerCustomer" element={<RegisterCustomer />} />
        <Route path="/addCustomer" element={<AddCustomer />} />
        <Route path="/addEquipment" element={<AddEquipment />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/maintenances" element={<Maintenance />} />
        <Route path="/addMaintenance" element={<AddMaintenance />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/report" element={<Report />} />
      </Routes>
      
    </div>
    // <div className="App">
      
    //   {formComponent}

    //   {currentForm !== 'login' && (
    //     <button onClick={() => handleRedirect('login')}>Go back to Login</button>
    //   )}
    //   {currentForm !== 'register' && (
    //     <button onClick={() => handleRedirect('register')}>Register</button>
    //   )}
    //   {currentForm !== 'registerCustomer' && (
    //     <button onClick={() => handleRedirect('registerCustomer')}>Register Customer</button>
    //   )}

    // </div>
  );
}

export default App;
