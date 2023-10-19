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
                    <Facade>
                        TravelTrekker
                    </Facade> 
                </nav>
            </aside>

            <div id="contents">
                <section>
                    <article>
                    </article>
                </section>
                <section> 
                    <article>
                    </article>
                </section>
            </div>
        </div>

        <footer>
        </footer>
    </div>
    );
};

export default Home;
