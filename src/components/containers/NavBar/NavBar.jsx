import "./NavBar.scss";
import { WhiteSpace, Image, LineSeparator } from "../../supports";
import NavBarButton from "../../buttons/NavBarButtons/NavBarButton";
import NavUserButton from "../../buttons/NavBarButtons/NavUserButton";
import ContentButton from "../../buttons/ContentButton/ContentButton";
import LogIn from "../../LogIn/LogIn";
import { useState } from "react";

const NavBar = () => {
    const [showPopup, setShowPopup] = useState(false);

    

    const handleClick = event => {
        setShowPopup(current => !current);
    };
    
    return(
        <nav id="navigation_bar">
            
            <WhiteSpace height="10px"/>

            <li><div className="left"><div><Image height="40px" src="/images/travelspectra-logo.png"/></div></div></li>
            <ul>
                <li><div className="right"><div className="separator">|</div></div></li>
                <li><NavUserButton linkTarget="#" side="right">Sign Up</NavUserButton></li>
                <li><NavUserButton linkTarget="#" onClick={handleClick} side="right">LogIn</NavUserButton></li>
            </ul>

            <WhiteSpace height="50"/>
            <ul>
                <li><NavBarButton linkTarget="/" side="left"><Image src="/images/home-icon-black.png" width="20"/></NavBarButton></li>

                
                

                
                <li><NavBarButton linkTarget="/hotels" side="left">Hotels</NavBarButton></li>

       
                
                <li><NavBarButton linkTarget="/flights" side="left">Flights</NavBarButton></li>

               

                <li><NavBarButton linkTarget="/rentals" side="left">Rentals</NavBarButton></li>
            
              

                <li><NavBarButton linkTarget="/taxis" side="left">Taxis</NavBarButton></li>
               
                
           </ul>

           {/*handle login popups*/}
           {showPopup && <LogIn/>}
        </nav>
    );
}

export default NavBar;