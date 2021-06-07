import Information from "./Information";

import Footer from "./Footer";

function App() {
  return (
    <div>
      <h1> Hello</h1>

      <Information>
        <h2 style={{ color: "red" }}>things to do:</h2>
        <ul>
          <li>learn </li>
          <li>stay</li>
          <li>make</li>
        </ul>
      </Information>

      <Footer
        // children="kva-kva"
        first={1}
        second={2}
        message={<h2 style={{ color: "tomato" }}>"Do not drink Pepsi"</h2>}
        user={{
          name: "Igor",
          state: "happy",
          questions: 20,
        }}
      >
        <h2 style={{ color: "blue" }}>"Drink Pepsi"</h2>
      </Footer>
    </div>
  );
}

export default App;
