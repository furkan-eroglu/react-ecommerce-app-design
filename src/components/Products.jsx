import styled from "styled-components"
import {popularProducts} from "../data"
import Product from "./Product"
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    padding: 25px;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = () => {
  return (
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products