// BASIC GSAP

// gsap.to("#box",{
//   x:1000,
//   duration:2,
//   delay:1,
//   rotate:360,
//   backgroundColor:"pink",
//   borderRadius:"50%",
//   scale:0.7
// })

// STAGGER 

// gsap.from("h1",{
//   opacity:0,
//   duration:3,
//   y:50,
//   delay:1,
//   color:"rgb(224, 182, 118)",
//   stagger:-1, //-1 say ulta ho jay ga last wala pehly chalay ga
// })

// REPEAT AND YOYO 

// gsap.from("#box1",{
//   x:100,
//   duration:3,
//   delay:1,
//   rotate:20,
//   repeat:2, // infinite
//   yoyo:true
// })


// GSAP TIMELINE & HOW TO CONTROL
// jab apny ko koi element aik element ki animation kay bad khatam hoga to what will happen is that hmy delay or duration ko add kar kay jo time banta h usy apny next element kay delay mai dalna hoga so that hm us element ko pehly kay bad chala sakin 

// var tl = gsap.timeline();
// tl.to("#cont1",{
//  x:500,
//  rotate:360,
//  duration:1.5,
//  delay:1
// })
// tl.to("#cont2",{
//   x:500,
//   rotate:360,
//   duration:1.5,
//  })
//  tl.to("#cont3",{
//   x:500,
//   rotate:360,
//   duration:1.5,
//  })



// NAV Making

// var tl = gsap.timeline();
// tl.from("h2",{
//   y:-40,
//   opacity:0,
//   duration:1,
//   delay:0.5
// })
 
// tl.from("h4",{
//   y:-40,
//   opacity:0,
//   duration:1,
//   stagger:0.4
// })
// tl.from("h1",{
//   y:-40,
//   opacity:0,
//   duration:2,
//   scale:0.4
// })

gsap.from("#page1 #box",{
  scale:0,
  delay:1,
  duration:2,
  rotate:360
})

gsap.from("#page2 #box",{
  scale:0,
  delay:1,
  duration:2,
  rotate:360,
  // scrollTrigger:"#page2 #box"
  scrollTrigger:{
    trigger:"#page2 #box",
    scroller:"body",
    markers:true
  }

})
// Mai yeh kaisy smjhon kay jab user doosray page p aay to he meri animation start ho. Aisay mai hm scroll ki base p animation ko rakhty hain 
