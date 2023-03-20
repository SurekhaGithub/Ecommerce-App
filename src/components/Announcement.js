import React from 'react'
import styled from "styled-components"

const Container=styled.div`
height:30px;
color:white;
background-color:teal;
font-size:14px;
font-weight:500;
align-items:center;
display:flex;
justify-content:center;

`
const Announcement = () => {
  return (
    <Container>
      Super Deal!Free Shipping on Orders over $50
    </Container>
  )
}

export default Announcement
