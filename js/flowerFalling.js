var falling = true;

TweenLite.set("#container",{perspective:600})

var total = 10;
var container = document.querySelector(".content"),	w = 100 , h = 100 ;
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   var Div2 = document.createElement('div');
   var Div3 = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-1000,-150),z:R(-1000,400),xPercent:"-50%",yPercent:"-50%"});
   TweenLite.set(Div2,{attr:{class:'dot2'},x:R(0,w),y:R(-1000,-150),z:R(-1000,400),xPercent:"-50%",yPercent:"-50%"});
   TweenLite.set(Div3,{attr:{class:'dot3'},x:R(0,w),y:R(-1000,-150),z:R(-1000,400),xPercent:"-50%",yPercent:"-50%"});
   container.appendChild(Div);
   container.appendChild(Div2);
   container.appendChild(Div3);
   animm(Div);
   animm2(Div2);
   animm3(Div3);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h - 200,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };
  function animm2(elm){   
   TweenMax.to(elm,R(6,15),{y:h - 200,ease:Linear.easeNone,repeat:-1,delay:-25});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };
  function animm3(elm){   
   TweenMax.to(elm,R(6,15),{y:h - 200,ease:Linear.easeNone,repeat:-1,delay:-5});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};