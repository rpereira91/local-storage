import React, { Component } from 'react';
import './App.css';
import SimpleStorage from "react-simple-storage";
import { saveAs } from 'file-saver';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };

  }
  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: new Date().getTime(),
      value: this.state.newItem.slice(),
      time: new Date().toDateString()
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  saveFile(){
    var FileSaver = require('file-saver');
    var blob = new Blob([JSON.stringify(this.state.list)], {type: "application/json"});
    FileSaver.saveAs(blob, "test.txt");
  }
  render() {
    return (
      <div className="App">
        <SimpleStorage parent={this} />
        <div
          style={{
            padding: 50,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          Add an item to the list
          <br />
          <input
            type="text"
            placeholder="Type item here"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            &#43; Add
          </button>
          <br /> <br />
          {}
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.time}
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Remove
                  </button>
                </li>
              );
            })}
            
          </ul>
          <button onClick = {() => this.saveFile()}>Save File</button>
        </div>
      </div>
    );
  }
}

export default App;
