import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";
  import styled from "styled-components";

  const Container=styled.div`
  flex: 1;
  margin:5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover{
    background-color:#fcf1ed;
  }
  `
  const Image=styled.img`
  height: 75%;
  z-index: 2;`
  
  const Info=styled.div`
  position:absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  cursor: pointer;
  `
  const Icon=styled.div`
   width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
  `

  const Circle=styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  `

const Product = ({item}) => {
  return (
    
      <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
    
  )
}

export default Product
