import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
<<<<<<< HEAD
  const cartSize =  cart.length;
=======
  const cartSize = cart.length 
>>>>>>> 48089907b3bf3d00d097300828e31e8fad96f548

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
<<<<<<< HEAD
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
=======
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`} 
>>>>>>> 48089907b3bf3d00d097300828e31e8fad96f548
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
