const ImageButton = ({src, width, height, pathTarget}) =>{
    const defaultPathData = {
        href: "#",
    };
    
    const pathData = {
        ...defaultPathData,
        href: pathTarget !== undefined ? pathTarget : defaultPathData.href,
    };
    

    return(
        <a href={pathData.href} className="image-button">
            <img src={src} width={width} height={height}></img>
        </a>
    );
}

export default ImageButton;