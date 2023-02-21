import React, {Component} from 'react';
import {ImageHero} from '../comp/imageHero/imageHero';
import {NavButton} from '../comp/navButton/navButton';
class Home extends Component {

    render() {

        return (
            <div>
                <ImageHero />
                <NavButton id="navButton" text="Click" linkTo="#"></NavButton>
            </div>
        );
    }
}

export default Home;