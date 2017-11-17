import React from "react";


class PokemonForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      name: "",
      image_url: "",
      poke_type: "",
      attack: undefined,
      defense: undefined,
      moves: []
    };
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    return e => {
      e.preventDefault();
      console.log("You pressed the button");
    };
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render(){
    return (
      <section className="pokemon-detail">
        <form onSubmit={this.handleSubmit()}>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Image URL"/>
          <select onChange={this.update('poke_type')}>
            {this.TYPES.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
          <input type="number" placeholder="Attack"/>
          <input type="number" placeholder="Defense"/>
          <input type="text" placeholder="Move 1"/>
          <input type="text" placeholder="Move 2"/>
          <input type="submit"/>
        </form>
      </section>

    );
  }
}

export default PokemonForm;