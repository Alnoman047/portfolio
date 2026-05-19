import { useEffect, useState } from "react"


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
            if (!isDeleting && displayText === currentIndex) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if ( isDeleting && displayText === '') {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length);
            } else {
                setDisplayText(
                    isDeleting
                    ? currentIndex.substring(0, displayText.length - 1)
                    : currentIndex.substring(0, displayText.length + 1)
                );
            }
        }, isDeleting ? 50 : 100);
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex]);
  return (
    <section>

    </section>
  )
}

export default Hero
