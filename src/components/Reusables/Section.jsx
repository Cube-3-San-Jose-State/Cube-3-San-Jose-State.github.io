import * as React from "react";

function Section({ className, children, style }) {
    return (
        <div className={`w-full h-screen flex justify-center items-center ${className}`} style={style}>
            {children}
        </div>
    );
}

export default Section;