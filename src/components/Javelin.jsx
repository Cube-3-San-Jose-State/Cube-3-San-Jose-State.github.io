import * as React from 'react'
import Section from './Reusables/Section'
import background from '../assets/javelin-bg.png'
import logo from '../assets/javelin-logo.png'

export default function Javelin() {
    return (
        <Section className="flex-col text-center gap-7" style={{ background: `url(${background}) no-repeat center`, backgroundSize: "cover" }}>
            <img className="w-[250px]" src={logo} alt="Javelin logo" />
            <div className='text-6xl font-bold text-white'>JAVELIN</div>
            <div className='text-xl w-1/2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia animi, libero sequi ipsa voluptatem eius aliquam quidem repudiandae ratione ipsam sed porro soluta recusandae asperiores, dolorum quis dolor totam?</div>
            <div className='w-3/4 h-[30%] bg-gray-500 text-center text-6xl'>timeline here</div>
        </Section>
    )
}