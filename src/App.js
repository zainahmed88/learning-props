import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alerts, setAlerts] = useState([]);
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
  let addAlert = () => {
    setAlerts([...alerts, {}]);
  };

  let removeAlert = (i) => {
    let newAlerts = [...alerts];
    newAlerts.splice(i, 1);
    setAlerts(newAlerts);
  };
  return (
    <div className="App">
      <>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectedItem}
        ></ListGroup>

        {alerts.map((element, index) => (
          <Alert
            key={index}
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
            onClose={() => {
              removeAlert(index);
              console.log("Alert removed");
            }}
          ></Alert>
        ))}

        <Button
          color="primary"
          onClicked={() => {
            addAlert();
            console.log("Alert added");
          }}
        >
          Add Alert
        </Button>
      </>
    </div>
  );
}
export default App;
