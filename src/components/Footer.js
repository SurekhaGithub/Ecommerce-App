import React from 'react'
import styled from "styled-components"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

const Container=styled.div`
display:flex;
`

const Left=styled.div`
display:flex;
flex:1;
flex-direction:column;
padding: 20px;

`
const Logo=styled.h1`
`
const Desc=styled.p`
margin: 20px 0px;
`
const SocialContainer=styled.div`
display:flex;
`
const SocialIcon=styled.div`
margin-right:10px;
background-color:#${props=>props.color};
`

const Center=styled.div`
flex:1;
padding: 20px;
`
const Title=styled.h3`
margin-bottom: 30px;
`

const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
  `

const Right=styled.div`
flex:1;
padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
  return (
   <Container>
    <Left>
    <Logo>LAMA.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlinedIcon/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
    </List>
    </Center>
    
    
    <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomOutlinedIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    
    
   </Container>
  )
}

export default Footer
