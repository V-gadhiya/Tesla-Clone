import React, { useState } from "react";
import styled from "styled-components";
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
// import { selectCars } from "../features/car/carSlice";
// import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const cars = useSelector(selectCars);
  return (
    <Container>
      <a href="/">
        <img src="images/logo.svg" alt="Tesla" />
      </a>
      <Menu>
        {/* {cars &&
          cars.map((car, index) => {
            return (
              <a href="/" key={index}>
                {car}
              </a>
            );
          })} */}
        <a href="/">Model S</a>
        <a href="/">Model Y</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <CustomMenu onClick={() => setIsOpen(true)} />
      </RightMenu>

      <BurgerNav show={isOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setIsOpen(false)} />
        </CloseWrapper>
        <ul>
          <li>
            <a href="/">Existing Inventory</a>
          </li>
          <li>
            <a href="/">Used Inventory</a>
          </li>
          <li>
            <a href="/">Trade-In</a>
          </li>
          <li>
            <a href="/">Cyber Truck</a>
          </li>
          <li>
            <a href="/">Roadster</a>
          </li>
          <li>
            <a href="/">Tesla</a>
          </li>
          <li>
            <a href="/">Solarcity</a>
          </li>
          <li>
            <a href="/">Hyperloop</a>
          </li>
        </ul>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  display: flex;
  ${"" /* width: 100%; */}
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(BsList)`
  font-size: 20px;
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background: #fff;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 1s;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(500px)")};

  li {
    padding: 15px 0;
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  a {
    font-weight: 600;
  }
`;

const CustomClose = styled(BsX)`
  font-size: 30px;
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
