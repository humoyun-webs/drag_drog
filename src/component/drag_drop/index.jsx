import React, { useState } from "react";
import "./style.scss";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.svg";

const index = () => {
  const [cards, setcards] = useState([
    {
      id: 1,
      title1: "Новые",
      items: [
        {
          id: 1,
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного..",
          count: 3,
          textf: "255",
          img:  img1 ,
          job: "Рекруитер",
          name: "Алексей Щербаков",
        },
        {
          id: 2,
          title: "Маркетолог",
          desc: "Отдел маркетинга",
          count: 2,
          textf: 182,
          img:  img2 ,
          job: "Рекруитер",
          name: "Floyd Miles",
        },
        {
          id: 3,
          title: "МаркеМенеджер",
          desc: "Отдел продаж",
          count: 2,
          textf: 255,
          img:  img3 ,
          job: "Рекруитер",
          name: "Therese Webb",
        },
        {
          id: 4,
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного..",
          count: 3,
          textf: 255,
          img:  img4,
          job: "Рекруитер",
          name: "Venessa Johnson",
        },
      ],
    },
    {
      id: 2,
      title1: "tekushiy",
      items: [
        {
          id: 5,
          title: "PHP Developer",
          desc: "Housekeepers",
          count: 3,
          textf: 182,
          img: img1 ,
          job: "Рекруитер",
          name: "Kristin Watson",
        },
        {
          id: 6,
          title: "Маркетолог",
          desc: "Finance",
          count: 2,
          textf: 182,
          img:  img2 ,
          job: "Рекруитер",
          name: "Jacob Jones",
        },
        {
          id: 7,
          title: "UI UX Designer",
          desc: "Management",
          count: 3,
          textf: 182,
          img:  img3 ,
          job: "Рекруитер",
          name: "Wade Warren",
        },
        {
          id: 8,
          title: "Joomla Developer",
          desc: "Accaunting",
          count: 3,
          textf: 255,
          img:  img4 ,
          job: "Рекруитер",
          name: "Wade Warren",
        },
      ],
    },
    {
      id: 3,
      title1: "udaleniy",
      items: [
        {
          id: 9,
          title: "PHP Developer",
          desc: "Housekeepers",
          count: 3,
          textf: 182,
          img: img1 ,
          job: "Рекруитер",
          name: "Kristin Watson",
        },
        {
          id: 10,
          title: "Маркетолог",
          desc: "Finance",
          count: 2,
          textf: 182,
          img:  img2 ,
          job: "Рекруитер",
          name: "Jacob Jones",
        },
        {
          id: 11,
          title: "UI UX Designer",
          desc: "Management",
          count: 3,
          textf: 182,
          img:  img3 ,
          job: "Рекруитер",
          name: "Wade Warren",
        },
        
      ],
    },
    {
      id: 4,
      title1: "arxiv",
      items: [
        {
          id: 10,
          title: "PHP Developer",
          desc: "Housekeepers",
          count: 3,
          textf: 182,
          img: img1 ,
          job: "Рекруитер",
          name: "Kristin Watson",
        },
        {
          id: 11,
          title: "Маркетолог",
          desc: "Finance",
          count: 2,
          textf: 182,
          img:  img2 ,
          job: "Рекруитер",
          name: "Jacob Jones",
        },
        {
          id: 12,
          title: "UI UX Designer",
          desc: "Management",
          count: 3,
          textf: 182,
          img:  img3 ,
          job: "Рекруитер",
          name: "Wade Warren",
        },
        
      ],
    },
  ]);
  const [currentBoard, setCurrentBoard] = useState(null)
  const [currenItem, setCurrentItem] = useState(null)

  function dragoverhand(e) {
    e.preventDefault()
    if(e.target.className == "item"){
      e.target.style.boxShadow = '0 4px 3px gray'
    }

  }
  function onDragLeavehand(e) {
    e.target.style.boxShadow = 'none'
  }
  function onDragStarthand(e,board,item) {
    setCurrentBoard(board)
    setCurrentItem(item)
  }
  function onDragEndhand(e) {
    e.target.style.boxShadow = 'none'
  }
  function drophand(e,board,item) {
    e.preventDefault()
    const currenIndex = currentBoard.items.indexOf(currenItem)
    console.log( currentBoard.items.indexOf(currenItem));
    currentBoard.items.splice(currenIndex, 1)
    const dropIndex = board.items.indexOf(item)
    console.log(dropIndex);
    board.items.splice(dropIndex + 1, 0, currenItem)
    console.log(board);
    setcards(cards.map(b => {
      if(b.id === board.id){
     return board
      }
      if(b.id === currentBoard.id){
    return currentBoard
      }
    return b
    }))
  }

  function dropcardhand(e,board){
    board.items.push(currenItem)
    const currenIndex = currentBoard.items.indexOf(currenItem)
    currentBoard.items.splice(currenIndex, 1)
    setcards(cards.map(b => {
      if(b.id === board.id){
     return board
      }
      if(b.id === currentBoard.id){
    return currentBoard
      }
    return b
    }))
    e.target.style.boxShadow = 'none'
  }
  return (
    <div className="cards">
      {cards.map((board) => 
       
        <div className="card"
        onDragOver={(e)=>dragoverhand(e)}
        onDrop = {(e)=>dropcardhand(e,board)}>
          <div className="title">
            <h5>{board.title1}</h5>
          </div>
          {board.items.map((item) => 
            <div className="item"
            onDragOver={(e)=>dragoverhand(e)}
            onDragLeave={(e)=> onDragLeavehand(e)}
            onDragStart={(e)=>onDragStarthand(e,board,item)}
            onDragEnd ={(e)=>onDragEndhand(e)}
            onDrop={(e)=>drophand(e,board,item)}
            draggable={true}
             >
            
              <h5 key={item.id}>{item.title}</h5>
              <p className="desc">{item.desc}</p>
              <div className="btns">
                <button>В приоритете</button>
                <button>{item.count}</button>
                <button>{item.textf}</button>
              </div>
              <div className="profile">
                <img src={item.img} alt="img" />
                <div className="text">
                  <p>{item.job}</p>
                  <h6>{item.name}</h6>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default index;
