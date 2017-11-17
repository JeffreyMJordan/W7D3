import React from "react";


class ItemDetail extends React.Component{
  constructor(props){
    super(props);
  }


  render() {
    let {item} = this.props;
    return (
      <ul>
        <li>Name: {item.name}</li>
        <li>Price: {item.price}</li>
        <li>Happiness: {item.happiness}</li>
      </ul>
    );
  }
}

export default ItemDetail;

