import { Navbar } from "./Navbar"
import { motion } from "framer-motion"
import '../Css/about.css'


export const About = () => {
    return (
        <motion.div className="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
          <Navbar />
          <div className="hero">
            <h1 id="jay">HELLO!</h1>
            <p>I'm <span id="jay">Jay</span>, a web developer <br />
             and data science enthusiast  based in Pune.
            </p>
            <p className="aboutme">
            I'm passionate about building beautiful, <br />
             functional websites and using data to <br />
              solve real-world problems . I am <br /> currently learning machine learning
              <br /> and data science
            </p>

          </div>  
        </motion.div>
    )
}