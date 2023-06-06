import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Detail.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/apiActions";
import { useLoadingStates } from "../../constants/loadingStates";

const Detail = () => {
  const navigate = useNavigate();
  // Get the userId param from the URL.
  let { galleryId } = useParams();
  const { validations, loading } = useLoadingStates();
  const [art, setArt] = useState({});
  useEffect(() => {
    const getDataById = async () => {
      validations.startLoad();
      const data = await fetchData(validations, "GET_ID", galleryId);
      setArt(data);
    };
    getDataById();
    console.log(art);
    return () => {
      setArt({});
    };
  }, [galleryId]);

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <>
          <Button
            variant="outline-primary"
            onClick={() => {
              navigate("/home");
            }}
            className="btn-regresar"
          >
            Regresar
          </Button>
          <div className="container">
            <Card>
              <Card.Header>{art.title}</Card.Header>

              <Card.Body>
                <div className="container-card">
                  <div>
                    <Link to="https://media.admagazine.com/photos/618a6acbcc7069ed5077ca7f/master/w_1600%2Cc_limit/68704.jpg">
                      <img
                        src={
                          "https://media.admagazine.com/photos/618a6acbcc7069ed5077ca7f/master/w_1600%2Cc_limit/68704.jpg"
                        }
                        alt="imagen galeria"
                        className="img"
                      />
                    </Link>
                  </div>
                  <div>
                    <Card.Title className="name-artist">
                      <h2>{art.artist}</h2>
                    </Card.Title>
                    <h3>
                      <b>Descripción</b>
                    </h3>
                    <p>{art.description}</p>

                    <p>
                      {" "}
                      <b>Año de creación:</b>{" "}
                    </p>
                    <p>{art.year}</p>
                    <p>
                      <b>Medidas:</b>
                    </p>
                    <p>{art.dimensions}</p>
                    <Button variant="primary">Comprar </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
