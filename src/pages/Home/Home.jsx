import { WhiteSpace, LineSeparator, Image, Video, Grid, GridItem } from "../../components/supports";
import ContentButton from "../../components/buttons/ContentButton/ContentButton";
import ImageButton from "../../components/buttons/ImageButton/ImageButton";
import Footer from "../../components/containers/Footer/Footer";
import Facade from "../../components/containers/Facade/Facade";

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
                    

                  
                    <form className="quick-booking-form">
                        <h2>Quick booking</h2>
                       <input></input>
                       <br/>
                       <input></input>
                       <br/>
                       <input></input>
                    </form>
                    
                    <WhiteSpace height="20"/>
                    <ContentButton buttonText={"Book now"}/>
                    <WhiteSpace height="10"/>
                </section> 
                <WhiteSpace height="50"/>
                <section> 
                    <article>
                        Popular destinations
                        <Grid templateColumns={"repeat(4,200px)"}>
                            <GridItem>1</GridItem>
                            <GridItem>2</GridItem>
                            <GridItem>3</GridItem>
                            <GridItem>4</GridItem>
                        </Grid>
                    </article>
                </section>

                <WhiteSpace height="50"/>
                <section>
                    <article>
                        Special offers
                        <Grid templateColumns={"repeat(4,200px)"}>
                            <GridItem>1</GridItem>
                            <GridItem>2</GridItem>
                            <GridItem>3</GridItem>
                            <GridItem>4</GridItem>
                        </Grid>
                        <WhiteSpace height="50"/>
                    </article>
                </section>
                
            </div>
        </div>

        <footer>
            <Footer/>
        </footer>
    </div>
    );
};

export default Home;
