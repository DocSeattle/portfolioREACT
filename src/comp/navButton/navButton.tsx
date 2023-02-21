import './navButton.scss'

interface navButtonProps {
    id: string | undefined;
    text: string;
    linkTo: string;
}

export const NavButton = ({ id, text, linkTo}: navButtonProps) => {
    return (
        <div id={id} className="navButton-wrapper">
            <form className="navButton-container">
                <div className="navButton-base">
                    <a 
                    href={linkTo}
                    >
                        <div className="spanWrapper">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {text}
                    </a>
                </div>
            </form>
        </div>
    )
}