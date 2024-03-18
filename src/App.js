import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertShow, setAlertShow] = useState(false);
  let items = [
    { key: 0, value: "New York" },
    { key: 1, value: "San Francisco" },
    { key: 2, value: "Tokyo" },
    { key: 3, value: "London" },
    { key: 4, value: "Paris" },
  ];

  const handleSelectedItem = (item) => {
    console.log(item);
  };
  return (
    <div className="App">
      <>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectedItem}
        ></ListGroup>
        {alertShow && (
          <Alert
            onClose={() => {
              setAlertShow(false);
            }}
          />
        )}
        <Button
          color="primary"
          onClicked={() => {
            console.log("Clicked");
            setAlertShow(true);
          }}
        >
          Clicked
        </Button>
      </>
    </div>
  );
}
export default App;
