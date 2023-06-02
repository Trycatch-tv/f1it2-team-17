import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Detail.css";
const Detail = () => {
  const [art, setArt] = useState([]);

  const img_src = "https://media.admagazine.com/photos/618a6acbcc7069ed5077ca7f/master/w_1600%2Cc_limit/68704.jpg";

  const getArt = () => {
    fetch("https://api.artic.edu/api/v1/artworks/129884")
      .then((response) => response.json())
      .then((data) => {
        setArt(data);
      });
  };


  useEffect(() => {
    getArt();
  }, []);


  return (

    <>
      <div className="container">
        <Card >
          <Card.Header>Titulo de la obra</Card.Header>
          <Card.Body>

            <div className="container-card">
              <div>
                  <a href="https://media.admagazine.com/photos/618a6acbcc7069ed5077ca7f/master/w_1600%2Cc_limit/68704.jpg">
                    <img src={img_src} alt="imagen galeria"
                      className="img"
                    />
                  </a>
              </div>
              <div>
                <Card.Title className="name-artist"
                >Nombre Artista</Card.Title>
                <Card.Text >
                  <p>
                    <b>Descripción</b>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptas? Voluptatibus quaerat similique aliquam ipsa sed mollitia error fuga recusandae! Autem tempora itaque quasi iure, omnis eveniet perspiciatis dolorum! Debitis.
                  </p>

                  <p>
                    <b>Proceso de elavoración</b>
                  </p>

                  <p>
                    <ul>
                      <li>
                        Acriloco sobre tela

                      </li>
                      <li>
                        Oleo sobre tela
                        </li>
                      
                        <li>
                            Cera
                        </li>
                    </ul>
                  </p>
                  <p   >
                    <b>Medidas</b>
                  </p>
                  <p>
                    190 x 190 cm
                  </p>


                </Card.Text>

                
                <Button variant="primary">Comprar </Button>
             
              </div>
            </div>
          </Card.Body>

        </Card>
      </div>

    </>
  );

};

export default Detail;
