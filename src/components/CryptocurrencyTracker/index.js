import { Component } from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
    state = { isLoading: true, cryptocurrenciesData: [] }

    componentDidMount() {
        this.getCryptocurrencies()
    }

    getCryptocurrencies = async () => {
        const response = await fetch(apiUrl)
        const fetchedData = await response.json()

        this.setState({
            cryptocurrenciesData: fetchedData.map(eachCryptocurrency => ({
                id: eachCryptocurrency.id,
                currencyLogo: eachCryptocurrency.currency_logo,
                currencyName: eachCryptocurrency.currency_name,
                usdValue: eachCryptocurrency.usd_value,
                euroValue: eachCryptocurrency: euro_value,

            })),
            isLoading: false,
        })
    }

    renderCryptocurrenciesList = () => {
        const { cryptocurrenciesData } = this.state

        return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
    }

    renderLoader = () => {
        <div data-testid="loader">
            <Loader type="Rings" height={80} width={80} color="blue" />
        </div>
    }

    render() {
        const { isLoading } = this.state

        return (
            <div className="app-container">
                {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
            </div>
        )
    }

}

export default CryptocurrencyTracker