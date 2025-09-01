import "./main.css"
function MainInputBox({
  currency,
  currencyList = [],
  onCurrencyChange
}) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <select name="" id="select" value={currency}
              onChange={(e) => onCurrencyChange(e.target.value)}
            >
            
            {currencyList.map((cur) => (
              <option value={cur} key={cur}>
                {cur}
                </option>
            ))}
          
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainInputBox
