import React, {useState, useEffect} from 'react';
import MiddlePanel from './components/middle-panel/middle-panel';
import LeftPanel from './components/left-panel/left-panel';
import LessonInputDialog from './components/modal-dialog/lesson-input-dialog/lesson-input-dialog';
import {getDateString} from './utils/utils';
import './app.css';

const LESSONS_STORAGE_KEY = "til-react.lessons";

function App() {
  const todaysDate = new Date();
  const [lessons, setLessons] = useState([]);
  const [addingLesson, setAddingLesson] = useState(false);

  useEffect(() => {
    const storedLessons = JSON.parse(localStorage.getItem(LESSONS_STORAGE_KEY));

    setLessons(storedLessons);
  } ,[]);

  useEffect(() => {
    localStorage.setItem(LESSONS_STORAGE_KEY, JSON.stringify(lessons))
  }, [lessons])

  function todayHasLesson() {
    const todaysDateString = getDateString(todaysDate);
    const aDate = lessons.find((aDate) => aDate.date === todaysDateString);
    return aDate !== undefined;
  }

  function handleAddLessonCancelled(evt) {
    setAddingLesson(false);
  }

  function handleAddLessonDone(evt, lessonText) {
    const newLessons = [...lessons];

    newLessons.unshift({
      date: getDateString(todaysDate),
      text: lessonText
    });
   
    setLessons(newLessons);

    setAddingLesson(false);
  }

  function handleAddLessonClicked(evt) {
    setAddingLesson(true);
  }

  return (
    <div id='app'>
      <LeftPanel todayHasLesson={todayHasLesson()} todaysDate={todaysDate} onAddLessonClicked={handleAddLessonClicked} />
      {addingLesson && <LessonInputDialog todaysDate={todaysDate} onAddLessonDone={handleAddLessonDone} onAddLessonCancelled={handleAddLessonCancelled} />}
      <MiddlePanel lessons={lessons}/>
    </div>
  );
}

export default App;
