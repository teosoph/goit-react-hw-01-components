import { Button } from "@material-ui/core";

import Information from "./Information";
import Footer from "./Footer/Footer";

const CAT_IMG_SRC =
  "https://glavcom.ua/img/article/7610/98_main.jpg?1623079140";

const headerStyle = {
  textAlign: "center",
  color: "teal",
  fontSize: "50px",
};

const App = () => {
  return (
    <div>
      <h1 style={headerStyle}> Hellooo</h1>
      <div>
        <img src={CAT_IMG_SRC} alt="cat" width="300" />
      </div>

      <Button variant="contained" color="primary">
        play
      </Button>

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
        message={
          <h2
          // style={{ color: "tomato" }}
          >
            "Do not drink Pepsi"
          </h2>
        }
        user={{
          name: "Igor",
          state: "happy",
          questions: 20,
        }}
        color="tomato"
        border="2px solid "
      >
        <h2 style={{ color: "blue" }}>"Drink Pepsi"</h2>
      </Footer>
      <Footer
        // children="kva-kva"
        first={1}
        second={2}
        message={
          <h2
          // style={{ color: "tomato" }}
          >
            "Do not drink Pepsi"
          </h2>
        }
        user={{
          name: "Igor",
          state: "happy",
          questions: 20,
        }}
        color="teal"
        border="2px solid "
      >
        <h2 style={{ color: "blue" }}>"Drink Pepsi"</h2>
      </Footer>
    </div>
  );
};

export default App;
