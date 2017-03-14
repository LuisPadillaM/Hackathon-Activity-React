"use strict";

import React from "react";
import { render } from "react-dom";
import Wrapper from "./components/Wrapper";

window.React = React;
require("../scss/main.scss");


import * as homeModule from "./home";

const Data = {
  headerOptions: {
    optionRight: ["Menu Semanal", "Desayunos", "Postres", "Sugerencias"],
    brandImage: "./img/logo/Hangar_logo_black.png"
  },
  formDays: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
  bannerImage: "./img/banner/chef_banner.png",
  loaderImg: "./img/logo/loadingGif.gif",
  footerImgs: ["./img/banner/naranjas.png", "./img/banner/sandia.png"]
}

$(function() {

  render(<Wrapper data={Data} />, document.getElementById("react-container"));
  // render(<Wrapper data={Data} />, document.getElementById("react-container"));
  homeModule.loaded();
  // homeModule.isDesktop();
});

