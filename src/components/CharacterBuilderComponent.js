import React, { Component } from 'react';
import { Form, InputGroup, FormSelect, FormLabel, Image, Card, Tabs, Tab } from 'react-bootstrap';
import { RACES } from '../shared/RacesList';
import { CLASSLIST } from '../shared/ClassesList';



class CharacterBuilder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            races: RACES,
            classlist: CLASSLIST,
            displayedRaceIndex: '0',
            displayedClassIndex: '0'
        }
        this.updateSelectedRace = this.updateSelectedRace.bind(this)
        this.updateSelectedClass = this.updateSelectedClass.bind(this)
    }

    updateSelectedRace(selected){
        this.setState({
            displayedRaceIndex: selected.target.value
        })
    }

    updateSelectedClass(selected){
        this.setState({
            displayedClassIndex: selected.target.value
        })
    }

    renderSelectedRace(index){

        console.log(index)
        const racecard = this.state.races.filter(raceindex => raceindex.id === parseInt(index))[0]
        console.log(racecard)


        return(
            <Card key={racecard.id} className="col col-md-7 ">
                <Tabs defaultActiveKey="image" id="race-tabs">
                    <Tab eventKey="image" title={racecard.name} className='cardheader'>
                        <Image fluid src={racecard.image} alt={racecard.name}/>
                    </Tab>
                    <Tab eventKey="facts" title="Facts" className='cardheader'>
                        {racecard.main}
                    </Tab>
                </Tabs>
            </Card>
        )
    }

    renderSelectedClass(index){

        console.log(index)
        const classcard = this.state.classlist.filter(classindex => classindex.id === parseInt(index))[0]
        console.log(classcard)


        return(
            <Card key={classcard.id} className="col col-md-7">
                <Tabs defaultActiveKey="image" id="race-tabs">
                    <Tab eventKey="image" title={classcard.name} className='cardheader'>
                        <Image fluid src={classcard.image} alt={classcard.name}/>
                    </Tab>
                    <Tab eventKey="facts" title="Facts" className='cardheader'>
                        {classcard.main}
                    </Tab>
                </Tabs>
            </Card>
        )
    }

    render() {

        return (
            <div className='container'>
                <div className='row pagetitle'>
                    <p>Create Your Own Character</p>
                </div>
                <div className='row'>
                    <div className='col-sm-5'>
                        <div className='row'>
                            {this.renderSelectedRace(this.state.displayedRaceIndex)}
                        </div>
                        <div className='row'>
                            {this.renderSelectedClass(this.state.displayedClassIndex)}
                        </div>
                    </div>
                    <div className='col-sm-7'>
                        <Form>
                            <InputGroup>
                                <FormLabel id="racetype">Race</FormLabel>
                                <FormSelect onChange={this.updateSelectedRace}>
                                    <option>Select A Race</option>                                    
                                    <option value='0'>Dragonborn</option>
                                    <option value='1'>Dwarf</option>
                                    <option value='2'>Elf</option>
                                    <option value='3'>Gnome</option>
                                    <option value='4'>Half-Elf</option>
                                    <option value='5'>Halfling</option>
                                    <option value='6'>Half-Orc</option>
                                    <option value='7'>Human</option>
                                    <option value='8'>Tiefling</option>
                                </FormSelect>
                            </InputGroup>
                            <InputGroup>
                                <FormLabel id="classtype">Class</FormLabel>
                                <FormSelect onChange={this.updateSelectedClass}>
                                    <option>Select a Class</option>
                                    <option value='0'>Barbarian</option>
                                    <option value='1'>Bard</option>
                                    <option value='2'>Cleric</option>
                                    <option value='3'>Druid</option>
                                    <option value='4'>Fighter</option>
                                    <option value='5'>Monk</option>
                                    <option value='6'>Paladin</option>
                                    <option value='7'>Ranger</option>
                                    <option value='8'>Sorcerer</option>                                   
                                    <option value='9'>Warlock</option>
                                    <option value='10'>Wizard</option>
                                </FormSelect>
                            </InputGroup>
                        </Form>
                    </div>
                </div>
                </div>

        )
    }

}

export default CharacterBuilder