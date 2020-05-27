import React, {useState, useEffect} from 'react';
import MiddlePanel from './components/middle-panel/middle-panel';
import LeftPanel from './components/left-panel/left-panel';
import RightPanel from './components/right-panel/right-panel';
import './app.css';

const LESSONS_STORAGE_KEY = "til-react.lessons";

function App() {
  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const storedLessons = JSON.parse(localStorage.getItem(LESSONS_STORAGE_KEY));
    
    // const storedLessons = [
    //   {
    //     date: "01-01-2020",
    //     text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum animi officia magnam provident inventore. Porro quas quae incidunt doloremque at optio accusamus, numquam ipsum. Vel est fugit optio? Iure, ipsum?"
    //   },
    //   {
    //     date: "02-01-2020",
    //     text: "Lorem, ipsum dolor amet consectetur adipisicing elit. A distinctio in quaerat nesciunt. Expedita inventore delectus libero temporibus aliquid ut tempora accusantium voluptate hic modi architecto, obcaecati sapiente alias fuga?"
    //   },
    //   {
    //     date: "03-01-2020",
    //     text: "Lorem ipsum, adipisicing elit. Distinctio magni, a vero adipisci officia possimus ipsa corporis quas, perspiciatis autem sequi consectetur qui architecto. Nemo provident quaerat veniam obcaecati quae incidunt doloremque at optio accusamus, numquam ipsum. Vel est fugit optio? Iure, ipsum?"
    //   },
    //   {
    //     date: "04-01-2020",
    //     text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum animi officia magnam provident inventore. Porro quas quae incidunt doloremque at optio accusamus, numquam ipsum. Vel est fugit optio? Iure, ipsum?"
    //   },
    //   {
    //     date: "05-01-2020",
    //     text: "Lorem dolor, sit amet consectetur adipisicing elit. Laborum animi officia magnam . Labore numquam inventore aperiam corporis? Quisquam esse, possimus reiciendis nulla magni atque sapiente aspernatur eveniet sed  optio? Iure, ipsum?"
    //   }
    // ];
    // console.log(JSON.stringify(storedLessons));

    setLessons(storedLessons);
  } ,[]);

  function getTodaysDateParts() {
    const dateAsString = new Date();
    
    return {
      year: dateAsString.getFullYear(),
      month: dateAsString.toLocaleString('default', {month: 'long'}),
      day: dateAsString.getDate()
    };
  }

  return (
    <div id='app'>
      <LeftPanel todaysDate={getTodaysDateParts()}/>
      <MiddlePanel lessons={lessons} />
      <RightPanel />
    </div>
  );
}

export default App;
