import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeWrite = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a Flutter Enthusiast',
        1000,
        'a Mobile Developer',
        1000,
        'a React Developer',
        1000,
        'a Next JS Developer',
        1000,
        'a Full Stack Developer',
        1000,
        'a Web Design',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-black dark:text-white font-bold '
    />
  )
}

export default TypeWrite