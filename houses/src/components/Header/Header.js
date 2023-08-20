import {React,useState,useEffect,useRef} from 'react'
import './Header.css';
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import {links} from './links';
import { Link } from 'react-scroll';




const Header = () => {

    const [showLinks,isshowLinks]=useState(false);
     const linksContainerRef= useRef(null);
  const linksRef=useRef(null);
  let url="Home";

   
 return (
    <div className='header-container' id="home">
        <div className='header-Restate'>
            <BsHouseDoor className='house-icon'/>
            <h4>RSTATE</h4>
            </div>
            <div className='bar' onClick={()=>isshowLinks(!showLinks)}><AiOutlineBars className='bar-icon'/></div>
            <div className='header-nav'>
            <nav>
            {links.map((link)=>{
              if(link.text=="ABOUT US"){
                url="about";
                 return <li><Link spy={true} to={url}  smooth={true} activeClass='activeClass'>{link.text}</Link></li> 
              } else if(link.text=="SALES"){
               url="sales"
                 return <li><Link spy={true} to={url}  offset={-200} smooth={true} activeClass='activeClass'>{link.text}</Link></li> /*offset hye 
                 eno nehna w2ta nekbos 3ala SALES bt5edne 3ala SALES bas be tkoun akle nosa 
                 y3ne ktyrr tal3a la fo2 msalan 2aw l3akes hasab lcase so la hela besta3mel offset
                 fyeh be negative wfyeh bel poitive hasab lcase  ,negative be tnazela la ta7et
                 wpositive btesh2ela la fo2  */
              }else if(link.text=="PROPERTIES"){
               url="properties"
                 return <li><Link spy={true} to={url} offset={100} smooth={true} activeClass='activeClass'>{link.text}</Link></li>
              }else{
                 return <li><Link spy={true} to={url}  smooth={true} activeClass='activeClass'>{link.text}</Link></li>
              }
             
            })

            }
            </nav>
</div>
           <div className='header-login'>
            <button>Login</button>
           </div>
       
       {showLinks && <div className='navbar' ref={linksContainerRef}>
          <ul ref={linksRef}>
            {links.map((link)=>{
              return <li><a>{link.text}</a></li>
            })

            }
          </ul>
      </div>}   
     
    </div>
  )
}

export default Header
