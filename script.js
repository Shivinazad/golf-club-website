let cursor = document.querySelector("#cursor")
let cursorblur = document.querySelector("#cursorblur")

document.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.x+"px"
     cursor.style.top = dets.y +"px"
});


document.addEventListener("mousemove", function(dets) {
    cursorblur.style.left = dets.x-150+"px"
     cursorblur.style.top = dets.y-150+"px"
});





gsap.to("#nav",{
    backgroundColor : "#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -1px",
        end: "top -10%",
        scrub:true
    }
})

gsap.to("#main",{
    backgroundColor :"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        start: "top 50%",
        end: "bottom 50%",
        scrub:true
    }
})

let all = document.querySelectorAll("#nav h4") //node
all.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        cursor.style.scale = 5
        cursor.style.backgroundColor = "transparent"
        cursor.style.border = "0.5px solid #fff"
    })

    element.addEventListener("mouseleave",function(){
        cursor.style.scale = 1
        cursor.style.backgroundColor = "#95C11E"
        cursor.style.border = "0px dotted #fff"
    })

})

gsap.from("#about-us img, #about-us-in", { //from means on loading it will start from here
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        start:"top 60%",
        end: "top 58%",
        scrub: 3
    }
});


gsap.from(".cards", { //from means on loading it will start from here
    y: 50,
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:".cards",
        scroller: "body",
        start:"top 60%",
        end: "top 58%",
        scrub: 3
    }
});



gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#green-div",
        scroller:"body",
        start:"top 55%",
        end: "top 45%",
        scrub:4
    }
})



gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end: "top 45%",
        scrub:4
    }
})


gsap.from("#page4 h1",{
    y:500,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end: "top 45%",
        scrub:4
    }
})