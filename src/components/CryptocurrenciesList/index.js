import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  CryptocurrenciesHeader = () => {
    ;<div className="header">
      <p>Coin Type</p>
      <div>
        <p>USD</p>
        <p>EURO</p>
      </div>
    </div>
  }

  CryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="list-container">
        {this.CryptocurrenciesHeader()}
        <ul className="currencies-list">
          {cryptocurrenciesData.map(eachCryptocurriency => (
            <CryptocurrencyItem
              key={eachCryptocurriency.id}
              cryptocurrenciesDetails={eachCryptocurriency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1 className="heading"> Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.CryptocurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
