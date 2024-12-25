import axios from "axios";

const productionUrl='https://strapi-store-server.onrender.com/api/products'
export const customFetch=axios.create({
 baseURL:productionUrl,
})
export const formatPrice = (price) => {
 return new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD',
 }).format(price / 100);
};