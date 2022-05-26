import react from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

// products array, own id, name, description
const products = [
    { id: 1, name: 'Hats', description: 'Dad hats. ', price: '$22' },
    { id: 2, name: 'Shirts', description: 'Tee Shirts. ', price: '$25' },
    { id: 3, name: 'Hoodies', description: 'Hoodies. ', price: '$40' },
    { id: 4, name: 'Mugs', description: 'Mugs. ', price: '$22' },
    { id: 5, name: 'Posters', description: 'Posters. ', price: '$22' },

]


const Products = () => {
    return (
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map ((product) => (
                <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                <Product />
                </Grid>
            ))}

        </Grid>
    </main>
    );
}

export default Products;
