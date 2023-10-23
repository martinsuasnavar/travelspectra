import { WhiteSpace, LineSeparator, Image, Video, Grid, GridItem } from "../../components/supports";
import ContentButton from "../../components/buttons/ContentButton/ContentButton";
import ImageButton from "../../components/buttons/ImageButton/ImageButton";
import Footer from "../../components/containers/Footer/Footer";
import Facade from "../../components/containers/Facade/Facade";
import GenericBox from "../../components/containers/GenericBox/GenericBox";

const Flights = () =>{
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
            <Facade backgroundImg={"/images/landscape.png"}>
                <section>
                    <WhiteSpace height="150"/>
                        <GenericBox width="300px" height="50px">
                            <form>
                                <h1>Book your flight</h1>
                                <input></input>
                                <input></input>
                                <input></input>
                            </form>
                        </GenericBox>

                </section>
                <WhiteSpace height="250"/>
            
            </Facade>
        </div>
    </div>

    <footer>
        <Footer/>
    </footer>
</div>
    );
};

export default Flights;