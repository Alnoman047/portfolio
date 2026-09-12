import { motion } from "framer-motion";
import icon from '../assets/Icon.png'
import icon1 from '../assets/Icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import hand from '../assets/Hand.png'

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
                        {top: '5%', right: '23%'},
                        {bottom: '90%', left: '30%'},
                        {bottom: '90%', right: '34%'},
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
                        <motion.div
                        className='bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-blue-500/30'
                        whileHover= {{
                            scale: 1.2,
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
                        }}>
                          <img src={skill.icon} alt={skill.name} className='w-12 h-12 object-contain'/>  

                        </motion.div>

                        </motion.div>
                    )
                })}
                </div>

            </motion.div>
            {/* Content */}
            <motion.div
            variants={itemVariants}
            className='lg:w-1/2 text-white'>
                <motion.h2
                variants={itemVariants}
                className='text-4xl md:text-5xl font-bold mb-6'>
                    <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400'>
                My
                </span>
                Skills
                </motion.h2>
                <motion.p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium maxime et, soluta corporis dignissimos dolor, blanditiis temporibus delectus itaque quis labore repellat amet enim quam ducimus ab corrupti veritatis?
                </motion.p>
                 {/* Skills Section */}
            </motion.div>
            </div> 
        </motion.div>
        
    </section>
  )
}

export default Skills