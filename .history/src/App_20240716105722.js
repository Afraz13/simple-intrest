
import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {

  const [intrest, setItrest]=useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate]=useState(0)
  const [year, setYear]=useState(0)


  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
    <div className='bg-light p-5 rounded'>
    <h1>Simple Intrest App</h1>
    <p>Calculate Simple intrest Easily</p>
    <div className='bg-warning d-flex justify-content-center align-items-center p-3 flex-column rounded-4 mt-4 '>
      <h1>₹ 2000</h1>
      <p>Total simple intrest</p>
    </div>
    <form action="" className='mt-5'>
     <div className='mb-3'>
     <TextField className='w-100' id="outlined-basic" label="Princle Amount" variant="outlined" />
     </div>
     <div className='mb-3'>
     <TextField className='w-100' id="outlined-basic" label="Rate of intrest" variant="outlined" />
     </div>
     <div className='mb-3'>
     <TextField className='w-100' id="outlined-basic" label="Year" variant="outlined" />
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
