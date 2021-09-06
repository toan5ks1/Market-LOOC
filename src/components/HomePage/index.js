import React, {useState} from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Intro  from '../IntroSection';
import Product from '../ProductSection/cards';
//import { IntroSection } from '../IntroSection';
// import Footer from '../Footer/Footer'
// import Cards from '../Cards'

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
        </>
    )
}
 export default Home;