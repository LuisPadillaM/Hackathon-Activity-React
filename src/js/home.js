"use strict";

const bodyEl = $("body");
const formEl = $("#formMenu");
const smallBP = 767;
const $window = $(window);
const modal = $("#submitModal");
const alert = $(".alertModal")
let labels = $(".checkbox");
let dayContainer;
const dayHeader = $(".day_box>h3");


const isMob = () => {
  const w = $window.width();
  return (w <= smallBP) ? true : false;
}

export const isDesktop = () => { // quizas hacer un prepend o algo un loader

  dayContainer = $(".day_box>div");
  if (isMob){
    getLargerOption();
    dayContainer.addClass("collapse");
    dayHeader.attr("data-toggle", "collapse");
    dayHeader.addClass("mb-0 collapsed");
  } else {
    resetLargerOption();
    dayContainer.removeClass("collapse");
    dayHeader.removeAttr("data-toggle");
    dayHeader.removeClass("mb-0");
  }

};


export function loaded(){
  labels = $(".checkbox");
}

$.fn.equalizeWidth = function(){

  return $(this).map(function(i, e){

    return $(e).outerWidth(true);

  }).get().reduce(function(max, cur){
    return Math.max(max, cur);
  });

};



function resetLargerOption(){
  dayContainer.removeAttr("style");
  labels.width("auto");
}

function getLargerOption(){
  console.log(labels.children("label").length);
  // labels.children("label").equalizeWidth();
  // const maxLabel = labels.children("label").equalizeWidth();
  // return maxLabel !== 0 ? labels.width(maxLabel) : false;
}

// // // +++++Listeners+++



// $window.resize(isDesktop);
