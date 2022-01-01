import React, { Component } from 'react';
import { Form, InputGroup, FormSelect } from 'react-bootstrap';
import InputGroupText from 'reactstrap/lib/InputGroupText';

class CharacterBuilder extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row pagetitle'>
                    <p>Create Your Own Character</p>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h1>this will contain the race and class images on selection</h1>
                    </div>
                    <div className='col'>
                        <Form onSubmit={this.handleSubmit}>
                            <InputGroup>
                                <InputGroupText id="race">Race</InputGroupText>
                                <FormSelect>
                                    <option>Select a Race</option>
                                    <option>Dragonborn</option>
                                    <option>Dwarf</option>
                                    <option>Elf</option>
                                    <option>Gnome</option>
                                    <option>Half-Elf</option>
                                    <option>Halfling</option>
                                    <option>Half-Orc</option>
                                    <option>Human</option>
                                    <option>Tiefling</option>
                                </FormSelect>
                            </InputGroup>
                            <InputGroup>
                                <InputGroupText id="race">Class</InputGroupText>
                                <FormSelect>
                                    <option>Select a Class</option>
                                    <option>Barbarian</option>
                                    <option>Bard</option>
                                    <option>Cleric</option>
                                    <option>Druid</option>
                                    <option>Fighter</option>
                                    <option>Monk</option>
                                    <option>Paladin</option>
                                    <option>Ranger</option>
                                    <option>Sorcerer</option>                                   
                                    <option>Warlock</option>
                                    <option>Wizard</option>
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