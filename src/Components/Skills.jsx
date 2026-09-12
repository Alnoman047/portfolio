import { motion } from "framer-motion";
import icon from '../assets/Icon.png'
import icon1 from '../assets/Icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import hand from '../assets/Hand.png'

const Skills = () => {
    const skills = [
        {name: 'React', icon: icon, level:90},
        {name: 'TailwindCSS', icon: icon1, level:95},
        {name: 'Vite', icon: icon2, level:80},
        {name: 'Javascript', icon: icon3, level:70},
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
            <div className='h-96 w-96 bg-linear-to-br from-[#0268b0] to-blue-500 blur-2xl opacity-40 rounded-full'></div>
        </div>
        
        <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false}}
        className='container mx-auto px-6 relative z-10'>
           
           {/* FIXED: corrected flex- to flex */}
           <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
            
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
                    // FIXED: Re-positioned icons cleanly relative to the container box
                    const positions = [
                        { top: '-10%', left: '10%' },
                        { top: '-25%', left: '35%' },
                        { top: '-20%', right: '20%' },
                        { top: '0%', right: '5%' },
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
            className='lg:w-1/2 text-white w-full'>
                <motion.h2
                variants={itemVariants}
                className='text-4xl md:text-5xl font-bold mb-6'>
                    <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 mr-3'>
                        My
                    </span>
                    Skills
                </motion.h2>
                <motion.p className="text-gray-400 leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium maxime et, soluta corporis dignissimos dolor, blanditiis temporibus delectus itaque quis labore repellat amet enim quam ducimus ab corrupti veritatis?
                </motion.p>
                
                 {/* Skills Bars Section */}
                <motion.div variants={itemVariants}>
                    <div className='space-y-6 mt-8'>
                        {skills.map((skill, index) => (
                            <motion.div
                            key={skill.name}
                            className='flex items-center'
                            initial= {{ opacity: 0, x: -50}}
                            whileInView={{ opacity: 1, x: 0}}
                            transition={{ duration: 0.5, delay: index * 0.1}}
                            viewport= {{ once: true}}>
                                <div className='w-10 h-10 mr-4 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 shrink-0'>
                                    <img src={skill.icon} alt={skill.name} className='w-6 h-6 object-contain'/>
                                </div>
                                <div className='flex-1'>
                                    <div className='flex justify-between mb-2'>
                                        <span className='text-gray-300 font-medium'>
                                            {skill.name}
                                        </span>
                                        <span className='text-cyan-300 font-bold'>
                                            {skill.level}%
                                        </span>
                                    </div>
                                    
                                    {/* FIXED: replaced w=full with w-full */}
                                    <div className='w-full bg-gray-700 rounded-full h-2.5 overflow-hidden'>
                                        <motion.div 
                                        className='bg-linear-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full'
                                        initial = {{ width: 0}}
                                        whileInView= {{ width: `${skill.level}%`}}
                                        transition={{duration: 1, delay: index * 0.2}}
                                        viewport={{ once: true}}
                                        ></motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                 </motion.div>
            </motion.div>
            </div> 
        </motion.div>
    </section>
  )
}

export default Skills
