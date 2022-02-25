import React from "react";

function Card({item, id, handleClick}) {

  const itemClass = item.stat ? " active " + item.stat : ""

  console.log(item)
  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
    <img src={item.img} alt="pic" />
    </div>
  )
}


export default Card;