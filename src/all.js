import Ann from "./announcement-section/ann";
import Criteria from "./criteria-section/criteria";
import FAQ from "./faqs/faqs";
import Footer from "./footer/footer";
import Header from "./header/header"
import Hero from "./hero-section/hero";
import Intro from "./intro-section/intro";
import Privacy from "./privacy-section/privacy";
import Prize from "./prize-section/prize";
import Rules from "./rules-section/rules";
import Sponsor from "./sponsor-section/sponsor";



const All = ()=>{
    
    return(
        <>
        
        <Header/>
        <Hero/>
        <Intro/>
        <Rules/>
        <Criteria/>
        <FAQ/>
        <Ann/>
        <Prize/>
        <Sponsor/>
        <Privacy/>
        <Footer/>

        </>
    )
}
export default All;