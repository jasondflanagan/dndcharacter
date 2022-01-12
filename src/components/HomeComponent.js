import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
          <div>
              <Parallax pages={4.5} style={{backgroundColor: '#000'}}>
                <ParallaxLayer
                offset={0}
                speed={0.1}
                >
                  <img
                  alt="tavern"
                  src="assets/TavernArt.jpg"
                  style={{ width: "100%"}}
                  />
                </ParallaxLayer>
                <ParallaxLayer
                offset={.7}
                speed={-.1}
                style={{height: "100px"}}
                >
                  <h1 style={{justifyContent: 'center', textAlign:'center', alignItems: 'center', color: "#eeec91"}}>Welcome To The DND Tavern</h1>
                </ParallaxLayer>
                <ParallaxLayer
                offset={1.5}
                speed={.2}
                style={{height: "100px"}}
                >
                  <h1 style={{justifyContent: 'center', textAlign:'center', alignItems: 'center', color: "#eeec91"}}>Grab Your Equipment</h1>
                </ParallaxLayer>
                <ParallaxLayer
                offset={1.9}
                speed={.7}
                >
                <img
                alt="dragons"
                src="assets/DiceCharacterSheet.webp"
                style={{ width: "100%"}}
                />
                </ParallaxLayer>
                <ParallaxLayer
                offset={2.6}
                speed={.2}
                style={{height: "100px"}}
                >
                  <h1 style={{justifyContent: 'center', textAlign:'center', alignItems: 'center', color: "#eeec91"}}>Gather Your Friends</h1>
                </ParallaxLayer>
                <ParallaxLayer
                offset={2.9}
                speed={.7}
                >
                <img
                alt="dragons"
                src="assets/PartyVsGreenDragon.jpg"
                style={{ width: "100%"}}
                />
                </ParallaxLayer>
                <ParallaxLayer
                offset={3.5}
                speed={.2}
                style={{height: "100px"}}
                >
                  <h1 style={{justifyContent: 'center', textAlign:'center', alignItems: 'center', color: "#eeec91"}}>And Prepare For Battle!</h1>
                </ParallaxLayer>
                <ParallaxLayer
                offset={3.9}
                speed={.7}
                >
                <img
                alt="dragons"
                src="assets/Tiamat.jpg"
                style={{ width: "100%"}}
                />
                </ParallaxLayer>
              </Parallax>
          </div>
        );
      }
    };
    export default Home;