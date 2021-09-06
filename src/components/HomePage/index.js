import React, {useState} from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Intro  from '../IntroSection/section12';
import Product from '../ProductSection/cards';
import Section3 from '../IntroSection/section3'
import Section4 from '../IntroSection/section4'
import Footer from '../Footer'

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Intro />
            <Product />
            <Section3 />
            <Section4 />
            <Footer />
        </>
    )
}
 export default Home;