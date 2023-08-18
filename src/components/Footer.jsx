import * as React from "react";
import gear from "../assets/gear.png";
import Section from "./Reusables/Section";

function Footer(props, ref) {
    return (
        <Section className='flex w-full h-[30vh] bg-club-yellow' ref={ref}>
            <div className='flex-1'>
                <div className='ml-20 mt-10 text-5xl font-gilroy block'>contact us</div>
                <a className='ml-40 mt-5 text-2xl font-gilroy block' href="mailto:shannonkyle.deleon@gmail.com">President - Kyle Deleon: shannonkyle.deleon@gmail.com</a>
                <a className='ml-40 mt-1 text-2xl font-gilroy block' href="">Treasurer - ADD HERE</a>
                <a className='ml-40 mt-1 text-2xl font-gilroy block' href="">...</a>
            </div>
            <div className='flex flex-col flex-1 justify-center items-center'>
                <div>
                    <a className='flex items-center mb-4 gap-2' href="">
                        <img src={gear} className='w-10 h-10' />
                        <div className='text-2xl font-gilroy'>Join our discord</div>
                    </a>
                    <a className='flex items-center gap-2' href="">
                        <img src={gear} className='w-10 h-10 ' />
                        <div className='text-2xl font-gilroy'>Follow our instagram</div>
                    </a>
                </div>
            </div>
        </Section>
    );
}

export default React.forwardRef(Footer);