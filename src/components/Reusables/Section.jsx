import * as React from "react";

function Section(props, ref) {
    return (
        <div className={`w-full flex justify-center items-center z-50 ${props.className}`} style={props.style} ref={ref}>
            {props.children}
        </div>
    );
}

export default React.forwardRef(Section);