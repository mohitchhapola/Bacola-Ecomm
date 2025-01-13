import './App.css';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Home from './Pages/Home';
import {createContext,useState,useEffect}from 'react'
import axios from'axios'
import Footer from './Components/footer/'
const MyContext =createContext()


function App() {

  const [countryList,setCountryList]=useState([])
  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries")
  },[])

  const [selectedCountry,setSelectedCountry]=useState('')

  const getCountry=async(url)=>{
    const response=await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data);
      
    })
   
  }
  const values={countryList, setSelectedCountry,selectedCountry} //component can use this now
  return (
   <>
      <BrowserRouter>
      <MyContext.Provider value={values}>


    
      
        <Header/>
        <Home/>
        <Footer/>
        <Routes>
          <Route element={<Home/>} exact={true} path='{/}'/>
        </Routes>
        </MyContext.Provider>
      </BrowserRouter>
   </>
  );
}



export default App;
export{MyContext}