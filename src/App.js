import React, { Component } from 'react'
import './App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      number: '',
      output: ''
    };
  }
  onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      number: e.target.value
    })
  }

  toBinary = (num) => {
    var result = "";
    function fun(n) {
      if (n === 0) return;
      result += (n % 2);
      fun(Math.floor(n / 2));
    }
    fun(num);
    return result = result.split("").reverse().join("");
  }
  toOctal = (num) => {
    var result = "";
    function fun(n) {
      if (n === 0) return;
      result += (n % 8);
      fun(Math.floor(n / 8));
    }
    fun(num);
    return result = result.split("").reverse().join("");
  }

  onSubmit = (e) => {
    e.preventDefault();
    var first = document.querySelector(".first");
    var second = document.querySelector(".second");
    if ((first.value === "Binary") && (second.value === "Decimal")) {
      this.setState({
        output: parseInt(this.state.number, 2)
      })
    }
    else if ((first.value === "Binary") && (second.value === "Octal")) {
      let num = parseInt(this.state.number, 2);
      this.setState({
        output: this.toOctal(num)
      })
    }
    else if ((first.value === "Binary") && (second.value === "Hexadecimal")) {
      this.setState({
        output: parseInt(this.state.number, 2).toString(16).toUpperCase()
      })
    } else if ((first.value === "Decimal") && (second.value === "Binary")) {
      this.setState({
        output: this.toBinary(this.state.number)
      })
    } else if ((first.value === "Decimal") && (second.value === "Octal")) {

      this.setState({
        output: this.toOctal(this.state.number)
      })

    } else if ((first.value === "Decimal") && (second.value === "Hexadecimal")) {
      this.setState({
        output: parseInt(this.state.number).toString(16).toUpperCase()
      })
    } else if ((first.value === "Octal") && (second.value === "Binary")) {
      let val = parseInt(this.state.number, 8);
      this.setState({
        output: this.toBinary(val)
      })
    } else if ((first.value === "Octal") && (second.value === "Decimal")) {
      this.setState({
        output: parseInt(this.state.number, 8)
      })
    } else if ((first.value === "Octal") && (second.value === "Hexadecimal")) {
      let val = parseInt(this.state.number, 8);
      let result = parseInt(val).toString(16).toUpperCase();
      this.setState({
        output: result
      })
    } else if ((first.value === "Hexadecimal") && (second.value === "Binary")) {
      let val = parseInt(this.state.number, 16);
      this.setState({
        output: this.toBinary(val)
      })
    } else if ((first.value === "Hexadecimal") && (second.value === "Decimal")) {
      this.setState({
        output: parseInt(this.state.number, 16)
      })
    } else if ((first.value === "Hexadecimal") && (second.value === "Octal")) {
      var val = parseInt(this.state.number, 16);
      this.setState({
        output: this.toOctal(val)
      }) 
    }
    else if(first.value ===second.value ){
       this.setState({
         output:this.state.number
       }) 
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Number Conversion:</label>
          <div id="first">
            <span>From</span>
            <select name="first" className="first">
              <option value="Binary" id="Binary">Binary</option>
              <option value="Decimal" id="Decimal">Decimal</option>
              <option value="Octal" id="Octal">Octal</option>
              <option value="Hexadecimal" id="Hexadecimal">Hexadecimal</option>
            </select>
          </div>
          <div id="second">
            <span>To</span>
            <select name="second" className="second">
              <option value="Binary" id="binary">Binary</option>
              <option value="Decimal" id="Decimal">Decimal</option>
              <option value="Octal" id="Octal">Octal</option>
              <option value="Hexadecimal" id="Hexadecimal">Hexadecimal</option>
            </select>
          </div>
          <br /><br />
          <input type="text" name="number"
            value={this.state.number}
            onChange={this.onChange} id="number" placeholder="Enter Number" required />

          <input type="submit" value="Submit" />
          <br />
          <span className="output">Output :</span>
          <input type="text" name="output" id="output" value={this.state.output} placeholder="Output" readOnly />

        </form>
      </div>
    )
  }
}
export default App;
