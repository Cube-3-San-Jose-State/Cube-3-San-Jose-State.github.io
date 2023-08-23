import * as React from "react";
import gear from "../assets/gear.png";
import Section from "./Reusables/Section";

function Footer(props, ref) {
    return (
        <Section className='flex w-full h-[30vh] bg-club-yellow mb-0' ref={ref}>
            <div className='flex-column font-noto'>
                <h1 className='text-3xl font-gilroy block'>contact us</h1>
                <div className='block'> President - Kyle Deleon: <a href="mailto:shannonkyle.deleon@gmail.com">shannonkyle.deleon@sjsu.edu</a></div>
                <div className='block'> Treasurer - William Qiao: <a href="mailto:shannonkyle.deleon@gmail.com">william.qiao@sjsu.edu</a></div>
                <div className='block'> Outreach - Edward Belmudes: <a href="mailto:shannonkyle.deleon@gmail.com">edward.belmudes@sjsu.edu</a></div>
            </div>

            <div className='flex flex-col flex-1 justify-center items-center font-gilroy'>
                <div>
                    <a className='flex items-center mb-4 gap-2' href="">
                        <img src={gear} className='w-10 h-10' />
                        <div className='text-2xl '>Join our discord</div>
                    </a>
                    <a className='flex items-center gap-2' href="">
                        <img src={gear} className='w-10 h-10 ' />
                        <div className='text-2xl'>Follow our instagram</div>
                    </a>
                </div>
            </div>
        </Section>
    );
}

export default React.forwardRef(Footer);