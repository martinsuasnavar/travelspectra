import { WhiteSpace, LineSeparator, Image, Video, Grid, GridItem } from "../../components/supports";
import ContentButton from "../../components/buttons/ContentButton/ContentButton";
import ImageButton from "../../components/buttons/ImageButton/ImageButton";
import Footer from "../../components/containers/Footer/Footer";
import Facade from "../../components/containers/Facade/Facade";
import GenericBox from "../../components/containers/GenericBox/GenericBox";

const Home = () =>{
    return(
        <div id="main_wrapper">
        <header>
            <h1></h1>
            <nav>
            </nav>
        </header>

        <div id="main_container">
            <aside>
                <nav>
                   
                </nav>
            </aside>

            <div id="contents">
                <section className="facade-section">
                    <WhiteSpace height="100"/>
             

                    <div className="quick-booking-container">
                    <h2>Quick booking</h2>
                    <form className="quick-booking-form">
                       

                       <input id="destination" placeholder="Place of Origin - Place of Destination"></input>
                       <br/>
                       <input id="airport" placeholder="Departure Time - Arrival Time"></input>
                       <br/>
                       <input id="hotel" placeholder="Number of Persons"></input>
                       <WhiteSpace height="20"/>
                       <ContentButton buttonText={"Book now"}/>
                    </form>

                    <WhiteSpace height="20"/>
                    
                    </div>
                    <WhiteSpace height="50"/>
                    <LineSeparator/>
                </section> 
                <Facade backgroundImg={"/images/landscape.png"} height="500px">
                    <WhiteSpace height="150"/>
                    <h1>Need a new adventure?</h1>
                    We got you covered
                    <br/>
                    <WhiteSpace height="50"/>
                    <ContentButton buttonText={"Get started"}/>
                </Facade>
                <section> 
                    <article>
                   
                        <Image height="250px" src="/images/advertisement.png"/>
                        
                <WhiteSpace height="100"/>
                        <div className="title-text-container">
                            <div className="big-title-text">Popular destinations</div>
                        </div>
                        <div>This is what is hot right now</div>
                        <br/>
                        <Grid templateColumns={"repeat(4,300px)"}>
                            <GridItem>1</GridItem>
                            <GridItem>2</GridItem>
                            <GridItem>3</GridItem>
                            <GridItem>4</GridItem>
                        </Grid>
                    </article>
                </section>
        
                <WhiteSpace height="10"/>
                <section>
                    <article>
                    <div className="title-text-container">
                        <div className="big-title-text">Special offers</div>
                    </div>
                    <div>Best prices for your next adventure</div>

                    <br/>
                    <Grid templateColumns={"repeat(4,300px)"}>
                        <GridItem>1</GridItem>
                        <GridItem>2</GridItem>
                        <GridItem>3</GridItem>
                        <GridItem>4</GridItem>
                    </Grid>
                    <WhiteSpace height="50"/>
                    </article>
                </section>

                <section className="newsletter-container">
                    <div>Subscribe to our newsletter</div>
                    <form className="newsletter-form">
                        
                        <br/>
                        <input placeholder="Your email"></input>
                        <WhiteSpace height="50"/>
                        <ContentButton buttonText={"Send"}/>
                       
                    </form>
                </section>
                <WhiteSpace height="50"/>
            </div>
            
    
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>
    );
};

export default Home;
