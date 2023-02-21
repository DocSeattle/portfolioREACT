import './navBarPrimary.scss';
import {NavButton} from "./../../comp/navButton/navButton"
export const NavBarPrimary = () => {
    return (
        <div className="navBarWrapper">
            <nav role="navigation">
                <div className="navBarPrimaryToggle">
                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul className="navBarPrimaryMenu">
                        <NavButton id="navBarButtonHome" text="Home" linkTo="#"><li></li></NavButton>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Info</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}