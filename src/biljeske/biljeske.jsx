import React, { Component } from "react";
import PropTypes from "prop-types";
import "./biljeske.css";

class Biljeske extends Component {
  constructor(props) {
    super(props);
    this.biljeska = props.biljeska;
    this.biljeskaId = props.biljeskaId;
    this.izbrisi = this.izbrisi.bind(this);
    this.edit = this.edit.bind(this);
  }

  izbrisi(id) {
    this.props.izbrisiBiljesku(id);
  }

  edit(id) {
    this.props.handleEdit(id);
  }

  render(props) {
    return (
      <div className="maindiv-biljeska">
        <div className="container">
          <p className="biljeska">
            {/* <input value={this.biljeska} ref="bilj1" /> */}

            {this.biljeska}
          </p>
        </div>
        <div className="btns">
          <button
            className="delete"
            onClick={() => this.izbrisi(this.biljeskaId)}
          >
            izbriši
          </button>
          <button className="edit" onClick={() => this.edit(this.biljeskaId)}>
            uredi
          </button>
        </div>
      </div>
    );
  }
}

Biljeske.propTypes = {
  biljeska: PropTypes.string
};

export default Biljeske;
