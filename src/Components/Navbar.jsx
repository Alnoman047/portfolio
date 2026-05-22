import { AcademicCapIcon, EnvelopeIcon, FolderIcon, BriefcaseIcon, HomeIcon } from "@heroicons/react/24/outline";
import { Motion } from "framer-motion";

import { useEffect, useState } from "react"


const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isHovered, setIsHovered] = useState(false);

    const navItems = [
        {id: 'home', icon: HomeIcon , label: 'Home'},
        {id: 'skills', icon: BriefcaseIcon , label: 'Skills'},
        {id: 'education', icon: AcademicCapIcon , label: 'Education'},
        {id: 'Work', icon: FolderIcon , label: 'Work'},
        {id: 'Contact', icon: EnvelopeIcon , label: 'Contact'},
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                if (section && scrollPos >= section.offsetTop < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.id)
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth'});
        }
    };

  return (
    <>
        <Motion.div initial= {{ x: -100, opacity: 0}} animate={{ x: 0, opacity:1}} transition={{ duration: 0.8, delay: 0.5}} className="fixed left-4 lg:left-20 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Motion.div
        animate={{
            boxShadow : isHovered
            ? [
                '0 0 20px rgba(59, 130, 246, 0.6',
                '0 0 40px rgba(6, 182, 212, 0.4',
                '0 0 60px rgba(59, 130, 246, 0.3',
            ].join(',')
            : `0 0 30px rgba(59, 130, 246, 0.4),
             0 0 50px rgba(6, 182, 212, 0.2)`
        }}
        transition={{ duration: 0.4}}
        className='bg-gray-800/90 backdrop-blur-xl rounded-full p-3 lg:p-4 border border-blue-500/20 relative'>
            <Motion.div
            animate = {{ opacity: isHovered ? 0.8 : 0.4}}
            trainsition= {{ duration: 0.3}}
            className='absolute insert-0 rounded-full bg-linear-to-br from-blue-500/30 to-cyan-500/20 blur-lg -z-10'>   
            </Motion.div>

            <div className="flex flex-col space-y-3 lg:space-y-4">
                {
                    navItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <Motion.button
                            key={item.id}
                            initial= {{ scale: 0, opacity: 0}}
                            animate= {{ scale: 1, opacity: 1}}
                transition={{duration: 0.5, delay: index * 0.1}}
                onClick={() => scrollToSection(item.id)}
                className
                            ></Motion.button>
                        )
                    }

                    )
                }

            </div>
            
        </Motion.div>
            
        </Motion.div>
    </>
  )
}

export default Navbar