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
        <Motion.div>
            <MotionConfig></MotionConfig>
        </Motion.div>
    </>
  )
}

export default Navbar