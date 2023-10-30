var rect=document.querySelector("#center");
rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
        backgroundColor:"white",
    })
})
rect.addEventListener('mousemove', function(dets){
    // console.log(rect.getBoundingClientRect());
    // console.log("moved");
    var rectangleLocation = rect.getBoundingClientRect();
    // console.log(dets.clientX-rectLocation.left);
    var insiderectVal = dets.clientX-rectangleLocation.left;
    if(insiderectVal < rectangleLocation.width/2){
        // console.log("left");
        var redcolor=gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insiderectVal);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor}, 0, 0 )`,
            ease:Power4,
        });
    }
    else{
        // console.log("right");
        var bluecolor=gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,  0, 255, insiderectVal);
        gsap.to(rect,{
            backgroundColor:`rgb( 0 ,0, ${bluecolor})`,
            ease:Power4,
        });
    }
})
