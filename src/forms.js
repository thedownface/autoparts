
import { Status } from "@googlemaps/react-wrapper";
import React, { useEffect } from "react";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./forms.css"

function MyForm()
{

  const cars=[
    {id:"1",name:"AMC"},
{id:"2",name:"Acura"},
{id:"3",name:"Alfa"},
{id:"4",name:"AstonMartin"},
{id:"5",name:"Asuna"},
{id:"6",name:"Audi"},
{id:"7",name:"Austin"},
{id:"8",name:"AutoCar"},
{id:"9",name:"Avanti"},
{id:"10",name:"BMW"},
{id:"11",name:"Bentley"},
{id:"12",name:"Bricklin"},
{id:"13",name:"Brockway"},
{id:"14",name:"Buick"},
{id:"15",name:"Cadilac"},
{id:"16",name:"Checker"},
{id:"17",name:"Chevy"},
{id:"18",name:"Chrysler"},
{id:"19",name:"Citroen"},
{id:"20",name:"Daewoo"},
{id:"21",name:"Daihastu"},
{id:"22",name:"Delorean"},
{id:"23",name:"Desoto"},
{id:"24",name:"Diamon"},
{id:"25",name:"Dodge"},
{id:"26",name:"Eagle"},
{id:"27",name:"Ferrari"},
{id:"28",name:"Fiat"},
{id:"29",name:"Fisker"},
{id:"30",name:"Ford"},
{id:"31",name:"GMC"},
{id:"32",name:"Genesis"},
{id:"33",name:"Geo"},
{id:"34",name:"Honda"},
{id:"35",name:"Hummer"},
{id:"36",name:"Hyundai"},
{id:"37",name:"Infinit"},
{id:"38",name:"Isuzu"},
{id:"39",name:"Jaguar"},
{id:"40",name:"Jeep"},
{id:"41",name:"Jia"},
{id:"42",name:"Lamborghini"},
{id:"43",name:"LandRover"},
{id:"44",name:"Lexus"},
{id:"45",name:"Lincoln"},
{id:"46",name:"Lotus"},
{id:"47",name:"Maserati"},
{id:"48",name:"Maybach"},
{id:"49",name:"Mazda"},
{id:"50",name:"Mercedes"},
{id:"51",name:"Mercury"},
{id:"52",name:"Mini"},
{id:"53",name:"Nissan"},
{id:"54",name:"Oldsmobile"},
{id:"55",name:"Peugeot"},
{id:"56",name:"Plymouth"},
{id:"57",name:"Pontiac"},
{id:"58",name:"Porsche"},
{id:"59",name:"Ram"},
{id:"60",name:"Renault"},
{id:"61",name:"RollsRoyce"},
{id:"62",name:"Rover"},
{id:"63",name:"Saab"},
{id:"64",name:"Saturn"},
{id:"65",name:"Scion"},
{id:"66",name:"Subaru"},
{id:"67",name:"Suzuki"},
{id:"68",name:"Tesla"},
{id:"69",name:"Toyota"},
{id:"70",name:"Triumph"},
{id:"71",name:"Volkswagen"},
{id:"72",name:"Volvo"}
  ]

  const models=[
    {id:"1",carid:"1",name:"Classic"},
    {id:"2",carid:"1",name:"Adventure"},
    {id:"3",carid:"2",name:"hello"}
  ]

  const [name, setName] = useState("");
  const [phoneno, setNo]= useState("");
  const [email,setEmail]=useState("");
  const [Year,setYear]=useState("");
  const [Make,setMake]=useState();
  const [Car,setCar]=useState([]);
  const [Brand,setBrand]=useState([])


  useEffect(()=>{
    setCar(cars);
  },[])

  useEffect(()=>{
    setBrand(models);
  },[])

  const handleCar =(id) =>
  {
const dt=Brand.filter(x=>x.carid===id)
setBrand(dt);
  }
  const [Model,setModel]=useState("");
const submitHandler=async (event)=>{
  event.preventDefault();
  const data={name,phoneno,email,Year,Make,Model}
  console.log(data);
  const data1=await fetch("https://usedautoparts-bdf82-default-rtdb.firebaseio.com/value1.json",{method:"POST", body: JSON.stringify({
    data
}),
 
// Adding headers to the request
headers: {
    "Content-type": "application/json; charset=UTF-8"
}})
const msg=await data1.json()
console.log(msg)
}
  return (

    <div className="signupform">

    <div className="title"><h2>FIND A PART</h2></div>
    <form onSubmit={submitHandler} action="/action_page.php" >
      <div className="userdetails">
        <div className="input"><span class="details">Select year</span>
        <select id="yearList" placeholder="Click here to select year" onChange={(e)=>{setYear(e.target.value)}}>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
            <option>2011</option>
            <option>2010</option>
            <option>2009</option>
            <option>2008</option>
            <option>2007</option>
            <option>2006</option>
            <option>2005</option>
            <option>2004</option>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
            <option>2000</option>
            <option>1999</option>
            <option>1998</option>
            <option>1997</option>
            <option>1996</option>
            <option>1995</option>
            <option>1994</option>
            <option>1993</option>
            <option>1992</option>
            <option>1991</option>
            <option>1990</option>
            <option>1989</option>
            <option>1988</option>
            <option>1987</option>
            <option>1986</option>
            <option>1985</option>
            <option>1984</option>
            <option>1983</option>
            <option>1982</option>
            <option>1981</option>
            <option>1980</option>
            <option>1979</option>
            <option>1978</option>

        </select></div>
        <div className="input"><span className="details"> Select Make</span>
<select name="make" id="make" onChange={(e)=>handleCar(e.target.value)} >
  <option value="0">---SELECT---</option>
{
        Car &&
        Car !== undefined ?
        Car.map((ctr,index)=>{
          return(
            <option key={index} value={ctr.id}>{ctr.name}</option>
          )
        })
          :"NO CAR"
          }


            

            </select>
            </div>
        <div className="input"><span className="details">Select Model</span>
            <select name="model" id="model">
            <option value="0">----SELECT----</option>
            {
        Brand &&
        Brand !== undefined ?
        Brand.map((ctr,index)=>{
          return(
            <option key={index} value={ctr.id}>{ctr.name}</option>
          )
        })
          :"NO CAR"
          }
            
            </select>
        </div>
        <div className="input"><span className="details">Select Parts</span>
            <select>
                <option></option>
            </select>
        </div>
      <div className="input"><span className="details">Enter your name</span>
        <input 
          placeholder="Click here to Enter your name"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input"><span className="details">Enter your phone number</span>
        <input
          placeholder="Click here to Enter your phone number"
          type="text" 
          min="10"
          value={phoneno}
          onChange={(e) => setNo
            (e.target.value)}
        />
      </div>
      <div className="input"><span className="details">Enter your email</span>
        <input
          placeholder="Click here to enter your email"
          type="email" 
          value={email}
          onChange={(e) => setEmail
            (e.target.value)}
        />
        </div>
      <div className="button">
        <input
          type ="submit"
          value="SEARCH"
          
          />
      </div>
      
      </div>
     
      
    </form>
    </div>
  )
          }
export default MyForm
      