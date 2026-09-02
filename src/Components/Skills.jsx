import { motion } from "framer-motion";
import icon from '../assets/icon.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import hand from '../assets/hand.png'

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
        <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false}}
        className='container mx-auto px-6 relative z-10'>
           <div className=' flex- flex-col lg:flex-row items-center justify-between gap-12'>
            {/* Images */}
            <motion.div
            variants={itemVariants}
            className='lg:w-1/2 flex justify-center relative'>
                <div className='relative'>
                    <motion.img
                    src={hand}
                    alt='Image'
                    className='w-full max-w-md relative z-10'
                    whileHover={{ scale: 1.05}}
                    transition={{ duration: 0.3}}>
                    </motion.img>
                {/* Icons */}
                {skills.map((skill, index) => {
                    const positions = [
                        {top: '5%', left: '20%'},
                        {top: '5%', left: '23%'},
                        {bottom: '90%', left: '30%'},
                        {bottom: '5%', left: '34%'},
                    ];
                    return (
                        <motion.div
                        key={skill.name}
                        className='absolute z-20'
                        style={positions[index]}
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5,
                            ease: 'easeInOut'
                        }}>

                        </motion.div>
                    )
                })}
                </div>

            </motion.div>
            </div> 

        </motion.div>
        </div>
    </section>
  )
}

export default Skills