import * as React from "react"
import "./Section.css"

function Section( {children, id} ) {
    return (
        <div id={id} className="section">
            <div>{children}</div>
        </div>
    )
}

export default Section;