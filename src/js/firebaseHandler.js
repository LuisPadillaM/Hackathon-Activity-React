/* ------------------- Firebase class Handler ------------------- */

const firebase = require("firebase");
// const reacFire = require("reactfire");

import { config } from "./firebaseCredentials";

export class firebaseHandler{

  constructor(formElement){
    firebase.initializeApp(config);
    this.order = {
      "lunes": 1,
      "martes": 2,
      "miercoles": 3,
      "jueves": 4,
      "viernes": 5
    }

    this.menuRef = firebase.database().ref("semana");
    this.output = {};
  }

  formatData(menu){
    const keys = Object.keys(menu);
    const values = [];

    keys.sort((a, b) =>{
      return this.order[a] > this.order[b];
    })
    keys.forEach((key) =>{
      values.push(JSON.parse(menu[key].replace(/'/g, "\"")));
    });

    this.output.days = keys;
    this.output.menus = values;
    return this.output;

  }

  init(){
    return new Promise((resolve, reject) =>
      this.menuRef.on("value", (snap) => {
        resolve(this.formatData(snap.val()));
      })
    );
  }
}
