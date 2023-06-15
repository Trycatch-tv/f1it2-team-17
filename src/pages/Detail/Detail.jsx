import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, Link, redirect, useNavigate } from "react-router-dom";

import "./Detail.css";
const Detail = () => {
  const [art, setArt] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();


  //regresar a la pagina anterior


  const img_src = "https://media.admagazine.com/photos/618a6acbcc7069ed5077ca7f/master/w_1600%2Cc_limit/68704.jpg";

  const getArt = () => {
    fetch("https://api.artic.edu/api/v1/artworks/129884")
      .then((response) => response.json())
      .then((data) => {
        setArt(data);
      });
  };
  const goBack = () => {
    navigate('/');

  }

  useEffect(() => {
    getArt();
  }, []);


  return (

    <>
      <Button
        variant="outline-primary"
        onClick={() => {
          goBack();
        }}
        className="btn-regresar"
      >Regresar</Button>
      <div className="container">

        <Card >

          <Card.Header>Titulo de la obra</Card.Header>

          <Card.Body>

            <div className="container-card">
              <div>
                <Link to="https://media.admagazine.com/photos/618a6acbcc7069ed5077ca7f/master/w_1600%2Cc_limit/68704.jpg">
                  <img src={img_src} alt="imagen galeria"
                    className="img"
                  />
                </Link>
              </div>
              <div>
                <Card.Title className="name-artist"><h2>Nombre Artista</h2>
                </Card.Title>
                <h3>
                  <b>Descripción</b>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptas? Voluptatibus quaerat similique aliquam ipsa sed mollitia error fuga recusandae! Autem tempora itaque quasi iure, omnis eveniet perspiciatis dolorum! Debitis.
                </p>

                <p> <b>Proceso de elavoración</b> </p>
                <ul>
                  <li>
                    <p>Acriloco sobre tela</p>
                  </li>
                  <li>

                    <p> Oleo sobre tela</p>
                  </li>

                  <li>
                    <p> Cera</p>

                  </li>
                </ul>

                <p  >
                  <b>Medidas</b>
                </p>
                <p>
                  190 x 190 cm
                </p>
                <Button variant="primary">Comprar </Button>
                <Button variant="success" style={{
                  marginLeft: "10px"
                }}>Editar</Button>

              </div>
            </div>
          </Card.Body>

        </Card>
      </div>

    </>
  );

};

export default Detail;
