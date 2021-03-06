import React, { Component } from 'react';
import { Form, Card, CardImg } from 'react-bootstrap';
import {Input, Label, FormGroup, Col, Row, Modal, ModalBody, ModalHeader, Button} from 'reactstrap';
import { RACES } from '../shared/RacesList';
import { CLASSLIST } from '../shared/ClassesList';
import { Fade } from 'react-animation-components';



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
            advancedOptions: false,
            questionName: false,
            questionAbility: false,
            strength: null,
            dexterity: null,
            constitution: null,
            charisma: null,
            wisdom: null,
            intelligence: null
        }
        this.updateSelectedRace = this.updateSelectedRace.bind(this)
        this.updateSelectedClass = this.updateSelectedClass.bind(this)
        this.toggleAbilityModal = this.toggleAbilityModal.bind(this)
        this.toggleNameModal = this.toggleNameModal.bind(this)
        this.toggleAdvancedOptions = this.toggleAdvancedOptions.bind(this)
        this.toggleQuestionName = this.toggleQuestionName.bind(this)
        this.toggleQuestionAbility = this.toggleQuestionAbility.bind(this)
        this.rollStats = this.rollStats.bind(this)
    }

    rollStat() {
        let lowRoll = 6
        console.log(lowRoll)
        let currentRoll = 0
        let rollTotal = 0
        for (let i = 0; i < 4; i++) {
            currentRoll = (Math.floor(Math.random() * 6) +1)
            console.log("Roll #" + (i+1), "= " + currentRoll)
            if (currentRoll < lowRoll) {
                lowRoll = currentRoll
                console.log("low roll " + lowRoll)
            }
            rollTotal += currentRoll
            console.log("end of loop roll total " + rollTotal)
        }
        console.log("rollTotal = " + rollTotal) 
        rollTotal -= lowRoll
        console.log("- lowRoll" + lowRoll, "= rollTotal " + rollTotal)
        return rollTotal
    }

    rollStats(){
        console.log(this.state.strength) 
        this.setState({
            strength: this.rollStat()
        })
        console.log(this.state.dexterity)
        this.setState({
            dexterity: this.rollStat()
        })

        console.log(this.state.constitution)
        this.setState({
            constitution: this.rollStat()
        })
        console.log(this.state.charisma)
        this.setState({
            charisma: this.rollStat()
        })
        console.log(this.state.wisdom)
        this.setState({
            wisdom: this.rollStat()
        })
        console.log(this.state.intelligence)
        this.setState({
            intelligence: this.rollStat()
        })
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
    toggleQuestionName(){
        this.setState ({
            questionName: !this.state.questionName
        })
    }
    toggleQuestionAbility(){
        this.setState ({
            questionAbility: !this.state.questionAbility
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
                        <div className='col-4'>
                        {this.renderSelectedRace(this.state.displayedRaceIndex)}
                        </div>
                        <div className='col-4'>
                        <Form>
                                <Fade in delay="200">
                                    <FormGroup>
                                            <div className="col-md-6">
                                            <Label id="characterName" onClick={this.toggleNameModal}>Name</Label>
                                            <i style={{margin: 10}} onClick={this.toggleNameModal} className={this.state.questionName ? 'fa fa-question-circle' : 'fa fa-question-circle-o'} onMouseOut={this.toggleQuestionName} onMouseOver={this.toggleQuestionName}/>
                                            {this.renderNameModal()}
                                            </div>
                                        <Row>
                                            <Input type="text" placeholder="Character Name"></Input>
                                        </Row>
                                    </FormGroup>
                                </Fade>
                                <Fade in delay="400">
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
                                </Fade>
                                <Fade in delay="600">
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
                                </Fade>
                                <Fade in delay="800">
                                <Label id="AbilityScores" onClick={this.toggleAbilityModal}>Ability Scores</Label>
                                {this.renderAbilityModal()}
                                <i  style={{margin: 10}} onClick={this.toggleAbilityModal} className={this.state.questionAbility ? 'fa fa-question-circle' : 'fa fa-question-circle-o'} onMouseOut={this.toggleQuestionAbility} onMouseOver={this.toggleQuestionAbility}/>
                                </Fade>
                                    <FormGroup>
                                        <Fade in delay="1000">
                                        <Row style={{marginBottom: 5}}>
                                            <Col md={4}>
                                                <Label id="attStr">Strength</Label>
                                                <Input type="number" id="strength" name="str" placeholder={this.state.strength}/>
                                                <Button onClick={()=> this.setState({strength: this.rollStat()})}>Roll</Button>
                                            </Col>
                                            <Col md={4}>
                                                <Label id="attDex">Dexterity</Label>    
                                                <Input type="number" id="dexterity" name="dex" placeholder={this.state.dexterity}/>
                                                <Button onClick={()=> {this.setState({dexterity: this.rollStat()})}}>Roll</Button>
                                            </Col>
                                            <Col md={4}>
                                                <Label id="attCon">Constitution</Label> 
                                                <Input type="number" id="constitution" name="con" placeholder={this.state.constitution}/>
                                                <Button onClick={()=> this.setState({constitution: this.rollStat()})}>Roll</Button>
                                            </Col>
                                        </Row>
                                        </Fade>
                                        <Fade in delay="1200">
                                        <Row style={{marginBottom: 5}}>
                                            <Col md={4}>
                                                <Label id="attCha">Charisma</Label> 
                                                <Input type="number" id="charisma" name="cha" placeholder={this.state.charisma}/>
                                                <Button onClick={()=> this.setState({charisma: this.rollStat()})}>Roll</Button>
                                            </Col>
                                            <Col md={4}>
                                                <Label id="attWis">Wisdom</Label> 
                                                <Input type="number" id="wisdom" name="wis" placeholder={this.state.wisdom}/>
                                                <Button onClick={()=> this.setState({wisdom: this.rollStat()})}>Roll</Button>
                                            </Col>
                                            <Col md={4}>
                                                <Label id="attInt">Intelligence</Label> 
                                                <Input type="number" id="intelligence" name="int" placeholder={this.state.intelligence}/>
                                                <Button onClick={()=> this.setState({intelligence: this.rollStat()})}>Roll</Button>
                                            </Col>
                                        </Row>
                                        </Fade>
                                    </FormGroup>
                                
                                <Fade in delay="1400">
                                    <FormGroup>
                                        <Button style={{margin: 10}} color="light" onClick={this.toggleAdvancedOptions}>Advanced Options</Button>
                                    </FormGroup>
                                </Fade>
                            {this.renderAdvancedOptions()}
                            
                        </Form>
                        </div>
                        <div className='col-4'>
                        {this.renderSelectedClass(this.state.displayedClassIndex)}
                        </div>
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

        const racecard = this.state.races.filter(raceindex => raceindex.id === parseInt(index))[0]

        if (this.state.displayedRaceIndex) {
        return(

                <Card key={racecard.id} className="col-md-9 builder-card">
                    <CardImg src={racecard.image} alt={racecard.name} />
                </Card>
        )
        }
        return;
    }

    renderSelectedClass(index){

        const classcard = this.state.classlist.filter(classindex => classindex.id === parseInt(index))[0]

        if (this.state.displayedClassIndex) {
        return(
            <Card key={classcard.id} className="col-md-9 builder-card">
                <CardImg src={classcard.imagetab} alt={classcard.name} />
            </Card>

        )
        }
        
        return;
    }


    renderAdvancedOptions() {
        if (this.state.advancedOptions) {
            return (
                <>
                <div className="col">
                
                    <FormGroup>
                        <Fade in delay="200"> 
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
                        </Fade>
                        <Fade in delay="400">
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
                        </Fade>
                        <Fade in delay="600">
                        <Label>Faith</Label>
                        <Input type="text" placeholder="Faith"></Input>
                        </Fade>
                    </FormGroup>
                </div>
                <div style={{marginBottom: '10px'}} className="col">
                    <FormGroup>
                    <Fade in delay="800">
                        <Label id="background">Background</Label>
                        <Input type="textarea" placeholder="Where did your character come from?"></Input>
                    </Fade>
                    <Fade in delay="1000">
                        <Label id="equipment">Equipment</Label>
                        <Input type="textarea" placeholder="List your equipment"></Input>
                    </Fade>
                    <Fade in delay="1200">
                        <Label id="physicalCharacteristics">Physical Characteristics</Label>
                        <Input type="textarea" placeholder="Describe your character's appearance?"></Input>
                    </Fade>
                    <Fade in delay="1400">
                        <Label id="Backstory">Backstory</Label>
                        <Input type="textarea" placeholder="What is your backstory?"></Input>
                    </Fade>
                    <Fade in delay="1600">
                        <Label id="Spells">Spells</Label>
                        <Input type="textarea" placeholder="Spell List"></Input>
                    </Fade>
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