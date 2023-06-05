import Header from "../../components/Header/Header";
import CardContainer from "../../components/Cards/CardContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/apiActions";
import { useLoadingStates } from "../../constants/loadingStates";

const Home = () => {
  const [artGallery, setArtGallery] = useState([]);
  const { validations, loading } = useLoadingStates();

  useEffect(() => {
    const getData = async () => {
      validations.startLoad();
      const data = await fetchData(validations, "GET");
      setArtGallery(data);
    };
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        "loading" //Todo: import Loading component (Loader)
      ) : (
        <>
          <Header />
          <Container fluid className="mt-5">
            <Row>
              {artGallery?.map((art) => (
                <Col key={art.id}>
                  <CardContainer
                    title={art.title}
                    description={art.description}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default Home;
