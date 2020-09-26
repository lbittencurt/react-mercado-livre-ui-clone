import React from "react";

import SellerInfo from "../SellerInfo";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

import tshirtImage from "../../assets/tshirt.png";

const product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction /> */}
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida
      sodales consequat. Sed sit amet iaculis enim, sed molestie massa. In
      consequat felis nunc, sed blandit lacus ornare eu. Morbi lacinia elementum
      dui vitae ultricies. Nulla laoreet in velit non hendrerit. Proin in lorem
      metus. Proin venenatis sodales dolor nec rhoncus. Sed maximus tellus vel
      magna consectetur, et elementum magna fringilla. Donec in mollis ex.
      Quisque et semper nibh, at interdum urna. Quisque imperdiet enim mi, et
      varius arcu varius vitae. Nullam hendrerit efficitur eros, et faucibus
      lacus porttitor hendrerit. Ut vitae blandit mi. Morbi felis tellus, auctor
      tincidunt velit et, lacinia efficitur tellus.
      <br />
      <br />
      Itens inclusos:
      <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida
      sodales consequat. Sed sit amet iaculis enim, sed molestie massa. In
      consequat felis nunc, sed blandit lacus ornare eu. Morbi lacinia elementum
      dui vitae ultricies. Nulla laoreet in velit non hendrerit. Proin in lorem
      metus. Proin venenatis sodales dolor nec rhoncus. Sed maximus tellus vel
      magna consectetur, et elementum magna fringilla. Donec in mollis ex.
      Quisque et semper nibh, at interdum urna. Quisque imperdiet enim mi, et
      varius arcu varius vitae. Nullam hendrerit efficitur eros, et faucibus
      lacus porttitor hendrerit. Ut vitae blandit mi. Morbi felis tellus, auctor
      tincidunt velit et, lacinia efficitur tellus.
    </p>
  </Description>
);

export default product;
