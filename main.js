// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!



//change the variable below to other mouse properties and see how it renders feedback in the document rendering!
let mouseVAR = "click"

      var currentCOLOR =  document.querySelector("#current-color").style.background 


var colorsPal = document.querySelectorAll(".color")
//loop through all palette color divs and set the current-colro dive equal to the one that is clicked
for (let colors of  colorsPal){
colors.addEventListener(mouseVAR, () => {
      currentCOLOR = colors.style.background;
})}
  
// loop through all the cell divs and make color equal to current-color if clicked
var allCells = document.querySelectorAll(".cell");

for(let div of allCells ){
   div.addEventListener(mouseVAR, () => {
div.style.background=currentCOLOR
  }  )}

  for(let colorpicker of colorsPal ){
    colorpicker.addEventListener(mouseVAR, () => {
      document.querySelector("#current-color").style.background = colorpicker.style.background
    })
  }

// for(let i=0;i<=100;i++){
  
//   let selection = document.querySelector(`main:nth-child(${i})`)
// console.log(selection)
// }


// //returns list of every palette color
// for(let i=1;i<=8;i++){
// var palettecolor = document.querySelector(`#palette:nth-child(${i})`);
// return palettecolor
// }

// palettecolor.addEventListener('click', () => {
//       document.querySelector("#current-color").style.background = palettecolor.style.background;});




// //returns list of all divs which are the square boxes that form the 100 by 100 table
// for(let n=1;n<=100;n++){
// var divsmain = document.querySelector(`.cell:nth-child(${n})`);
// return divsmain
// }

// divsmain = document.querySelector("#current-color").style.background


  


// for (let div of divsmain) {
//   div.addEventListener("click", () => {
//     count++;
//     span.textContent = count;
//   });
// }





// const span = document.querySelector("h1 span");
// const paragraph = document.querySelector("p");
// paragraph.addEventListener("click", () => {
//   count++;
//   span.textContent = count;
// });

// //black
// var black =document.querySelector('#palette.color:nth-child(1)')
// //red
// var red = document.querySelector('#palette.color:nth-child(2)')
// //orange
// var orange =document.querySelector('#palette.color:nth-child(3)')
// //yellow
// var yellow = document.querySelector('#palette.color:nth-child(4)')
// //green
// var green = document.querySelector('#palette.color:nth-child(5)')
// var blue = document.querySelector('#palette.color:nth-child(6)')
// //purple
// var purple = document.querySelector('#palette.color:nth-child(7)')
// var white = document.querySelector('#palette.color:nth-child(8)')
//----------------------------
// var children = document.querySelector('#palette').children;

// var childrenPIXELS = document.querySelector('main');

//-----------------------------

// for (var i = 0; i < childrenPIXELS.length; i++) { 
//    childrenPIXELS[i].addEventListener(click, function(){



//     if(red.onclick===true){
//       childrenPIXELS[i].style.background = red.style.background
//     }
// red.addEventListener(click,function(){
// childrenPIXELS[i].style.background = red.style.background
// })

// black.addEventListener(click,function(){
//   childrenPixels[i].style.background = black.style.background
//   })
//   orange.addEventListener(click,function(){
//     childrenPixels[i].style.background = orange.style.background
//     })
//     yellow.addEventListener(click,function(){
//       childrenPixels[i].style.background = red.style.background
//       })
//       blue.addEventListener(click,function(){
//         childrenPixels[i].style.background = yellow.style.background
//         })
//         white.addEventListener(click,function(){
//           childrenPixels[i].style.background = white.style.background
//           })
//           purple.addEventListener(click,function(){
//             childrenPixels[i].style.background = purple.style.background
//             })
//             green.addEventListener(click,function(){
//               childrenPixels[i].style.background = green.style.background
//               })

  // }
  //  )}
  










//TO Choose a Color from palette

// var children = document.querySelector('#palette').children;


// var childrenPIXELS = document.querySelector('main').children;



// // //when click on specific box, slected box is chosen and will display
//     //loop through all colors in palette
// for (var i = 0; i < childrenPIXELS.length; i++) { 
//   childrenPIXELS[i].addEventListener(click, function(){
//     //loop through 100 table elements
//     for (var i = 0; i < children.length; i++) { 
//             var selectit = children[i].style.background
//     }
    
//     document.querySelector('main div.cell').style.background = selectit 
//     //  document.querySelector("div.cell")
//   })

// }












// //   var backgroundColor = document.querySelector("#current-color").style.background
// // children[i].onclick = function(){
// //   backgroundColor =

// // }



// // //To change color in table

// // for (var i = 0; i < childrenPIXELS.length; i++) { 
// // childrenPIXELS[i].onclick = document.querySelector("#current-color")

// // }


// // document.querySelector("div.cell").onclick = changeBOXcolor();




