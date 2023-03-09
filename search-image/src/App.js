import React,{useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const[photo, setPhoto]=useState("")
  const[result, setResult]=useState([])

const changePhoto = ()=>{
      axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=7xWTUeqRqQ8SmwbaRpTGGUhz0QC0HUjmgVBsiVCkh3I`).then((res=>{
        setResult(res.data.results)
      }))
}

  return (
    <>
     <h1 className='text-center my-3'>10x IMAGE SEARCH APP </h1>
    <div className="container">
    <input type="text" placeholder='Type here to search' className='form-control text-center my-3 shadow p-3 mb-5 bg-white rounded' value={photo} 
    onChange={(e)=>{setPhoto(e.target.value)}}  />
    <button onClick={changePhoto} className="btn btn-primary my-2 " type="submit">Search Photo</button>
    </div>
    
    <div className="container">
         <div className='row text-center text-lg-start'>
         {result.map((value) => {
                        return (
                            <div class="col-lg-3 col-md-4 col-6">
                                    <img class="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                            </div>
                        )
                    })}
         </div>
    </div>
        
    </>
  );
}

export default App;
