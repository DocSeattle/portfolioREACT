import "./imageHero.scss";

import {Scanlines} from "../scanlines/scanlines";

export const ImageHero = (): React.ReactElement => { 
    return (
    <div>
            <div id="Home" className="imageHero-container">
                <div className="glow-bg">
                    <div className="glitch" data-text="Seattle">Seattle</div>
                    <div className="glow">Seattle</div>
                </div>
                <p className="subtitle">
                    IMPRACTICAL DEVELOPER
                </p>
            </div>
        <Scanlines />
    </div>
    )
}