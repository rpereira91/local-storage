import React, { Component } from 'react';
import './App.css';
import SimpleStorage from "react-simple-storage";
import { saveAs } from 'file-saver';
import DisplayTasks from './components/tasks';

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
    var current_time = new Intl.DateTimeFormat('en-GB', {
      hour: 'numeric',
      minute: '2-digit'
    }).format(new Date())
    const newItem = {
      id: new Date().getTime(),
      value: this.state.newItem.slice(),
      time: current_time
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
    var blob = new Blob([JSON.stringify(this.state.list)], {type: "application/json"});
    var filename = new Intl.DateTimeFormat('en-GB', { 
      year: 'numeric', 
      month: '2-digit', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(new Date()) + ".txt"
    saveAs(blob, filename);
    const blankList = []
    this.setState({list: blankList})
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
        <h2>ToDo List: </h2>
        <h3>
          Add an item to the list
        </h3>
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
          {this.state.list.length ? "List of things":"No items in you list yet"}

            {this.state.list.map((item) =>
              // return (
              //   <li key={item.id}>
              //     {item.time} : 
              //     {item.value}
              //     <button onClick={() => this.deleteItem(item.id)}>
              //       Remove
              //     </button>
              //   </li>
              // );
              <div>
              <DisplayTasks current_task = {item} />
              </div>
            )}
            
          <button onClick = {() => this.saveFile()}>Save File</button>
          {}
        </div>
      </div>
    );
  }
}

export default App;
