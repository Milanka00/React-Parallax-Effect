import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import './landingpage1.css';

const Land1 = () => {
    return ( 
        <React.Fragment>
        <Parallax pages={2} style={{ top: '0', left: '0' }} class='animation'>
        <ParallaxLayer offset={0} speed={0.29}>
          <div className='aniLayer' id='hill1'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className='aniLayer' id='hill2'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4}>
          <div className='aniLayer' id='hill3'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className='aniLayer' id='hill4'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className='aniLayer' id='hill5'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4}>
          <div className='aniLayer' id='tree'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <div className='aniLayer' id='plant'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.5}>
          <div className='aniLayer' id='leaf'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.25}>
          <div className='textblock'>
            <p>The React parallax effect is a captivating visual technique that adds depth and dynamism to webpages, captivating users with an engaging scrolling experience. By leveraging distinct layers of content, each moving at varying speeds as the user navigates the page, the parallax effect creates a multidimensional illusion. This design approach, often implemented using CSS and JavaScript animations, enhances the interactivity of websites and applications, making them more immersive and visually appealing.</p>
            <p>At the core of the React parallax effect lies the concept of depth perception. As users scroll, elements closer to the foreground move more quickly than those in the background, simulating the way objects appear to shift in the real world. This differential movement produces a tactile sense of depth, drawing users into the content and encouraging them to explore further. With libraries such as react-parallax and @react-spring/parallax, developers gain the tools to define the behavior of each layer, setting the stage for a choreographed visual experience</p>
            <p>While the React parallax effect introduces captivating aesthetics, it also necessitates a delicate balance between design and performance. The intricate animations and layered elements can potentially affect page load times and user device responsiveness. Thus, meticulous optimization becomes crucial to ensure a seamless browsing encounter. Developers must judiciously implement the parallax effect, considering the impact on overall performance and user satisfaction. When executed thoughtfully, the React parallax effect transforms static web content into an interactive narrative, offering users an enchanting journey through a multidimensional digital landscape.</p>

          </div>
        </ParallaxLayer>

        </Parallax>
            
        </React.Fragment>
     );
}
 
export default Land1;