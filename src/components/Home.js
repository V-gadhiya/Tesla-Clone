import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { Fade } from 'react-reveal';

const Home = () => {
  return (
    <Fade>
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        bgImg="model-s"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        bgImg="model-y"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        bgImg="model-3"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        bgImg="model-x"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panel In America"
        description="Money Back Gurantee"
        bgImg="solar-panel"
        leftBtnText="order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Costs Less Than a New Roof plus Solar Panels"
        bgImg="solar-roof"
        leftBtnText="order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        bgImg="accessories"
        leftBtnText="shop now"
      />
    </Fade>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
