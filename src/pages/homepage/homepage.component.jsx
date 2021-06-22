//////////////// For Testing ////////

import React from "react";
import firebase from "../../component/firebase/firebase.utils";
//import { SpellInput } from "./SpellInput";
const form = document.querySelector("#add-cafe-form");
function App() {
  const [spells, setSpells] = React.useState([]);
  //const [newSpellName, setNewSpellName] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      // const data = await db.collection("User").doc(Book).get();
      // setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      db.collection("Books")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            console.log(doc.data());
            //setSpells({ ...doc.data(), id: doc.id })
          });
        });

      // data.docs.map((doc)=>console.log(doc.data));
    };
    fetchData();
  }, []);

  return (
    <ul>
      {spells.map((spell) => (
        <li key={spell.name}>{spell.name}</li>
      ))}
    </ul>
  );
}

export default App;
