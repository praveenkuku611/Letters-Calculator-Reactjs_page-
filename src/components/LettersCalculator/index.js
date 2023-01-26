import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  countCharacter = event => {
    const value1 = event.target.value
    this.setState({count: value1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="box-container">
            <h1 className="p1">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="p2" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                onChange={this.countCharacter}
                id="phraseText"
                placeholder="Enter the phrase"
              />
            </div>
            <p className="text-container">No.of letters: {count.length}</p>
          </div>
          <div className="img0container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
