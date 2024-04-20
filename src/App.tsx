import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import Test from "./components/Test/Test";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>App</h1>
                <Test>Test</Test>
            </div>
        </Provider>
    );
};

export default App;
