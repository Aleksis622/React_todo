import { useState } from 'react';
import './DiariesList.css';
import Diary from "./Diary.jsx";
function DiariesList(){


const [diaries, setDiaries] = useState([
    { id: 1, 
      title:"Aiziet ar draugiem nopeldēties",
      body: "Biju jūrā līdz 15:00",
      date:"2025.04.06" },
    {
      id:2,
      title:"Paēst",
      body:"Hesburgerā paēdu",
      date:"2025.04.06"
},
   { 
     id:3,
     title:"Atpūsties",
     body:"Skatījos TV",
     date:"2025.04.06"
},
  {
     id:4,
     title:"Aiziet laicīgi gulēt",
     body:"Ievēlos gultā 2:00",
     date:"2025.04.06"
}    
  ]);
  return (
    <div className="diary-list">
      <h2>Dienasgrāmatas ieraksti</h2>
      {diaries.map(({ id, title, body, date }) => (
  < Diary key={id} title ={title} body={body} date={date} />))}

    
        
     
    </div>
  );
}












export default DiariesList