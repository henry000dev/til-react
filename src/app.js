import React, {useState, useEffect} from 'react';
import MiddlePanel from './components/middle-panel/middle-panel';
import LeftPanel from './components/left-panel/left-panel';
import RightPanel from './components/right-panel/right-panel';
import LessonInputDialog from './components/modal-dialog/lesson-input-dialog/lesson-input-dialog';
import './app.css';

const LESSONS_STORAGE_KEY = "til-react.lessons";

function App() {
  const [lessons, setLessons] = useState([]);
  const [addLesson, setAddLesson] = useState(false);
  
  useEffect(() => {
    const storedLessons = JSON.parse(localStorage.getItem(LESSONS_STORAGE_KEY));

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

  function handleAddLessonCancelled(evt) {
    setAddLesson(false);
  }

  function handleAddLessonDone(evt) {
    setAddLesson(false);
  }

  function handleAddLesson(evt) {
    setAddLesson(true);
  }

  return (
    <div id='app'>
      <LeftPanel todaysDate={getTodaysDateParts()} onAddLessonClicked={handleAddLesson} />
      {addLesson && <LessonInputDialog onAddLessonDone={handleAddLessonDone} onAddLessonCancelled={handleAddLessonCancelled} />}
      <MiddlePanel lessons={lessons}/>
      <RightPanel />
    </div>
  );
}

export default App;
