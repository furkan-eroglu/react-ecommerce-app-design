import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    
    &:hover ${Info}{
        opacity: 1;
    }

`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
`
const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.1s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.14);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined></ShoppingCartOutlined>
            </Icon>
            <Icon>
                <SearchOutlined></SearchOutlined>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined></FavoriteBorderOutlined>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product