import * as React from "react";

function Section({ className, children, style, refs }) {
    return (
        <div className={`w-full h-screen flex justify-center items-center z-50 ${className}`} style={style} ref={refs}>
            {children}
        </div>
    );
}

export default Section;