import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})};
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({ display: "none"})};
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})};
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})};
`
const ProductDetail = styled.div`
    flex: 2;
    display:flex;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
    padding: 20px;
    object-fit: scale-down;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    width: 50px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})};
`

const ProductPriceContainer = styled.div`
    display: flex;
    align-items: center;
`

const ProductPrice = styled.div`
    color: ${props=>props.status === "discount" ? "gray" : "teal"};
    font-size: ${props=>props.status === "discount" ? "26px" : "38px"};
    text-decoration: ${props=>props.status === "discount" ? "line-through" : "none"};
    font-weight: 250;
    margin: 10px;
    ${mobile({ marginBottom: "10px"})};
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};

`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`


const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.ibb.co/dfNMdJk/Png-Item-6786730.png" />
                            <Details>
                                <ProductName><b> Product: </b>
                                    JESSIE BLACK SHOES
                                </ProductName>
                                <ProductId> <b>ID: </b>958431514</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize> <b>Size: </b> 39</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>1</ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPriceContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </ProductPriceContainer>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.ibb.co/G2F7wC6/Png-Item-3867063.png" />
                            <Details>
                                <ProductName><b> Product: </b>
                                    GRAY T-SHIRT
                                </ProductName>
                                <ProductId> <b>ID: </b>45344354</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize> <b>Size: </b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>2</ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPriceContainer>
                                <ProductPrice status="discount">$ 40</ProductPrice>
                                <ProductPrice>$ 30</ProductPrice>
                            </ProductPriceContainer>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT CART</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  );
}

export default Cart