import React, { Component } from 'react';
import DataStreamer, { ServerRespond } from './DataStreamer';
import Graph from './Graph';
import './App.css';

<<<<<<< HEAD
/**
 * State declaration for <App />
 */
=======
>>>>>>> task3-branch
interface IState {
  data: ServerRespond[],
  showGraph: boolean,
}

<<<<<<< HEAD
/**
 * The parent element of the react app.
 * It renders title, button and Graph react element.
 */
class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      // data saves the server responds.
      // We use this state to parse data down to the child element (Graph) as element property
=======
class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
>>>>>>> task3-branch
      data: [],
      showGraph: false,
    };
  }

<<<<<<< HEAD
  /**
   * Render Graph react component with state.data parse as property data
   */
=======
>>>>>>> task3-branch
  renderGraph() {
    if (this.state.showGraph) {
      return (<Graph data={this.state.data}/>)
    }
  }

<<<<<<< HEAD
  /**
   * Get new data from server and update the state with the new data
   */
  getDataFromServer() {
      let x = 0;
      const interval = setInterval(() => {
        DataStreamer.getData((serverResponds: ServerRespond[]) => {
          this.setState({
            data: serverResponds,
            showGraph: true,
          });
        });
        x++;
        if (x > 1000) {
          clearInterval(interval);
        }
      }, 100);
  }

  /**
   * Render the App react component
   */
=======
  getDataFromServer() {
    let x = 0;
    const interval = setInterval(() => {
      DataStreamer.getData((serverResponds: ServerRespond[]) => {
        this.setState({
          data: serverResponds,
          showGraph: true,
        });
      });
      x++;
      if (x > 1000) {
        clearInterval(interval);
      }
    }, 100);
  }

>>>>>>> task3-branch
  render() {
    return (
      <div className="App">
        <header className="App-header">
<<<<<<< HEAD
          Bank & Merge Co Task 2
        </header>
        <div className="App-content">
          <button className="btn btn-primary Stream-button"
            // when button is click, our react app tries to request
            // new data from the server.
            // As part of your task, update the getDataFromServer() function
            // to keep requesting the data every 100ms until the app is closed
            // or the server does not return anymore data.
            onClick={() => {this.getDataFromServer()}}>
            Start Streaming Data
          </button>
=======
          Bank Merge & Co Task 3
        </header>
        <div className="App-content">
          <button className="btn btn-primary Stream-button" onClick={() => {this.getDataFromServer()}}>Start Streaming Data</button>
>>>>>>> task3-branch
          <div className="Graph">
            {this.renderGraph()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
