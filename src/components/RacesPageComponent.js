import React, { Component } from 'react';
import { Card, CardHeader, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { RACES } from './RaceList';

class RacesPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            races: RACES
        }
    }
    render() {
        const raceslist = this.state.races.map(race => {
            return (
                <Card key={race.id}>
                    <CardHeader>{race.name}</CardHeader>
                    <img src={race.image} alt={race.name} />
                </Card>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {raceslist}
                </div>
            </div>
        );
    }
}

export default RacesPage;