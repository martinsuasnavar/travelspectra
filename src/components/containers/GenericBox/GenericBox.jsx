import "./GenericBox.scss";

const GenericBox = ({width, height, children}) =>{
    const divStyle = {
        width: width,
        height: height,
    };

    return(
        <div className="generic-box-container" style={divStyle}>
            <div className="generic-box-content">
                {children}
            </div>
        </div>
    );
}

export default GenericBox;