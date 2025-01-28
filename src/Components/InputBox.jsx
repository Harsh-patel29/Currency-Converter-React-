import React, { useId } from "react";

function InputBox({
  label = "From",
  Amount,
  OnamountChange,
  currencyOptions = [],
  OncurrencyChange,
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  currency,
  classname = "",
}) {
  const id = useId();
  return (
    <div
      className={`
        bg-transparent p-3 rounded-lg text-sm flex border-none  w-200 h-30 
        ${classname}`}
    >
      <div className="w-full h-full bg-white rounded-lg  flex justify-between p-2">
        <div className="text-black/80 ml-2">
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            className="flex ml-2 mt-5 w-1/2 "
            placeholder="0"
            value={Amount}
            onChange={(e) => {
              OnamountChange && OnamountChange(Number(e.target.value));
            }}
            disabled={amountDisabled}
            type="number"
          ></input>
        </div>
        <div className=" text-black/80 text-bold ">
          Currency Type
          <select
            className="flex w-full/2 ml-4 mt-5 bg-gray-100 rounded-md cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e) => {
              OncurrencyChange && OncurrencyChange(e.target.value);
            }}
            disabled={currencyDisabled}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
