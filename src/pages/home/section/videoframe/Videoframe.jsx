import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import video from "./videoportofolio.mp4";
import "./videoframe.scss";

const Videoframe = () => {
  const introRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const intro = introRef.current;
    const video = videoRef.current;

    //SCROLLMAGIC
    const controller = new ScrollMagic.Controller();

    // Scene for pinning intro section
    new ScrollMagic.Scene({
      duration: 4000,
      triggerElement: intro,
      triggerHook: 0
    })
      .setPin(intro)
      .addTo(controller);

    // Video Animation
    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;

    const updateScrollPos = e => {
      scrollpos = e.scrollPos / 1000;
    };

    const updateVideoPosition = () => {
      delay += (scrollpos - delay) * accelamount;
      video.currentTime = delay;
      requestAnimationFrame(updateVideoPosition);
    };

    new ScrollMagic.Scene({
      duration: 9000,
      triggerElement: intro,
      triggerHook: 0
    })
      .on("update", updateScrollPos)
      .addTo(controller);

    requestAnimationFrame(updateVideoPosition);

    return () => {
      controller.destroy(true);
    };
  }, []);

  return (
    <>
      <Container fluid className="intro" ref={introRef}>
        <video
          ref={videoRef}
          className="video h-100 w-100"
          src={video}

        />
      </Container>
   
    </>
  );
};

export default Videoframe;
