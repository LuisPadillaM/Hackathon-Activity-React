import {Alert, Button } from "react-bootstrap";

const AlertDismissable = React.createClass({
  getInitialState() {
    return {
      alertVisible: false
    };
  },

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="success" className="fixedTop alertModal" onDismiss={this.handleAlertDismiss}>
          <h4><span className="glyphicon glyphicon-ok"></span> <strong>Enviado</strong> Gracias por tu pedido!</h4>
        </Alert>
      );
    }
    return null;
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
});
export default AlertDismissable;
