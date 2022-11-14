import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selected, setSelected] = useState([]);

  const arraySlicing = () => {
    const array = [
      {album: '@Wapnaija.net', collection: Array('1')},
      {album: 'DAMN', collection: Array('1')}
    ]

      const selectedIndex = selected.map(i => i.album).indexOf('DAMN');
      let newSelected = [];
      console.log(selectedIndex)
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, array[1]);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
      // array = [2, 9]
      console.log(newSelected)
      setSelected(newSelected)
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={arraySlicing}>Start Slicing Array</button>
      <h2>{`${selected.map(item=> {return item?.album})}`}</h2>
    </div>
  );
}
