/* import React, { Component } from 'react';
import fire from './config/fire'
import Header from './header/header'

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  }
    }

   
    render() { 
        return ( <div>
            <Header/>
            <h3>You are home</h3>
        </div> );
    }
}
 
export default Home; 
 */

import React, { Component } from "react";
import "./App.css";
import Biljeske from "./biljeske/biljeske";
import Forma from "./forma/forma";
import Footer from "./footer/footer";
import fire from "./config/fire";
import "firebase/database";
import Header from "./header/header";
import uuid from "uuid";

class Home extends Component {
  constructor(props) {
    super(props);
    this.dodajNovuBiljesku = this.dodajNovuBiljesku.bind(this);
    this.izbrisiBiljesku = this.izbrisiBiljesku.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.app = fire;
    this.database = this.app
      .database()
      .ref()
      .child("biljeske");

    this.state = {
      biljeske: [],
      id: uuid(),
      item: "", //ovo je novabiljeska iz forme
      editItem: false
    };
  }

  componentWillMount() {
    const prethodna = this.state.biljeske;

    this.database.on("child_added", snap => {
      prethodna.push({
        id: snap.key,
        biljeska: snap.val().biljeska
      });

      this.setState({
        biljeske: prethodna
      });
    });

    this.database.on("child_removed", snap => {
      for (var i = 0; i < prethodna.length; i++) {
        if (prethodna[i].id === snap.key) {
          prethodna.splice(i, 1);
        }
      }
      this.setState({
        biljeske: prethodna
      });
    });
  }

  dodajNovuBiljesku(bilj) {
    /*     const prethodna = this.state.biljeske;
    prethodna.push({id: prethodna.length + 1, biljeska: bilj});
    this.setState({
      biljeske: prethodna,
    }); */

    this.database.push().set({ biljeska: bilj });
  }

  izbrisiBiljesku(biljeskaId) {
    this.database.child(biljeskaId).remove();
  }

  handleEdit = id => {
    const filteredItems = this.state.biljeske.filter(item => item.id !== id);
    const selectedItem = this.state.biljeske.find(item => item.id === id);
    console.log(selectedItem);

    this.setState({
      biljeske: filteredItems,
      item: selectedItem.biljeska
    });
  };

  render() {
    return (
      <div className="maindiv">
        <div className="header-div">
          <Header />
        </div>
        <div className="unos-biljeske">
          <Forma
            dodajNovuBiljesku={this.dodajNovuBiljesku}
            //item={this.item}
          />
        </div>
        <div className="biljeska-div">
          Bilješke:
          {this.state.biljeske.map(bilj => {
            return (
              <Biljeske
                biljeska={bilj.biljeska}
                biljeskaId={bilj.id}
                key={bilj.id}
                izbrisiBiljesku={this.izbrisiBiljesku}
                handleEdit={this.handleEdit}
              />
            );
          })}
        </div>
        <div className="footer-div">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
