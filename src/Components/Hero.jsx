import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import hero from '../assets/Profile.jpg'


export const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ isDeleting, setIsDeleting] = useState(false);

    const texts = [
        'Web Developer',
        'Frontend Expert', 'Creative Coder'
    ];
    const currentText = texts[currentIndex];

    //Typing Animation
    useEffect (() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && displayText === currentText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if ( isDeleting && displayText === '') {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length);
            } else {
                setDisplayText(
                    isDeleting
                    ? currentText.substring(0, displayText.length - 1)
                    : currentText.substring(0, displayText.length + 1)
                );
            }
        }, isDeleting ? 50 : 100);
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentText]);

    const scrollToSkills = () => {
        const element = document.getElementById('skills');
        element?.scrollIntoView({ behavior: 'smooth'});
    };

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
    const itemvariants = {
        hidden : { y: 50, opacity: 0},
        visible: {
            y:0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-64 left-96 w-80 h-80 bg-blue-500/20 rounded-full blur-xl">

            </div>

        </div>
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center relative z-10"
        >
            {/* profile image */}
            <motion.div
            variants={itemvariants}
            className="mb-8"
            >
                <motion.div
                whileHover={{scale: 1.05}}
                className="w-56 h-56 mx-auto">
                    <img src={hero} alt="profile" className="w-full h-full object-cover rounded-full shadow-2xl shadow-blue-500 hover:shadow-cyan-500/30 transition-all duration-300" />

                </motion.div>

            </motion.div>
            <motion.h1 variants={itemvariants} className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400" >Md Rakib Hossain</span>
                {/* Animated Text */}
                <motion.div variants={itemvariants} className="h-16 mb-6">
                    <h2 className="text-3xl md:text-4xl text-gray-200 font-light">
                        I'm a {''}
                        <span className="text-cyan-300 border-r-2 border-cyan-300"> {displayText} </span>
                    </h2>
                </motion.div>
                {/* Description */}
                <motion.p variants={itemvariants} className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    I'm a passionate web developer with expertise in frontend technologies. I create stunning and responsive websites that provide seamless user experiences. With a keen eye for design and a commitment to clean code, I bring ideas to life on the web.
                </motion.p>
                {/* CTA Buttons */}
                    <motion.div variants={itemvariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button onClick={scrollToSkills} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            View My Work
                        </motion.button>
                        <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="px-8 py-4 border-2 border-gray-400/30 text-white rounded-full font-semibold text-lg hover:bg-gray-800/50 transition-all duration-300">
                            Download CV
                        </motion.button>

                    </motion.div>
            </motion.h1>
        </motion.div>
    </section>
  )
}

export default Hero
