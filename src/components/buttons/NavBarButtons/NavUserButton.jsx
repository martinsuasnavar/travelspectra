import "./NavBarButtons.scss";

const NavUserButton = ({linkTarget, side, children, onClick }) =>{

    return(
        <div className={side}>
            <a className="nav-user-button" href={linkTarget} onClick={onClick}>
                {children}
            </a>
        </div>
    );
};

export default NavUserButton;