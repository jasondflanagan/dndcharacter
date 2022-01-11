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
                <Card key={classtype.id} className="col-4" style={{borderWidth: 2, borderColor: '#F5D489', backgroundColor: '#efefef', shadowOpacity: 0 }}>
                    <Card.Title>{classtype.name}</Card.Title>
                    <Tabs defaultActiveKey="image">
                        <Tab eventKey="image" title='Image'>
                            <Image fluid src={classtype.imagetab} alt={classtype.name}/>
                        </Tab>
                        <Tab eventKey="tab1title" title={classtype.tab1title}>
                            {classtype.tab1text}
                        </Tab>
                        <Tab eventKey="tab2title" title={classtype.tab2title}>
                            {classtype.tab2text}
                        </Tab>
                        <Tab eventKey="tab3title" title={classtype.tab3title}>
                            {classtype.tab3text}
                        </Tab>
                    </Tabs>
                </Card>
            );
        });

        return (
            <div style={{backgroundImage: 'url(assets/parchment2.jpg)', backgroundSize: 'contain', backgroundRepeat: 'repeat'}}>
            <div className="container">
            <div className='row pagetitle'>
                    <p>Explore Available Classes</p>
                </div>
                <div className="row">
                    {classeslist}
                </div>
            </div>
            </div>
        );
    }
}

export default ClassesPage;