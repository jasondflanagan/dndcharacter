import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
          <div style={{ backgroundImage: 'url(assets/parchment2.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
          <div className='container' style={{backgroundImage: 'url(assets/TavernArt.jpg)', height:'100vh', backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}>
            <h1 style={{textAlign:'center', color: "#eeec91"}}>Welcome To The DND Tavern</h1>
          </div>
          </div>
        );
      }
    };
    export default Home;