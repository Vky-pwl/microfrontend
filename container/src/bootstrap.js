
import {mount as ProductMount} from 'products/ProductsIndex';
import {mount as CartMount} from 'cart/CartShow';
console.log('Contanier');
ProductMount(document.querySelector('#host-products'));
CartMount(document.querySelector('#host-cart'));