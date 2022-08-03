import React,{useState,useEffect} from 'react';
import './App.css';
import photo1 from './illust1.jpg';
import photo2 from './illust2.jpg';
import photo3 from './illust3.jpg';
import photo4 from './illust4.jpg';
import photo5 from './illust5.jpg';
import photo6 from './illust6.jpg';

function Slideshow() {
    const[selectedImage,setselectedImage]=useState(0);
    const[allImages]=useState([photo1,photo2,photo3,photo4,photo5,photo6]);
  
    useEffect(()=>{
      setInterval(()=>{
         setselectedImage( selectedImage => selectedImage < 5 ? selectedImage+1 :0 )
         },2000)
    },[])
  
  
    return(
      <>
      <div>
      <img alt="" width={610} height={480} src={allImages[selectedImage]} />
      </div>
      </>
    );
  }
  
  
  export default Slideshow;