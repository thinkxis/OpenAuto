import React from 'react';
import './App.css';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

import { collection, addDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBOIr7SEF-X8Mjrp1bphbixB_nO4XLZvQ",
  authDomain: "test-dipesh.firebaseapp.com",
  projectId: "test-dipesh",
  storageBucket: "test-dipesh.appspot.com",
  messagingSenderId: "585852239023",
  appId: "1:585852239023:web:8d065aeed40c992402685a",
  measurementId: "G-3Z2PFE68NK"
};

const appX = initializeApp(firebaseConfig);
export const db = getFirestore(appX);


// import {db} from '../firebase';


let posted = false;
const isEmail = (email:string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
const isName = (name:string) => /^[A-Za-z]+$/i.test(name);

function execute(email:string, name:string){
  console.log(email, name);
  posted = true;
  // alert("Thank you!");
  try {
      addDoc(collection(db, "emails"), {
        id:"",
        email, name,    
      }).then((ref:any) => {
        updateDoc(ref, {id:ref.id});
        console.log("Document written!");
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}



function scroll(){
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });
}




function App() {

  const [values, setValues] = React.useState({ email: "", name:"" });
  const [errors, setErrors] = React.useState({});
 
  const validateAndSubmitForm = (e:any) => {
    e.preventDefault();
    const errors:any = {};
    if (!isEmail(values.email)) {
      errors.email = "Invalid email";
    }
    if (!isName(values.name)) {
      errors.email = "Invalid name";
    }
    setErrors(errors);
    if (!Object.keys(errors).length) {
      execute(values.email, values.name)
      values.name = "";
      values.email = "";
    }
  };
 
  const setEmail = (e:any) => {
    setValues((values) => ({ ...values, email: e.target.value }));
  };
  const setName = (e:any) => {
    setValues((values) => ({ ...values, name: e.target.value }));
  };
  


  return (
    <div className="App">
      






        
      <header className="header">
        <div className="catchMaxHead" >
          <img className="headerLogo" src="/OpenAuto_landing/logo.png" />
          <span className="divide"></span>
          <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
            </svg><a href="tel:+769 586 4558" target="_">+769 586 4558</a></li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z"/>
            </svg><a href="mailto:service.openauto.ca" target="_">service.openauto.ca</a></li>
            <li>
              <button>Download the mobile app</button>
            </li>
          </ul>
        </div>
      </header>

      <main className="main">
          <div className="container">
            <div className="row">

        <section className="section1">


              <div className="col col_40_s100">
                <div className="holdTitle">
                    <div className="holdForm">
                  <h1>Vehicle Maintenance From The Comfort of Your Home</h1>
                  <p>Open Auto Soothes the hassle of maintaining your vehicle and helps
                    <br />you deal with unexpected repairs worry-free.</p>

                    <form onSubmit={validateAndSubmitForm} >
                    <input type="text" id="userName" 
                    value={values.name}  onChange={setName} placeholder="Enter Your Name"  />
                    <input type="text" id="userEmail"
                    value={values.email} onChange={setEmail} placeholder="Enter Your Email" />
                    <button type="submit" disabled={ !values.email || !values.name }>Submit</button>
                    </form>
                  <p>
                    { !values.name && !values.email && !posted ? (<span style={{ color: "#fff" }} >Please fill with proper name & email.</span>) : null }
                    { values.name && values.email && !isName(values.name) && !isEmail(values.email) && !posted ? (<span style={{ color: "#ff0000" }} >Enter valid name & email!</span>) : null }
                    { isName(values.name) && !isEmail(values.email) ? (<span style={{ color: "#ff0000" }} >Enter valid email!</span>) : null }
                    { isEmail(values.email) && !isName(values.name) ? (<span style={{ color: "#ff0000" }} >Enter valid name!</span>) : null }
                    { isName(values.name) && isEmail(values.email) && !posted ? (<span style={{ color: "#fff" }} >Submit the form</span>) : null }
                    { !isName(values.name) && !isEmail(values.email) && posted ? (<span style={{ color: "#fff" }} >Thank you!</span>) : null }
                  </p>
                    </div>
                </div>
              </div>

              <div className="col col_60_s100">
                <div className="holdBanner">
                  <img src="/OpenAuto_landing/Pickup_Illustration.png" />
                </div>
              </div>

              <div className="col_100_s100 arrow ">
                <div className="arrowIMG">
                  <img onClick={scroll} src="/OpenAuto_landing/arrow.png" />
                </div>
              </div>

        </section>


        <section id='#last' className="section2">



              <div className="col col_50_s100 col_right">
                <div className="holdTitle">
                    <div className="holdForm">
                    <h1>Focused on<br />Time Saving</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique accusantium dolorem expedita. Esse reiciendis, enim dolorum deleniti ab odit qui veniam eligendi nam quasi velit, officiis iure modi perferendis mollitia.</p>
                    <button>Download the mobile app</button>
                    </div>
                </div>
              </div>
              <div className="col col_50_s100">
                <div className="holdBanner">
                  <img src="/OpenAuto_landing/picku_service.png" />
                </div>
              </div>

              <div className="col col_100_s100 footer">
                <div className="top">
                  <img className="footerLogo" src="/OpenAuto_landing/logo.png" />
                  <span className="divide"></span>
                  <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                    </svg><a href="tel:+769 586 4558" target="_">+769 586 4558</a></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z"/>
                    </svg><a href="mailto:service.openauto.ca" target="_">service.openauto.ca</a></li>
                  </ul>
                </div>
                <div className="bottom">
                  <p>Open Auto @ all rights reserved</p>
                  <span className="divide"></span>
                  <ul>
                    <li><a href="https://facebook.com/iDipesious" target="_"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg></a></li>
                    <li><a href="https://twitter.com/dipesious" target="_"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg></a></li>
                    <li><a href="https://youtube.com" target="_"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg></a></li>
                    <li><a href="https://linkedin.com" target="_"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg></a></li>
                    <li><a href="https://instagram.com/dipesious" target="_"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg></a></li>
                  </ul>
                </div>
              </div>
        </section>

        
            </div>
          </div>
      </main>



    
    </div>
  );
}

export default App;
