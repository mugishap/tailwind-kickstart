import React from 'react'
import styled from 'styled-components'
import './Landing.css'
function Landing() {
    return (
        <Blue className='blue'>
            <p className='text-5xl bg-green-200 text-center'>Places</p>
        </Blue>
    )
}
const Blue = styled.div`
clip-path: polygon(0 0, 100% 0%, 100% 74%, 0 93%);
background-color: #003fff;
width: 100%;
height: 40vh;
`
export default Landing