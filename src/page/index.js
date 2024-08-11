import hero  from '../img/abd.png'
import { TiSocialLinkedinCircular } from "react-icons/ti";import { VscGithub } from "react-icons/vsc"
import { IoLogoFacebook } from "react-icons/io5";

export default function Index(){
    return<section className='flex  flex-col md:flex-row px-5 py-48 bg-secondary justify-center'>
        <div className='md:w-1/2   '>
            <h1  className='py-32 text-red-500 text-4xl   font-hero  hover:text-black'> Hi,<br/>
                    <div className='text-black font-bold text-5xl  hover:text-red-500'>
                    I'm Sarveswaran Achchjuthan
                    </div>
                    <p > I am a UI/UX  Desinor</p> 
                <div    className='flex  justify-center text-black py-14   text-3xl '>
                    <a href='#' className='pr-16  hover:text-red-500'><TiSocialLinkedinCircular /></a>
                    <a href='#' className='pr-16  hover:text-red-500'><VscGithub /></a>
                    <a href='#' className='pr-16  hover:text-red-500'><IoLogoFacebook /></a>
                    
                </div>
                    <div className='py-'>
                    <hr class="border-gray-600 "/>
                    </div>
         </h1>
       

            
        </div>
        <div  className='py-7 md:w-1/3'>
          <img src={hero}/>
        </div>
        
        
    </section>
}