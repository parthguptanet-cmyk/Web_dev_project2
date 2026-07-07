Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".ha",{
    videos : ["https://media.gettyimages.com/id/2151261126/video/an-adult-hispanic-woman-with-glasses-focused-on-coding-on-dual-monitors-working-late-at-night.mp4?s=mp4-640x640-gi&k=20&c=hwDWh7IY1zwZB_nFJaFj_tpABAariXmz-wgyTWtsQoU=","https://media.gettyimages.com/id/2154818826/video/hyperlapse-top-view-smart-city-wireless-network-signal-data-transmission-high-speed-and.mp4?s=mp4-640x640-gi&k=20&c=mBxvZ8PKi5KT53m0OzrPILI2wiHkqDz5qjt1pvV4zF8=","https://media.gettyimages.com/id/1478138019/video/4k-footage-time-lapse-of-crowded-business-people-and-passenger-walking-in-rush-hour-morning.mp4?s=mp4-640x640-gi&k=20&c=6I3iBKE_YoKOvoXMaN6XWDCNnT5Ii3DXgr__qyNCrlE="]
});


gsap.to(".fleftlm",{
    scrollTrigger:{
        trigger: "#fimages",
        pin: true,
        start : "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1

    },
   y: "-300%",
   ease: Power1
})

let sections = document.querySelectorAll(".fleftlm");
Shery.imageEffect(".images",{
    style:3,
    //config: {onMouse: {value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section, index){
            ScrollTrigger.create({
                  trigger: section,
                  start: "top top",
                  scrub: 1,
                  onUpdate: function (prog){
                    setScroll(prog.progress + index)
                  }

            })
        })
    }
});
Shery.imageEffect(".okimg",{
    style:2
    
})

Shery.textAnimate(".tag");
Shery.textAnimate(".huhu" , {

  style: 2,
  delay:-.02,
  y: 10,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});