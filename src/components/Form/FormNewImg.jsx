import { useState } from 'react'
import { redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import './FormNewImg.css'


const FormNewImg = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
    const workArt = {
      titulo: e.target[0].value,
      artista: e.target[1].value,
      anio: e.target[2].value,
      medio: e.target[3].value,
      dimenciones: e.target[4].value,
      precio: e.target[5].value,
      imagen: e.target[6].value
    }
    if (workArt.titulo.trim() === '' || workArt.artista.trim() === '' || workArt.anio.trim() === '' || workArt.medio.trim() === '' || workArt.dimenciones.trim() === '' || workArt.precio.trim() === '' || workArt.imagen.trim() === '') {
      setValidated(true)
      return
    }
    fetch('http://localhost:3001/api/obras', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workArt)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))


    if (data.status === 200) {
      return redirect('/')

    }
    setValidated(false)

  }
  const returnHome = (e) => {

    return redirect('/')
  }
  return (
    <>
      <div className="container">
        <Button variant="primary" type="button" className="button-return" onClick={returnHome} >
          Volver
        </Button>
        <Form onSubmit={handleSubmit}   >
          {validated &&
            <Alert variant="danger" className="alert-danger">
              <Alert.Heading>Todos los campos son obligatorios</Alert.Heading>
            </Alert>

          }
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Titulo</Form.Label>
            <Form.Control type="text" placeholder="Eje: 'Casa amigo'" />
            <Form.Text className="text-muted">
              Titulo de la imagen
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicArt">
            <Form.Label>Artista</Form.Label>
            <Form.Control type="text"
              placeholder="
              Eje: 'Juan Perez'" />
            <Form.Text className="text-muted">
              Descripción de la imagen
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicYear">
            <Form.Label>Año</Form.Label>
            <Form.Control type="text"
              placeholder="
              Eje: '2021'" />
            <Form.Text className="text-muted">
              Fecha de la imagen
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicVia">
            <Form.Label>Medio</Form.Label>
            <Form.Control type="text"
              placeholder="
              Eje: 'Pintura'"
            />
            <Form.Text className="text-muted">
              Medio de la imagen
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicSize">
            <Form.Label>Dimenciones</Form.Label>
            <Form.Control type="text"
              placeholder="
              Eje: '20cm x 20cm '"
            />
            <Form.Text className="text-muted">
              Dimenciones de la imagen
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" placeholder=" Eje: '1000'" />
            <Form.Text className="text-muted">
              Precio de la imagen
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicImg">
            <Form.Label>Imagen </Form.Label>
            <Form.Control type="file"/>
            <Form.Text className="text-muted">
              Selecciona la imagen
            </Form.Text>
          </Form.Group>
          <div className="container-button-send" >
            <Button variant="success"
              style={{ width: "50%" }}
              type="submit">
              Cargar Obra
            </Button>
          </div>
        </Form>
      </div>

    </>
  )
}

export default FormNewImg