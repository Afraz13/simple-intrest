
import './App.css';

function App() {
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
     <TextField id="outlined-basic" label="Outlined" variant="outlined" />

     </div>
    </form>
    </div>
    </div>
  );
}

export default App;
