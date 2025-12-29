import React, { useRef } from 'react'

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 },
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (   //this is the same as using text.split()
        <span 
            key={i} 
            className={className} 
            style={{ fontVariationSettings: `'whgt ${baseWeight}` }}
        >
            {char === " " ? '\u00A0' : char}   
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if(!container) return;

    const letters = container.querySelecterAll('span');

    const { min, max, default: base } = FONT_WEIGHTS[type];
}

const Welcome = () => {

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  return (
    <section id='welcome'>
        <p ref={subtitleRef}>
            {renderText(
                "Hey, I'm Prithvi! Welcome to my", 
                'text-3xl font-georama', 
                100
            )}
        </p>
        <h1 ref={titleRef} className='mt-7'>
            {renderText(
                "portfolio", 
                'text-9xl italic font-georama', 
                400
            )}
        </h1>

        <div className='small-screen'>
            <p>This portfolio is designed for desktop/tablet screens only.</p>
        </div>
    </section>
  )
}

export default Welcome