import {React,useRef,useState} from 'react'
import './Footer.css';
/*import emailjs from '@emailjs/browser';*/
import {AiOutlineTwitter,AiFillInstagram } from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";




const Footer = () => {
const form = useRef();
   const [done,setisDone]=useState(false);

  /*const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm('service_q97q3fp', 'template_cs5jb2t', form.current, '7sqe9GluxQ2TyDkFl')
      .then((result) => {
          console.log(result.text);
          setisDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='footer'>
    <div className='question'>
        <h1>Have Question in mind?<br/>Lets us Help you</h1>
    </div>
    <div className='email'>
      <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='yourmail@gmail.com' name='user-email' className='eamilText'></input>
          <input type='submit' value='send' className='button'/>
        </form>
       </div>
      </div>
    
     
      
    </div>
  )*/
}

export default Footer
