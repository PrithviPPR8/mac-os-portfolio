import React, { useRef } from 'react'

const Welcome = () => {

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  return (
    <section id='welcome'>
        <p ref={subtitleRef}>Hey, I'm Prithvi! Welcome to my</p>
        <h1>portfolio</h1>
    </section>
  )
}

export default Welcome