// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    input: '',
    items: this.props,
  }

  changeEvent = event => {
    this.setState(prevState => ({
      input: event.target.value,
      items: prevState.items,
    }))
  }

  render() {
    const {input, items} = this.state
    const {destinationsList} = items
    const searchResults = destinationsList.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase()),
    )
    return (
      <div className="main">
        <h1>Destination Search</h1>
        <div>
          <input type="search" value={input} onChange={this.changeEvent} />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="container">
          {searchResults.map(result => (
            <DestinationItem
              name={result.name}
              imgUrl={result.imgUrl}
              key={result.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
