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
                <Card key={race.id} className="col col-sm-4">
                    <Tabs defaultActiveKey="image" id="race-tabs">
                        <Tab eventKey="image" title={race.name} className='cardheader'>
                            <Image fluid src={race.image} alt={race.name}/>
                        </Tab>
                        <Tab eventKey="facts" title="Facts" className='cardheader'>
                            {race.main}
                        </Tab>
                    </Tabs>
                </Card>
            );
        });

        return (
            <div className="container">
                <div className='row pagetitle'>
                    <p>Explore Available Races</p>
                </div>
                <div className="row">
                    {raceslist}
                </div>
            </div>
        );
    }
}

export default RacesPage;