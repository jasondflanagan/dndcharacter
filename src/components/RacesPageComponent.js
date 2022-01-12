import React, { Component } from 'react';
import { Card, Tab, Tabs, Image } from 'react-bootstrap';
import { RACES } from '../shared/RacesList';

class RacesPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            races: RACES
        }
    }

    render() {
        const raceslist = this.state.races.map(race => {
            return (
                <Card key={race.id} className="col-4">
                    <Card.Title>{race.name}</Card.Title>
<<<<<<< HEAD
                    <Tabs alignItems="center" defaultActiveKey="image" color='black'>
                        <Tab alignItems="center" eventKey="image" title='Image' backgroundColor='transparent'>
=======
                    <Tabs defaultActiveKey="image">
                        <Tab eventKey="image" title='Image' backgroundColor='transparent'>
>>>>>>> 450a3923aade71e8c6295db4c74d9f518380890f
                            <Image fluid src={race.image} alt={race.name}/>
                        </Tab>
                        <Tab eventKey="tab1title" title={race.tab1title}>
                            {race.tab1text}
                        </Tab>
                        <Tab eventKey="tab2title" title={race.tab2title}>
                            {race.tab2text}
                        </Tab>
                        <Tab eventKey="tab3title" title={race.tab3title}>
                            {race.tab3text}
                        </Tab>
                    </Tabs>
                </Card>
            );
        });

        return (
            <div style={{backgroundImage: 'url(assets/parchment2.jpg)', backgroundSize: 'contain', backgroundRepeat: 'repeat'}}>
            <div className="container">
                <div className='row pagetitle'>
                    <p>Explore Available Races</p>
                </div>
                <div className="row">
                    {raceslist}
                </div>
            </div>
            </div>
        );
    }
}

export default RacesPage;