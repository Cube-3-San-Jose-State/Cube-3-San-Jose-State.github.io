import * as React from "react";

function Section(props, ref) {
    return (
        <div ref={ref} className={`flex w-full justify-center items-center text-center z-50 ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
}

export default React.forwardRef(Section);