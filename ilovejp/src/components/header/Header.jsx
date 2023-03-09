import React,{useState,useEffect} from 'react'
import './header.css'
import IloveJpLogo from '../../images/ilovejp.png'

function Header() {
    const [activeNav, setActiveNav] = useState('#home')

    useEffect(() => {
        const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.offsetHeight - 1;
            if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionBottom) {
            const sectionId = `#${section.id}`;
            setActiveNav(sectionId);
            }
        });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <header>
        <div className="logo">
            <a href="#main"> <img src={IloveJpLogo} alt="João Pessoa logo"/> </a>
        </div>

        <nav>
            <a href="#main">HOME</a>
            <a href="#turismo">TURISMO</a>
            <a href="#sobre">SOBRE</a>
        </nav>
    </header>
  )
}

export default Header