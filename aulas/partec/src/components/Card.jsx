import React, {useState} from "react";

import Card from './Card';
import Forms from "./Forms"

function Main() {

  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [local, setLocal] = useState("");

  const [cards, setCards] = useState([])

  function handleData(event){
    const newCard = {
      description: description,
      date: date,
      local: local
    }

    let allCards = cards;
    allCards.push(newCard);
    setCards(allCards)

    console.log(cards)

    clearInput()
    }

    function clearInput(){
      setDescription("")
      setDate("")
      setLocal("")
    }

  return <>
    <Forms 
      setDescription={setDescription} 
      description={description} 
      date={date} local={local} 
      setDate={setDate} 
      setLocal={setLocal} 
      handleData={handleData} 
      clearInput={clearInput}/>
    <main>
      {
        cards.map(card => <Card description={card.description} date={card.date} local={card.local}/>)
      }
    </main>;
  </>
}

export default Main;