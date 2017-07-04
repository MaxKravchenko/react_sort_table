import React, { Component } from 'react';
import './App.css';
import Table from './Table'
import {stringSorter, numberSorter} from "./SortHepler";

let getAge = (year) => 2017 - year

class App extends Component {
  staff = [
    {name: 'John', year: 1995, isMan: true, earn: 5000},
    {name: 'Kate', year: 2000, isMan: false, earn: 4000.9999},
    {name: 'Andrey', year: 2007, isMan: false, earn: 3000},
    {name: 'Bobby', year: 1000, isMan: false, earn: 3000},
  ]

  columns = [
    {cell: person => person.name, head: 'Name', sorter: (element1, element2) => stringSorter(element1.name, element2.name)},
    {cell: person => getAge(person.year), head: 'Age', sorter: (element1, element2) => numberSorter(getAge(element1.year), getAge(element2.year))}

  ]

  render() {
    return (
      <div className="App">
        <Table list={this.staff} columns={this.columns}/>
      </div>
    );
  }
}

export default App;
