import {Button } from "react-bootstrap";
import Modal from "./Modal";

const Footer = ({Images, onSelect, onSubmit}) =>
  <div className="row footer">
    <div className="col-sm-4 hidden-xs text-right">
      <img className="naranjas" src={Images[0]} />
    </div>
    <div className="col-sm-4 text-center ">
      <Modal onSelect = {onSelect} onSubmit={onSubmit} />
    </div>
    <div className="col-sm-4">
      <img src={Images[1]}/>
    </div>
  </div>

export default Footer;
