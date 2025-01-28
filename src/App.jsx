import { useState } from "react";

import "./App.css";
import InputBox from "./Components/InputBox.jsx";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo.js";
function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setconvertedAmount((amount * currencyInfo[to]).toFixed(4));
  };
  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertedAmount(amount);
    setamount(convertedAmount);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center flex-wrap bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/04/77/07/64/360_F_477076484_RJY8gSYGCDy5dVKEWwiZumIaJfJYou5H.jpg')",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      ></form>
      <div>
        <InputBox
          label="From"
          Amount={amount}
          currencyOptions={options}
          OncurrencyChange={(currency) => setfrom(currency)}
          OnamountChange={(amount) => setamount(amount)}
          selectedCurrency={from}
        />
      </div>
      <div className=" absolute mt-32 h-10  w-15  items-center justify-center flex bg-blue-600 rounded-md cursor-pointer">
        <button className="text-white cursor-pointer" onClick={swap}>
          Swap
        </button>
      </div>
      <div className="absolute mt-66 ">
        <InputBox
          amountDisabled
          label="To"
          Amount={convertedAmount}
          currencyOptions={options}
          OncurrencyChange={(currency) => setto(currency)}
          OnamountChange={(amount) => setamount(amount)}
          selectedCurrency={to}
        />
      </div>
      <button
        type="submit"
        className="absolute mt-95 h-10 w-40  items-center text-white justify-center flex bg-blue-600 rounded-md cursor-pointer"
        onClick={convert}
      >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </div>
  );
}

export default App;
