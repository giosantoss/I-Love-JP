import React,{useEffect} from 'react';
import './style.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Turismo from './components/turismo/Turismo';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section')
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const sectionId = entry.target.getAttribute('id')
        const sectionToFade = document.getElementById(sectionId)
  
        if (entry.isIntersecting) {
          sectionToFade.classList.remove('fade-out')
          sectionToFade.classList.add('fade-in')
        } else {
          sectionToFade.classList.remove('fade-in')
          sectionToFade.classList.add('fade-out')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '-100px 0px -200px 0px'
    })
  
    sections.forEach(section => {
      observer.observe(section)
    })
  
    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Turismo/>
    </div>
  );
}

export default App;
