import "./NavBarButtons.scss";

const NavBarButton = ({linkTarget, side, children}) =>{

    return(
        <div className={side}>
            <a className="nav-button" href={linkTarget}>
                {children}
            </a>
        </div>
    );
};

export default NavBarButton;