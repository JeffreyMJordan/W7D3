import React from "react";
import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component{
  constructor(props){
    super(props);
    this.TYPES = [
      'fire',
      'electric',
      'normal',
      'ghost',
      'psychic',
      'water',
      'bug',
      'dragon',
      'grass',
      'fighting',
      'ice',
      'flying',
      'poison',
      'ground',
      'rock',
      'steel'
    ].sort();

    this.state ={
      name: "",
      image_url: "",
      poke_type: this.TYPES[0],
      attack: undefined,
      defense: undefined,
      move1: "",
      move2: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    return e => {
      e.preventDefault();
      const params = {'pokemon': this.state };
      params.pokemon.moves = [this.state.move1, this.state.move2];
      console.log(params);
      console.log(this);
      this.props.createNewPokemon(params).then((newPokemon) => {
        this.props.history.push(`pokemon/${newPokemon.id}`);
      });
    };
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render(){
    return (
      <section className="pokemon-detail">
        <ul>
          {this.props.errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit()}>
          <input type="text" placeholder="Name" onChange={this.update('name')}/>
          <input type="text" placeholder="Image URL" onChange={this.update('image_url')}/>
          <select onChange={this.update('poke_type')}>
            {this.TYPES.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
          <input type="number" placeholder="Attack" onChange={this.update('attack')}/>
          <input type="number" placeholder="Defense" onChange={this.update('defense')}/>
          <input type="text" placeholder="Move 1" onChange={this.update('move1')}/>
          <input type="text" placeholder="Move 2" onChange={this.update('move2')}/>
          <input type="submit"/>
        </form>
      </section>

    );
  }
}

export default withRouter(PokemonForm);