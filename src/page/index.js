import { useState, useEffect } from 'react';
import hero from '../img/abd.gif';
import { FaLinkedinIn } from 'react-icons/fa'; // LinkedIn icon
import { FaGithub } from 'react-icons/fa'; // GitHub icon
import { FaFacebookF } from 'react-icons/fa'; // Facebook icon
import { motion } from 'framer-motion';
import mouse  from '../mp3/mouse.mp3';

const playSound = (sound) => {
  const audio = new Audio(mouse);
  audio.play();
};

export default function Index() {
    const [darkMode, setDarkMode] = useState(() => {
        // Initialize dark mode state from local storage
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        // Update the class on the <html> element and save preference in local storage
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode]);

    return (
        <div>
            <section className='flex flex-col md:flex-row px-5 py-48 bg-secondary dark:bg-gray-900 justify-center'>
                <motion.div 
                    className='md:w-1/2'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className='py-32 text-red-500 dark:text-red-400 text-5xl font-hero hover:text-black dark:hover:text-white'> 
                        Hi,<br/>
                        <div className='text-black dark:text-white font-bold text-6xl hover:text-red-500 dark:hover:text-red-400 py-6'>
                            I'm Sarveswaran Achchjuthan
                        </div>
                        <p className='mt-2 '>I am a UI/UX Designer</p> 
                        <motion.div 
                            className='flex justify-center text-black dark:text-white py-16 text-5xl'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            <a
  href="https://www.linkedin.com/in/achch/"
  target="_blank"
  rel="noopener noreferrer"
  className="pr-16 hover:text-red-500 dark:hover:text-red-400 text-5xl"
>
  <FaLinkedinIn />
</a>
<a
  href="https://github.com/Achchju20"
  target="_blank"
  rel="noopener noreferrer"
  className="pr-16 hover:text-red-500 dark:hover:text-red-400 text-5xl"
>
  <FaGithub />
</a>
<a
  href="https://www.facebook.com/share/b9Jve2Y7mKjJZVgL/?mibextid=LQQJ4d"
  target="_blank"
  rel="noopener noreferrer"
  className="pr-16 hover:text-red-500 dark:hover:text-red-400 text-5xl"
>
  <FaFacebookF />
</a>
</motion.div>
                    </h1>
                </motion.div>

                <motion.div 
                    className='py-7 md:w-1/3 '
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img  src={hero} alt="Hero" className='rounded-3xl'/>
                </motion.div>
            </section>

            {/* Dark Mode Toggle Button */}
            <div className='fixed top-4 right-4'>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className='bg-gray-300 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full'
                >
                    Toggle Dark Mode
                </button>
            </div>
        </div>
    );
}
