import aboutimg from '../img/About.png'


export default function About(){
    return <section className='bg-secondary1  md:flex-row flex-col flex px-5 '>
        <div className='md:w-2/3'>
              <img src={aboutimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center items-center'>
  <div className='text-center py-16'>
    <h1 className='text-5xl font-bold border-2  border-black text-center p-4 rounded-full max-w-max mx-auto  hover:text-yellow-500'>
      About Me
    </h1>
    <p className='text-3xl  font-bold mt-4  hover:text-yellow-500'>
    I am a UI/UX designer specializing in crafting intuitive and engaging interfaces that enhance user experiences..
    </p>
    <div class="hover:text-[#030027] text-xl py-2">
    My work focuses on creating designs that are both visually appealing and highly functional.
    
</div>
<hr class="border-gray-600  "/>


  </div>
  


</div>

       

    </section>
}