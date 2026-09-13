import { 
    AcademicCapIcon,
     BookOpenIcon,
      ChartBarIcon,
       TrophyIcon
     } from "@heroicons/react/24/outline"
import { motion } from "framer-motion";


const Education = () => {
    const educationData = [
        {
            id:1,
            degree: 'SSC',
            Institution: 'BAF Shaheen Haji Ashraf Ali School and College',
            gpa: '4.11',
            Period: '2017-2018',
            icon: AcademicCapIcon
        },
        {
            id:2,
            degree: 'HSC',
            Institution: 'Monipur High School and College',
            gpa: '4.08',
            Period: '2019-2020',
            icon: BookOpenIcon
        },
        {
            id:3,
            degree: 'BSc in Software Engineering',
            Institution: 'Daffodil International University',
            gpa: '2.79',
            Period: '2021-2024',
            icon: ChartBarIcon
        },
    ];

    const certifications = [
        {
            name: 'Full Stack Web Development',
            issuer: 'Programming Hero',
            date: '2024',
            icon: TrophyIcon
            
        },
    ];
    const containerVariants = {
        hidden: { opacity: 0},
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2}
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5}
        }
    };
  return (
    <div>
        <section id='education' className='min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden pt-16'>
        <div className='absolute top-[100px] left-64 insert-x-0 flex items-start justify-center'>

            <div className='h-96 w-96 bg-linear-to-br from-[#0268b0] to-blue-500 blur-2xl opacity-40 rounded-full'>

            </div>
        </div>
        <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, margin: '-50px'}}
        className='container mx-auto px-6 relative z-10 max-w-4xl'>
            {/* Title */}
            <motion.div
            variants={itemVariants}
            className='text-center mb-12'>
                <div className='flex justify-center mb-4'>
                <motion.div
                animate = {{ rotate: [0, -5, 0]}}
                transition={{ duration:3, repeat: Infinity}}>
                    <AcademicCapIcon
                    className='w-12 h-12 text-cyan-400' />
                </motion.div>
                </div>
            </motion.div>
        </motion.div>
        </section>
    </div>
  )
}

export default Education