function page1animation(){
    var tl = gsap.timeline()

tl.from("nav h3",{
    y: -30,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.3,
})
tl.from(".container h1",{
    x:-100,
    opacity:0,
    duration:1,  
    stagger:0.3,
})

// t1.from(".container h4",{
//     y:-100,
//     opacity:0,
//     duration:1,
// })

tl.from(".container h4",{
    x:-100,
    opacity:0,
    duration:2,
    stagger:0.3,
})

tl.from("#about span",{
    // y:-100,
    opacity:0,
    // delay:1,
    stagger:0.3,
    // duration:1.5,
    scrollTrigger:{
        trigger:"#about span",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 0",
        scrub:2
        // end:" 0",
        
    }
})

tl.from("h4",{
    y:-10,
    opacity:0,
    duration:3,
    delay:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#about h4 ",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 0",
        scrub:true
    }

})


// tl.from("button",{
//     y:-10,
//     opacity:0,
//     duration:3,
//     delay:1,
//     stagger:0.3,
//     scrollTrigger:{
//         trigger:"#about button ",
//         scroller:"body",
//         // markers:true,
//         start:"top 30%",
//         end:"top 0",
//         scrub:true
//     }

// })


tl.from("#edu span",{
    y:-10,
    opacity:0,
    duration:3,
    delay:1,
    // stagger:0.3,
    scrollTrigger:{
        trigger:"#edu span ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:true
    }

})


tl.from("#edu .text-box",{
    y:-10,
    opacity:0,
    // duration:3,
    
    stagger:0.3,
    scrollTrigger:{
        trigger:"#edu .text-box ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:true
    }

})

tl.from("#pro span",{
    y:-10,
    opacity:0,
    duration:3,
    // delay:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#pro span ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:true
    }

})


tl.from(" .skillset",{
    y:-10,
    opacity:0,
    duration:3,
    // delay:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".skillset ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:true
    }

})

tl.from(" .timeline",{
    y:-10,
    opacity:0,
    duration:3,
    // delay:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".timeline ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:true
    }

})

tl.from("#skills span",{
    y:-10,
    opacity:0,
    duration:3,
    // delay:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#skills span ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:true
    }

})


tl.from(" .skill",{
    y:-10,
    opacity:0,
    duration:3,
    // delay:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".skill ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:true
    }

})


tl.from(" .contact",{
    y:-10,
    opacity:0,
    duration:3,
    // delay:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".contact ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:true
    }

})



tl.from(".socials",{
    opacity:0,
    duration:1,  
    stagger:0.3,
})



















}


page1animation()


// var tl2 = gsap.timeline()

// tl2.from("#about h4"{
//     y:-100,
//     opacity:0,
//     duration:1,

// })
