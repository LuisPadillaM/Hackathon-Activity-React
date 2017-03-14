import { Modal, Button } from "react-bootstrap";
import ModalForm from "./ModalForm";
import AlertDismissable from "./Alert";

class ModalInstance extends React.Component{

  constructor(props){
    super(props);
    this.state = { showModal: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false }); // state can only be updated with setState, it call render method
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {

    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Enviar Opciones
        </Button>
        <AlertDismissable />

        <Modal id="submitModal" show={this.state.showModal} onHide={this.close} onEntered={ () => $("#name").focus() } >
          <Modal.Header closeButton>
            <Modal.Title id="myModalLabel">Ingrese sus datos personales</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalForm onModal={ this.close } onSelect= {this.props.onSelect} onSubmit={this.props.onSubmit} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button type="submit" form='formMenu' bsStyle="primary">Enviar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalInstance;
