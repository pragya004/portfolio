// var button1= document.querySelector('#button');
// var slider1=document.querySelector('#slider');
// var hello = document.querySelector('#hello');
// var text = document.querySelector('#text');


// button1.addEventListener('click',slidein);

// function slidein(e)
// {
// 	button1.style.display='none';
// 	console.log('here');
// 	  var pos = -40;
// 	  var id = setInterval(frame, 20);
// 	  function frame() 
// 	  {
// 	    if (pos == 0) 
// 	    {
// 	      clearInterval(id);
// 	    } 
// 	    else 
// 	    {
// 	      pos++;
// 	      slider1.style.left= pos + '%';
// 	    }
// 	  }
// 	slider1.style.backgroundColor='#ffcfc2';
// 	hello. style. display='none';
// 	text.style.display='none';
// }


//SWIPER

var swiper = new Swiper('.swiper-container', {
      // Optional parameters
  loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer:true,
      observeParents:true,
    });


// MODAL 0----------------------------------------------------------------------------------------------------------
var modal0=document.getElementById("modal0");
var closeModalButton0 = document.getElementById("back-button0");
var openModalButton = document.querySelectorAll(".view");
openModalButton[0].addEventListener("click",openModal0);
closeModalButton0.addEventListener("click",closeModal0);
function openModal0()
{
    modal0.style.display='block';
}
function closeModal0()
{
    modal0.style.display='none';
}



// MODAL 1----------------------------------------------------------------------------------------------------------
var modal1=document.getElementById("modal1");
var closeModalButton1 = document.getElementById("back-button1");
var openModalButton = document.querySelectorAll(".view");
openModalButton[1].addEventListener("click",openModal1);
closeModalButton1.addEventListener("click",closeModal1);
function openModal1()
{
    modal1.style.display='block';
}
function closeModal1()
{
    modal1.style.display='none';
}



// MODAL 2----------------------------------------------------------------------------------------------------------
var modal2=document.getElementById("modal2");
var closeModalButton2 = document.getElementById("back-button2");
var openModalButton = document.querySelectorAll(".view");
openModalButton[2].addEventListener("click",openModal2);
closeModalButton2.addEventListener("click",closeModal2);
function openModal2()
{
    modal2.style.display='block';
}
function closeModal2()
{
    modal2.style.display='none';
}



// MODAL 3----------------------------------------------------------------------------------------------------------
var modal3=document.getElementById("modal3");
var closeModalButton3 = document.getElementById("back-button3");
var openModalButton = document.querySelectorAll(".view");
openModalButton[3].addEventListener("click",openModal3);
closeModalButton3.addEventListener("click",closeModal3);
function openModal3()
{
    modal3.style.display='block';
}
function closeModal3()
{
    modal3.style.display='none';
}



// MODAL 4----------------------------------------------------------------------------------------------------------
var modal4=document.getElementById("modal4");
var closeModalButton4 = document.getElementById("back-button4");
var openModalButton = document.querySelectorAll(".view");
openModalButton[4].addEventListener("click",openModal4);
closeModalButton4.addEventListener("click",closeModal4);
function openModal4()
{
    modal4.style.display='block';
}
function closeModal4()
{
    modal4.style.display='none';
}



// MODAL 5----------------------------------------------------------------------------------------------------------
var modal5=document.getElementById("modal5");
var closeModalButton5 = document.getElementById("back-button5");
var openModalButton = document.querySelectorAll(".view");
openModalButton[5].addEventListener("click",openModal5);
closeModalButton5.addEventListener("click",closeModal5);
function openModal5()
{
    modal5.style.display='block';
}
function closeModal5()
{
    modal5.style.display='none';
}


// MODAL 6----------------------------------------------------------------------------------------------------------
var modal6=document.getElementById("modal6");
var closeModalButton6 = document.getElementById("back-button6");
var openModalButton = document.querySelectorAll(".view");
openModalButton[6].addEventListener("click",openModal6);
closeModalButton6.addEventListener("click",closeModal6);
function openModal6()
{
    modal6.style.display='block';
}
function closeModal6()
{
    modal6.style.display='none';
}


