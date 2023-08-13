import * as React from "react"
import Section from "./Reusables/Section";

function About({refs}) {
    return (
        <Section className="bg-yellow-300 h-[50vh]">
            <div ref={refs}>about here</div>
        </Section>
    )
}

export default About;