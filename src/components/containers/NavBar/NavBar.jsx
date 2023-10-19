import "./NavBar.scss";
import { WhiteSpace, Image, LineSeparator } from "../../supports";
import NavBarButton from "../../buttons/NavBarButton/NavBarButton";

const NavBar = () => {
    return(
        <div id="navigation_bar">
            
            <WhiteSpace height="10px"/>
            <ul>
                {/*default navbar*/}
                <li><NavBarButton linkTarget="/" side="left" buttonText="Home"/></li>

                
                

                <li className="separator"><div className="right">|</div></li>
                
                <li><NavBarButton linkTarget="/contact" side="right" buttonText="Contact"/></li>

                <li className="separator"><div className="right">|</div></li>
                
                <li><NavBarButton linkTarget="/faqs" side="right" buttonText="FAQs"/></li>

                <li className="separator"><div className="right">|</div></li>

                <li><NavBarButton linkTarget="/plans" side="right" buttonText="Plans"/></li>

                <li className="separator"><div className="right">|</div></li>
            
                <li><NavBarButton linkTarget="/services" side="right" buttonText="Services"/></li>

                <li className="separator"><div className="right">|</div></li>

                <li><NavBarButton linkTarget="/about" side="right" buttonText="About us"/></li>
               
                
           </ul>
        </div>
    );
}

export default NavBar;