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
                <Card key={classtype.id} className="col-sm-5 m-3">
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
            <div className="container" style={{backgroundImage: 'url(assets/parchment2.jpg)', marginLeft:0, marginRight:0, paddingRight: 0,display: 'inline-block', width: 'fit-content', backgroundSize: 'contain', backgroundRepeat: 'repeat'}}>
            <div className='row pagetitle'>
                    <p>Explore Available Classes</p>
                </div>
                <div className="row">
                    {classeslist}
                </div>
            </div>
        );
    }
}

export default ClassesPage;