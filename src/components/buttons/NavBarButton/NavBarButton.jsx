import "./NavBarButton.scss";

const NavBarButton = ({linkTarget, side, buttonText}) =>{

    return(
        <a className="nav-button" href={linkTarget} >
            <div className={side}>
                {buttonText}
            </div>
        </a>
    );
};

export default NavBarButton;