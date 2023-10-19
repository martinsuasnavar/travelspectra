import { useState, useEffect } from "react";
import "./Facade.scss";

const Facade = ({children, backgroundImg, height})=>{
    /*handle lazy background scroll event*/
    const [offset, setOffset] = useState(0);
    const handleLazyScroll = () => {
        setOffset(window.pageYOffset);
      };
   
      useEffect(() => {
      
        window.addEventListener('scroll', handleLazyScroll);
        return () => {
          window.removeEventListener('scroll', handleLazyScroll);
     };
    }, []);

    const divStyle = {
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundSize: "cover",
        height: height,
        backgroundPositionY: `${offset * -0.2}px`,
    };

    return(
        <div className="facade" style={divStyle}>
            {children}
        </div>
    );
};

export default Facade;