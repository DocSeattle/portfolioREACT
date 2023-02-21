import './navBarPrimary.scss';
import { NavButton } from "./../navButton";

export const NavBarPrimary = () => {
    return (
        <div>
            <nav role="navigation">
                <div className="navBarPrimaryToggle">
                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul className="navBarPrimaryMenu">
                        <li><NavButton id="navBarButtonHome" text="Home" linkTo="#"/></li>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Info</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}