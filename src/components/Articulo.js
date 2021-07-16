import { useState } from 'react';
import { Modal, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, ModalHeader, ModalBody } from 'reactstrap';
import './Css.css';
  
const Articulo = ({ title, description, urlToImage, content }) => {
    const [modalAbierto, setModalAbierto] = useState(false);

    const toggleModal = () => setModalAbierto(!modalAbierto);

    const modalStyles={
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }

      //<CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>

    return(
        <>
            <div className="">
                <Card>
                    <CardImg top width="100%" src={urlToImage} alt={title} />
                    <CardBody >
                        <CardTitle tag="h5">{ title }</CardTitle>
                        
                        <CardText>{ description }</CardText>
                        <div class="botonNoticia">
                        <Button onClick={toggleModal} >Ver noticia completa</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="modal">
                <Modal isOpen={modalAbierto} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal} className="titlemodal">{ title }</ModalHeader>
                    <div class="modaldescription">{description}</div>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={urlToImage} alt={title} width="100%" />
                            </div>
                            <div className="col-md-6">
                                <p>{ content }</p>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}

export default Articulo;