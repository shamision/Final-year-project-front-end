import { useState } from "react"
import "./App.css";
import { Login } from "./login";
import { Register } from "./Register";
import RegisterCustomer from "./RegisterCustomer";

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
  }

  return (
    <div className="App">
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> : <RegisterCustomer onFormSwitch={toggleForm} />
      } */}
      {formComponent}
    </div>
  );
}

export default App;
