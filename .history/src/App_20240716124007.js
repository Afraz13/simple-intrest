
import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {

  const [interest, setInterest]=useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate]=useState(0)
  const [year, setYear]=useState(0)
  const [isprinciple, setIsprinciple]=useState(true)
  const [israte, setIsrate]=useState(true)
  const [isyear, setIsyear]=useState(true)

  const getValidate =(e)=>{
    const {name,value}=e.target
    // console.log(name,value);
    // !!value.match(/^[0-9]$/) !!if convert into boolean
    if(!!value.match(/^[0-9]+$/) ){
      if(name==='principle'){
      setPrinciple(value)
      setIsprinciple(true)
     }
     else if(name==='rate'){
      setRate(value)
      setIsrate(true)
     }
     else if(name===year){
      setYear
     }
     
    }
    else{
     if(name==='principle'){
      setPrinciple(value)
      setIsprinciple(false)
     }
     else if(name==='rate'){
      setRate(value)
      setIsrate(false)
     }
    }
   
   
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
    <div className='bg-light p-5 rounded'>
    <h1>Simple Intrest App</h1>
    <p>Calculate Simple intrest Easily</p>
    <div className='bg-warning d-flex justify-content-center align-items-center p-3 flex-column rounded-4 mt-4 '>
      <h1>₹ {interest}</h1>
      <p>Total simple intrest</p>
    </div>
    <form action="" className='mt-5'>
     <div className='mb-3'>
     <TextField value={principle || ""} name='principle' onChange={(e)=>getValidate(e)}  className='w-100' id="outlined-basic" label="Princle Amount" variant="outlined" />
     </div>

     { !isprinciple &&
      <div>
      <p className='text-danger fw-bold'>*Invalid Input</p>
     </div>
     }

     <div className='mb-3'>
     <TextField value={rate || ""} name='rate' className='w-100' id="outlined-basic" label="Rate of intrest" variant="outlined" />
     </div>
     { !israte &&
      <div>
      <p className='text-danger fw-bold'>*Invalid Input</p>
     </div>
     }
     <div className='mb-3'>
     <TextField value={year || ""} name='year' className='w-100' id="outlined-basic" label="Year" variant="outlined" />
     </div>
     <Stack className='mt-5' direction="row" spacing={2}>
     <Button className='bg-success' style={{width:'200px',height:'50px'}} variant="contained">Calculate</Button>
     <Button variant="outlined" style={{width:'200px',height:'50px'}}>Reset</Button>
</Stack>
    </form>
    </div>
    </div>
  );
}

export default App;
