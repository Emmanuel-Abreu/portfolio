import Image from 'next/image'
//import styles from './page.module.css'
import '../assets/styles/Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeMessage from '../components/HomeMessage'

export default function Home() {
  return (
    <main className="Home">
      <Navbar/>
      <HomeMessage/>
      <Footer/>
    </main>
  )
}
