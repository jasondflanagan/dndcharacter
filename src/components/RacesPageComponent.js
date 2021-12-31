import React, { Component } from 'react';
import { Card, Tab, Tabs, Image } from 'react-bootstrap';
import { RACES } from './RaceList';

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
                <Card key={race.id} className="col-sm-4">
                    <Tabs defaultActiveKey="image" id="race-tabs">
                        <Tab eventKey="image" title={race.name}>
                            <Image fluid src={race.image} alt={race.name}/>
                        </Tab>
                        <Tab eventKey="facts" title="Facts">
                            {race.main}
                        </Tab>
                    </Tabs>
                </Card>
            );
        });

        return (
            <div className="container">
                <div className='row mt-3 mb-3'>
                    <h1>Explore Available Races</h1>
                </div>
                <div className="row">
                    {raceslist}
                </div>
            </div>
        );
    }
}

export default RacesPage;