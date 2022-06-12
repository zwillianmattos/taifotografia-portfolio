import React from "react";
import Menu from "../../components/menu";
import about from "../../config/about.json";
import contact from "../../config/contact.json";

import Bootstrap, {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  Form,
} from "bootstrap-4-react";
export default function Contact() {
  return (
    <>
      <Menu />
      <section className="about-section">
        <div className="about-warp">
          <div className="about-left">
            <div className="about-img">
              <img src={about.userPhoto} alt="" />
            </div>
            <div className="profile-text text-white">
              <p>E-mail: {contact.email}</p>
              <p>Telefone: {contact.phone}</p>
              <p>Endereço: {contact.address}</p>
            </div>
          </div>
          <div className="about-right">
            <div className="about-text">
              <h2>Chegou sua vez</h2>
              <p>Deixe seus dados que entrarei em contato</p>
              <Form >
                <InputGroup mb="3">
                  <Form.Input type="text" placeholder="Nome *" />
                </InputGroup>
                <InputGroup mb="3">
                  <Form.Input type="text" placeholder="E-mail *" />
                </InputGroup>
                <InputGroup mb="3">
                  <Form.Input type="text" placeholder="Telefone *" />
                </InputGroup>
                <InputGroup mb="3">
                  <Form.Textarea type="text" placeholder="Mensagem *" />
                </InputGroup>
                <InputGroup mb="3">
                  <Form.Input type="text" placeholder="Cidade" />
                </InputGroup>
                <Button className="" type="submit">Enviar</Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
