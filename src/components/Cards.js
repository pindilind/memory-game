import React from "react";
import { useState } from "react";
import Card from "./Card";

function Cards() {

  //Sätter bilderna till ID, BILD och STATUS samt SORTERAR random vid omladdning
  const [items, setItems] = useState([
    { id: 1, img: 'https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/opengraph_color.png', stat: "" },
    { id: 1, img: 'https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/opengraph_color.png', stat: "" },
    { id: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png', stat: "" },
    { id: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png', stat: "" },
    { id: 3, img: 'https://cdn.pixabay.com/photo/2018/03/11/17/36/coffee-3217471__340.png', stat: "" },
    { id: 3, img: 'https://cdn.pixabay.com/photo/2018/03/11/17/36/coffee-3217471__340.png', stat: "" },
    { id: 4, img: 'https://news.cgtn.com/news/2020-09-20/Spider-flower-The-flower-with-a-distinctive-display-TVYLozFKg0/img/9c42156e261a4d2282370c03fce43a0a/9c42156e261a4d2282370c03fce43a0a.jpeg', stat: "" },
    { id: 4, img: 'https://news.cgtn.com/news/2020-09-20/Spider-flower-The-flower-with-a-distinctive-display-TVYLozFKg0/img/9c42156e261a4d2282370c03fce43a0a/9c42156e261a4d2282370c03fce43a0a.jpeg', stat: "" },
    { id: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/1200px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg', stat: "" },
    { id: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/1200px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg', stat: "" },
    { id: 6, img: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/1859-Martinique.web.jpg', stat: "" },
    { id: 6, img: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/1859-Martinique.web.jpg', stat: "" },
    { id: 7, img: 'https://www.sciencenewsforstudents.org/wp-content/uploads/2021/02/1030_LL_snow.jpg', stat: "" },
    { id: 7, img: 'https://www.sciencenewsforstudents.org/wp-content/uploads/2021/02/1030_LL_snow.jpg', stat: "" },
    { id: 8, img: 'https://images.squarespace-cdn.com/content/v1/583e92eb725e25dc11728f3c/1616935703147-EAGM2CNANWXV4AR8X9DG/pelago_brooklyn_hg_3r_diagonal_hires.jpg?format=1500w', stat: "" },
    { id: 8, img: 'https://images.squarespace-cdn.com/content/v1/583e92eb725e25dc11728f3c/1616935703147-EAGM2CNANWXV4AR8X9DG/pelago_brooklyn_hg_3r_diagonal_hires.jpg?format=1500w', stat: "" }
  ].sort(() => Math.random() - 0.5))

  const [prev, setPrev] = useState(-1);

  function check(current){
    if(items[current].id == items[prev].id){
        items[current].stat = "correct"
        items[prev].stat = "correct"
        setItems([...items])
        setPrev(-1)
    }else{
        items[current].stat = "wrong"
        items[prev].stat = "wrong"
        setItems([...items])
        setTimeout(() => {
            items[current].stat = ""
            items[prev].stat = ""
            setItems([...items])
            setPrev(-1)
        }, 1000)
    }
}
  function handleClick(id){
    if(prev === -1){
        items[id].stat = "active"
        setItems([...items])
        setPrev(id)
    }else{
        check(id)
    }
}

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}


    </div>
  )
}

export default Cards;