const container = document.querySelector(".container")
const element = document.querySelector(".element")
const sliderSize = document.querySelector(".sliderSize");
const sliderRadius = document.querySelector(".sliderRadius");
const sliderOpacity = document.querySelector(".sliderOpacity");
const sliderContrast = document.querySelector(".sliderContrast");
const sliderBlur = document.querySelector(".sliderBlur");
const sliderSturation = document.querySelector(".sliderSturation");
const color = document.querySelector("input[type=color]");
const square = document.querySelector(".square");

let hex = "#000000";
let alpha = 0.3;
let initColor = `rgba(0, 0, 0, ${alpha})`;
let size;
let radius;
let blur1;
let constrast;
let sturation;
//-----------------------------------------------Creacion del element-----------------------------------------------
sliderOpacity.addEventListener("input", (e) => {
    alpha = (e.target.value)/100; 
    let red = parseInt(hex[1]+hex[2],16);
    let green = parseInt(hex[3]+hex[4],16);
    let blue = parseInt(hex[5]+hex[6],16);
    initColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    element.innerHTML = `<div style = "background: ${initColor}; height: ${size}; width: ${size}; border-radius: ${radius}; backdrop-filter: blur(${blur1}) contrast(${constrast}) saturate(${sturation})"></div>`;
});
color.addEventListener('input', (e) => {
    hex = e.target.value; 
    var red = parseInt(hex[1]+hex[2],16);
    var green = parseInt(hex[3]+hex[4],16);
    var blue = parseInt(hex[5]+hex[6],16);
    initColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    element.innerHTML = `<div style = "background: ${initColor}; height: ${size}; width: ${size}; border-radius: ${radius}; backdrop-filter: blur(${blur1}) contrast(${constrast}) saturate(${sturation})"></div>`;
});
sliderRadius.addEventListener("input", (e) => {
    radius = e.target.value + "%"; 
    element.innerHTML = `<div style = "background: ${initColor}; height: ${size}; width: ${size}; border-radius: ${radius}; backdrop-filter: blur(${blur1}) contrast(${constrast}) saturate(${sturation})"></div>`;
});
sliderSize.addEventListener("input", (e) => {
    size = e.target.value + "px"; 
    element.innerHTML = `<div style = "background: ${initColor}; height: ${size}; width: ${size}; border-radius: ${radius}; backdrop-filter: blur(${blur1}) contrast(${constrast}) saturate(${sturation})"></div>`;
});
sliderBlur.addEventListener("input", (e) => {
    blur1 = e.target.value + "px"; 
    let red = parseInt(hex[1]+hex[2],16);
    let green = parseInt(hex[3]+hex[4],16);
    let blue = parseInt(hex[5]+hex[6],16);
    initColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    element.innerHTML = `<div style = "background: ${initColor}; height: ${size}; width: ${size}; border-radius: ${radius}; backdrop-filter: blur(${blur1}) contrast(${constrast}) saturate(${sturation})"></div>`;
    console.log(blur1);
});
sliderContrast.addEventListener("input", (e) => {
    constrast = e.target.value + "%"; 
    element.innerHTML = `<div style = "background: ${initColor}; height: ${size}; width: ${size}; border-radius: ${radius}; backdrop-filter: blur(${blur1}) contrast(${constrast}) saturate(${sturation})"></div>`;
});
sliderSturation.addEventListener("input", (e) => {
    sturation = e.target.value + "%"; 
    element.innerHTML = `<div style = "background: ${initColor}; height: ${size}; width: ${size}; border-radius: ${radius}; backdrop-filter: blur(${blur1}) contrast(${constrast}) saturate(${sturation})"></div>`;
});







