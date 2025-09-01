import { useState } from "react";
import useCurrencyRates from "../../hooks/apiCall.js"
import MainInputBox from "./MainInpuntBox";
import "./main.css"

function Main() {
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [amount, setAmount] = useState(1);

    const { rates } = useCurrencyRates(fromCurrency);
    const currencyList = Object.keys(rates || {});
    const rate = rates[toCurrency];
    const convertedAmount = rate ? (amount * rate).toFixed(2) : "";


    return (
        <div className="mainCountainer">
            <MainInputBox
                currency={fromCurrency}
                currencyList={currencyList}
                onCurrencyChange={setFromCurrency} />

            <MainInputBox
                currency={toCurrency}
                currencyList={currencyList}
                onCurrencyChange={setToCurrency}
            />


            <div className="amountCountainer">
                <div className="col amount">
                    <h3>Amount</h3>
                    <input type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))} />
                </div>

                <div className="col covertAmount">
                    <p>1 USD</p>
                    <h2>{convertedAmount}</h2>
                </div>
            </div>
        </div>
    )
}

export default Main
