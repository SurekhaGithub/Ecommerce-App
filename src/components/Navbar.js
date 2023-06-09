import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container=styled.div`
height:60px;
`
const Wrapper=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:10px 20px;
`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`
const Center=styled.div`
flex:1;
text-align:center;
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const Language=styled.span`
font-size:14px;
cursor:pointer;`

const SearchContainer=styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
padding:5px;
margin-left:25px;
`
const Input=styled.input`
border:none;`

const Logo=styled.h1`
font-weight:bold;
`
const MenuItem=styled.div`
font-ize:12px;
cursor:pointer;
margin-left:25px;

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
             <Language>
                EN
             </Language>
             <SearchContainer>
                <Input/>
                <SearchIcon style={{color:"gray",fontSize:16}}/>
             </SearchContainer>
            </Left>
            <Center>
            <Logo>
                LAMA..
            </Logo>
            </Center>
            <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN-IN</MenuItem>
            <MenuItem><Badge badgeContent={4} color="primary">
            < ShoppingCartIcon  color="action" />
            </Badge>
            </MenuItem>
            </Right>
        </Wrapper>
     
    </Container>
  )
}

export default Navbar
