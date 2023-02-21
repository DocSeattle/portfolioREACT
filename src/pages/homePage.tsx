import React, {Component} from 'react';
import {ImageHero} from '../comp/imageHero/imageHero';
import { NavBarPrimary } from '../comp/navBarPrimary/navBarPrimary';
import {NavButton} from '../comp/navButton/navButton';
class Home extends Component {

    render() {

        return (
            <div>
                <NavBarPrimary />
                <ImageHero />
                <NavButton id="navButton" text="\/" linkTo="#" />
            </div>
        );
    }
}

export default Home;