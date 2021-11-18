import React from "react";
import Router from "./Routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Router/>
      <ToastContainer autoClose={1500}/>
    </div>
  );
}

export default App;