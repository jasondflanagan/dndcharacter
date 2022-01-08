import React, { Component } from 'react';
import { Card, Tab, Tabs, Image } from 'react-bootstrap';
import { CLASSLIST } from '../shared/ClassesList';


class ClassesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: CLASSLIST
        };
    }
    render() {
        const classeslist = this.state.classes.map(classtype => {
            return (
                <Card key={classtype.id} className="col-sm-4">
                    <Card.Title>{classtype.name}</Card.Title>
                    <Tabs defaultActiveKey="image" id="race-tabs">
                        <Tab eventKey="image" title='Image'>
                            <Image fluid src={classtype.image} alt={classtype.name}/>
                        </Tab>
                        <Tab eventKey="tab1title" title="text">
                            {classtype.main}
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
                    {classeslist}
                </div>
            </div>
        );
    }
}

export default ClassesPage;