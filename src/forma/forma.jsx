import React, { Component } from "react";
import "./forma.css";

class Forma extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novabiljeska: ""
    };
    this.dodajBiljesku = this.dodajBiljesku.bind(this); //undefined
    this.dodaj = this.dodaj.bind(this);
  }

  dodajBiljesku(e) {
    this.setState({
      novabiljeska: e.target.value
    });
  }

  dodaj() {
    this.props.dodajNovuBiljesku(this.state.novabiljeska);

    this.setState({
      novabiljeska: ""
    });
  }

  render() {
    return (
      <div className="forma-div">
        <input
          className="biljeskainput"
          placeholder="Unesite novu bilješku..."
          value={this.state.novabiljeska}
          onChange={this.dodajBiljesku}
        ></input>
        <button className="biljeskainput-btn" onClick={this.dodaj}>
          Nova bilješka
        </button>
      </div>
    );
  }
}

export default Forma;
