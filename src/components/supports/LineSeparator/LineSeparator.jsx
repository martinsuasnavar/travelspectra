import "./LineSeparator.scss";

const LineSeparator = ({height, width, color}) =>{
    /*define default values in case props aren't defined*/
    const defaultStyle = {
        width: "100%",
        height: "2px",
    };
    
    /*evaluate if props were given off, if they were then default values are overriden with props*/
    const divStyle = {
        ...defaultStyle,
        backgroundColor: color !== undefined ? color : defaultStyle.backgroundColor, /*!== strict inequality, takes also in account the type of variable*/
        height: width !== undefined ? `${width}px` : defaultStyle.width,
        height: height !== undefined ? `${height}px` : defaultStyle.height,
    };

    return (
        <div className="line-separator" style={divStyle}></div>
    );
}

export default LineSeparator;