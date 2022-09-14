import React from "react";
import { CardUi } from "../../components/CardUi/CardUi";
import { Header } from "../../components/Header/Header";
import { CardsUiContainer } from "../../containers/CardsUiContainer/CardsUiContainer";

export const Home = () => {
  return (
    <div>
      <Header />
      <CardsUiContainer>
        <CardUi />
        <CardUi
          title={"922: Steelers vs. Browns"}
          image="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2022/Other/Sports/TNF/GWtakeover/Desktop_Image-Card_week3_9-22_379x304._SY304_CB610971969_.jpg"
        />
        <CardUi />
        <CardUi />
      </CardsUiContainer>
    </div>
  );
};
