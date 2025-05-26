import { useState } from 'react';
import './DiariesList.css';
function Diary(){


const [Diaries, setDiaries] = useState([
    { id: 1, task: "Iemācīties React", completed: false },
    { id: 2, task: "Iemācīties Laravel", completed: true },
    { id: 3, task: "Nopirkt pienu", completed: false },
    { id: 4, task: "Nopirkt biezpienu", completed: false },
  ]);

}












export default Diary