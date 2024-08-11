import { CiLinkedin } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";



export default function Foot() {
    return (
      <section>
       <div class=" min-h-screen flex items-center justify-center bg-black">
        <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div class="w-full text-7xl font-bold">
                <h1 class="w-full md:w-2/3">How can we help you. get
                    in touch</h1>
            </div>
            <div class="flex mt-8 flex-col md:flex-row md:justify-between">
                <p class="w-full md:w-2/3 text-gray-400">My work blends creativity with functionality to ensure user satisfaction across all platforms.</p>
                <div class="w-44 pt-6 md:pt-0">
                    <a class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact </a>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex mt-24 mb-12 flex-row justify-between">
                    
                    <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">HOME</a>
                    <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">About</a>
                    <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">My Projects </a>
                    <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Contact</a>
                    <div class="flex flex-row space-x-8 items-center justify-between">
                        <a href='#' className=" text-gray-600 hover:text-whit text-2xl">
                        <CiLinkedin />                           
                        </a>
                        <a href='#'className=" text-gray-600 hover:text-white text-2xl " >
                        <RiFacebookBoxLine /> 
                        </a>
                        <a href='#' className=" text-gray-600 hover:text-white text-2xl ">
                        <CiInstagram />

                        </a>
                       
                    </div>
                </div>
                <hr class="border-gray-600"/>
                <p class="w-full text-center my-12 text-gray-600">© 2024 Achchjuthan Sarveswaran. All rights reserved.</p>
            </div>
        </div>
    </div>
      </section>
    );
  }
  