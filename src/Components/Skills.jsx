import { motion } from "framer-motion";
import icon from '../assets/icon.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'

const Skills = () => {
    const skills = [
        {name: 'react', icon: icon, level:90},
        {name: 'react', icon: icon1, level:85},
        {name: 'react', icon: icon2, level:80},
        {name: 'react', icon: icon3, level:95},
    ];
    const containerVariants = {
        hidden: { opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            }
        }
    };
    const itemVariants = {
        hidden: { y: 50, opacity:0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut'
            }
        }
    };
  return (
    <section id='skills'
    className='min-h-screen flex items-center justify-center bg-gray-900 py-20 relative overflow-hidden'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center '>
        <div
        className='h-96 w-96 bg-linear-to-br from-[#0268b0] to-blue-500 blur-2xl opacity-40 rounded-full'>
        </div>
        <motion.div>

        </motion.div>
        </div>
    </section>
  )
}

export default Skills