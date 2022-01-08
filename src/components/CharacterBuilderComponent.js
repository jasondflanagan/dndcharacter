import React, { Component } from 'react';
import { Form, Image, Card, Tabs, Tab } from 'react-bootstrap';
import {Input, Label, FormGroup, Col, Row, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { RACES } from '../shared/RacesList';
import { CLASSLIST } from '../shared/ClassesList';



class CharacterBuilder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            races: RACES,
            classlist: CLASSLIST,
            displayedRaceIndex: '',
            displayedClassIndex: '',
            isAbilityModalOpen: false,
            isNameModalOpen: false,
            advancedOptions: false

        }
        this.updateSelectedRace = this.updateSelectedRace.bind(this)
        this.updateSelectedClass = this.updateSelectedClass.bind(this)
        this.toggleAbilityModal = this.toggleAbilityModal.bind(this)
        this.toggleNameModal = this.toggleNameModal.bind(this)
        this.toggleAdvancedOptions = this.toggleAdvancedOptions.bind(this)
    }

    toggleAbilityModal() {
        this.setState({
            isAbilityModalOpen: !this.state.isAbilityModalOpen
        });
    }

    toggleNameModal() {
        this.setState({
            isNameModalOpen: !this.state.isNameModalOpen
        });
    }
    
    toggleAdvancedOptions() {
        this.setState({
            advancedOptions: !this.state.advancedOptions
        });
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

    render() {

        return (
            <div style={{ backgroundImage: 'url(assets/parchment2.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className='container'>
                <div className='row pagetitle'>
                    <p>Create Your Character</p>
                </div>
                <div className='row'>
                    <div align="center" className='row'>
                        <Form>
                            <div className="col-sm-3">
                                <FormGroup>
                                        <div className="col-md-6">
                                        <Label id="characterName">Name</Label>
                                        <Button size="sm" outline="true" onClick={this.toggleNameModal}><i className="fa fa-question" /></Button>
                                        {this.renderNameModal()}
                                        </div>
                                    <Row>
                                        <Input type="text" placeholder="Character Name"></Input>
                                    </Row>
                                
                                </FormGroup>
                            </div>
                            <div className="col-sm-3">    
                                <FormGroup>
                                    <Label id="raceType">Race</Label>
                                    <Input type="select" onChange={this.updateSelectedRace}>
                                        <option value=''>Select A Race</option>                                    
                                        <option value='0'>Dragonborn</option>
                                        <option value='1'>Dwarf</option>
                                        <option value='2'>Elf</option>
                                        <option value='3'>Gnome</option>
                                        <option value='4'>Half-Elf</option>
                                        <option value='5'>Halfling</option>
                                        <option value='6'>Half-Orc</option>
                                        <option value='7'>Human</option>
                                        <option value='8'>Tiefling</option>
                                    </Input>
                                </FormGroup>
                            </div>
                            <div className='col-sm-6'>
                                    {this.renderSelectedRace(this.state.displayedRaceIndex)}
                            </div>
                            <div className="col-sm-3">
                                <FormGroup>
                                    <Label id="classType">Class</Label>
                                    <Input type="select" onChange={this.updateSelectedClass}>
                                        <option value=''>Select a Class</option>
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
                                    </Input>
                                </FormGroup>
                            </div>
                            <div className='col-sm-6'>
                                {this.renderSelectedClass(this.state.displayedClassIndex)}
                            </div>
                            <div className="col-sm-3 col-md-5">
                                <Label id="AbilityScores" onClick={this.toggleAbilityModal}>Ability Scores</Label>
                                {this.renderAbilityModal()}
                                <Button size="sm" outline="true" onClick={this.toggleAbilityModal}><i className="fa fa-question" /></Button>
                                <FormGroup>
                                    <Row>
                                        <Col md={2}>
                                            <Label id="attStr">Strength</Label>
                                            <Input type="number" id="strength" name="str" placeholder="str"/>
                                        </Col>
                                        <Col md={2}>
                                            <Label id="attDex">Dexterity</Label>    
                                            <Input type="number" id="dexterity" name="dex" placeholder="dex"/>
                                        </Col>
                                        <Col md={2}>
                                            <Label id="attCon">Constitution</Label> 
                                            <Input type="number" id="constitution" name="con" placeholder="con"/>
                                        </Col>
                                        <Col md={2}>
                                            <Label id="attCha">Charisma</Label> 
                                            <Input type="number" id="charisma" name="cha" placeholder="cha"/>
                                        </Col>
                                        <Col md={2}>
                                            <Label id="attWis">Wisdom</Label> 
                                            <Input type="number" id="wisdom" name="wis" placeholder="wis"/>
                                        </Col>
                                        <Col md={2}>
                                            <Label id="attInt">Intelligence</Label> 
                                            <Input type="number" id="intelligence" name="int" placeholder="int"/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </div>
                            <FormGroup>
                                <Button color="light" onClick={this.toggleAdvancedOptions}>More</Button>
                            </FormGroup>
                            {this.renderAdvancedOptions()}
                        </Form>
                    </div>
                </div>
                </div>
                </div>
        )
    }

    renderAbilityModal(){
        return (
            <Modal isOpen={this.state.isAbilityModalOpen} toggle={this.toggleAbilityModal}>
                <ModalHeader toggle={this.toggleAbilityModal}> Ability Score Info </ModalHeader>
                <ModalBody>Ability Scores are the base statistics that affect your character's chances of acheiving outcomes from rolls. <br/>
                They can range from a minimum of 0 to a maximum of 20, and can be calculated in one of 3 main ways: Point Buy, Standard Array, or rolled manually.<br/>
                Ability scores affect your rolls with certain abilities. A base score of 10 will have no effect on rolls, and every +2 or -2 from 10 will give you a +1 or -1 to your rolls
                in that category. For example, if you are making an athletics(strength) check and your strength score is 16 or 17, you will get a +3 to your roll. 
                
                </ModalBody>
            </Modal>
        )
    }

    renderNameModal(){
        return (
            <Modal isOpen={this.state.isNameModalOpen} toggle={this.toggleNameModal}>
                <ModalHeader toggle={this.toggleNameModal}> Ability Score Info </ModalHeader>
                <ModalBody>Choose a fantasy name for your character! Here is a reference that can help you with some inspiration:  
                    <a href="https://www.fantasynamegenerators.com/"> fantasynamegenerators.com</a>
                </ModalBody>
            </Modal>
        )
    }

    renderSelectedRace(index){

        console.log(index)
        const racecard = this.state.races.filter(raceindex => raceindex.id === parseInt(index))[0]
        console.log(racecard)

        if (this.state.displayedRaceIndex) {
        return(
            <Card style={{ borderWidth: 0, borderColor: 'transparent', backgroundColor: 'transparent', shadowOpacity: 0 }} key={racecard.id} className="col col-md-7 ">
                <Tabs defaultActiveKey="image" id="race-tabs">
                    <Tab eventKey="image" title={racecard.name} className='cardheader'>
                        <Image fluid src={racecard.image} alt={racecard.name}/>
                    </Tab>
                    <Tab eventKey="tab1title" title={racecard.tab1title} className='cardheader'>
                        {racecard.tab1text}
                    </Tab>
                    <Tab eventKey="tab2title" title={racecard.tab2title} className='cardheader'>
                        {racecard.tab2text}
                    </Tab>
                    <Tab eventKey="tab3title" title={racecard.tab3title} className='cardheader'>
                        {racecard.tab3text}
                    </Tab>
                </Tabs>
            </Card>
        )
        }
        return;
    }

    renderSelectedClass(index){

        console.log(index)
        const classcard = this.state.classlist.filter(classindex => classindex.id === parseInt(index))[0]
        console.log(classcard)

        if (this.state.displayedClassIndex) {
        return(
            <Card key={classcard.id} className="row" className="col col-md-7">
                <Tabs defaultActiveKey="imagetab" id="race-tabs">
                    <Tab eventKey="imagetab" title={classcard.name} className='cardheader'>
                        <Image fluid src={classcard.imagetab} alt={classcard.name}/>
                    </Tab>
                    <Tab eventKey="tab1title" title={classcard.tab1title} className='cardheader'>
                        {classcard.tab1text}
                    </Tab>
                    <Tab eventKey="tab2title" title={classcard.tab2title} className='cardheader'>
                        {classcard.tab2text}
                    </Tab>
                    <Tab eventKey="tab3title" title={classcard.tab3title} className='cardheader'>
                        {classcard.tab3text}
                    </Tab>
                </Tabs>
            </Card>
        )
        }
        return;
    }


    renderAdvancedOptions() {
        if (this.state.advancedOptions) {
            return (
                <>
                <div className="col-sm-3"> 
                    <FormGroup>
                        <Label id="Language">Language</Label>
                        <Input type="select">
                            <option>Select a Language</option>
                            <option>Abyssal</option>
                            <option>Celestial</option>
                            <option>Daelkyr</option>
                            <option>Deep Speech</option>
                            <option>Draconic</option>
                            <option>Dwarvish</option>
                            <option>Giant</option>
                            <option>Gith</option>
                            <option>Gnomish</option>                                   
                            <option>Goblin</option>
                            <option>Halfling</option>
                            <option>Infernal</option>
                            <option>Kraul</option>
                            <option>Leonin</option>
                            <option>Loxodon</option>
                            <option>Marquesian</option>
                            <option>Minotaur</option>
                            <option>Naush</option>
                            <option>Orc</option>
                            <option>Primordial</option>
                            <option>Quari</option>
                            <option>Sylvan</option>
                            <option>Undercommon</option>
                            <option>Vedalken</option>
                            <option>Zemnian</option>
                        </Input>
                        <Label>Alignment</Label>
                        <Input type="select">
                            <option>Select Alignment</option>
                            <option>Lawful Good</option>
                            <option>Neutral Good</option>
                            <option>Chaotic Good</option>
                            <option>Lawful Neutral</option>
                            <option>Neutral</option>
                            <option>Chaotic Neutral</option>
                            <option>Lawful Evil</option>
                            <option>Neutral Evil</option>
                            <option>Chaotic Evil</option>
                        </Input>
                        <Label>Faith</Label>
                        <Input type="text" placeholder="Faith"></Input>
                    </FormGroup>
                </div>
                <div className="col-sm-7">
                    <FormGroup>
                        <Label id="background">Background</Label>
                        <Input type="textarea" placeholder="Where did your character come from?"></Input>
                        <Label id="equipment">Equipment</Label>
                        <Input type="textarea" placeholder="List your equipment"></Input>
                        <Label id="physicalCharacteristics">Physical Characteristics</Label>
                        <Input type="textarea" placeholder="Describe your character's appearance?"></Input>
                        <Label id="Backstory">Backstory</Label>
                        <Input type="textarea" placeholder="What is your backstory?"></Input>
                    </FormGroup>
                </div>
            </>
                
            );
        }
        else {
            return;
        }
    }
}
export default CharacterBuilder