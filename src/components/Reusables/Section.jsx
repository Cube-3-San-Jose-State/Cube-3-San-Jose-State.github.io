import * as React from "react"

function Section({ className, children }) {
    return (
        <div className={`w-full h-screen flex justify-center items-center ${className}`}>
            <div>{children}</div>
        </div>
    )
}

export default Section;