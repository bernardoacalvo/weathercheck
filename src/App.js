import Header from "./components/Header/Header";
import Forecast from "./components/Forecast";
import Error from "./components/Error";
import Loader from "./components/Loader";

import useForecast from "./hooks/useForecast";

import "./App.css";

function App() {
  const { isError, isLoading, forecast, submitRequest, disableError } =
    useForecast();

  const onSubmit = (value) => {
    submitRequest(value);
  };

  const onClickError = () => {
    disableError();
  };

  return (
    <div>
      <Header onSubmitForm={onSubmit} />
      {isError && <Error onClick={onClickError} />}
      {isLoading && <Loader />}
      {!forecast && <div className="background"></div>}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
