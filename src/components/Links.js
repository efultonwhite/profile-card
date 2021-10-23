import React from 'react'
import "../styles/Links.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithubSquare, faHtml5, faCss3Alt, faJsSquare, faReact} from "@fortawesome/free-brands-svg-icons";

function Links() {
    return (
        <div className="Links">
            <div className="links">
                <a href="https://github.com/efultonwhite">
                    <FontAwesomeIcon className="fa-icon github" icon={faGithubSquare} />
                </a>
            </div>
            <div className="links">
                <FontAwesomeIcon className="fa-icon html5" icon={faHtml5} />
            </div>
            <div className="links">
                <FontAwesomeIcon className="fa-icon css3" icon={faCss3Alt} />
            </div>
            <div className="links">
                <FontAwesomeIcon className="fa-icon js" icon={faJsSquare} />
            </div>
            <div className="links">
                <FontAwesomeIcon className="fa-icon react" icon={faReact} />
            </div>

            
        </div>
    )
}

export default Links
