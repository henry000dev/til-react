import React, {useState, useEffect} from 'react';
import MiddlePanel from './components/middle-panel/middle-panel';
import LeftPanel from './components/left-panel/left-panel';
import LessonInputDialog from './components/modal-dialog/lesson-input-dialog/lesson-input-dialog';
import MessageDialog from './components/modal-dialog/message-dialog/message-dialog';
import {getDateString} from './utils/utils';
import './app.css';

const LESSONS_STORAGE_KEY = "til-react.lessons";

function App() {
  const todaysDate = new Date();
  const [lessons, setLessons] = useState([]);
  const [addingLesson, setAddingLesson] = useState(false);
  const [dialogMessage, setDialogMessage] = useState({
    isShowing: false,
    title: "Title",
    message: "Message"
  });

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
    if (lessons.length >= 10) {
      setDialogMessage({
        isShowing: true,
        title: "Add Lesson",
        message: "Sorry, cannot add more than 10 lessons...\n\nIt's just a demo app after all 😀"
      });
      return;
    }

    setAddingLesson(true);
  }

  function showMessageDismissed(evt) {
    setDialogMessage({
      isShowing: false,
      title: "",
      message: ""
    });
  }

  return (
    <div id='app'>
      <LeftPanel todayHasLesson={todayHasLesson()} todaysDate={todaysDate} onAddLessonClicked={handleAddLessonClicked} />
      {addingLesson && <LessonInputDialog todaysDate={todaysDate} onAddLessonDone={handleAddLessonDone} onAddLessonCancelled={handleAddLessonCancelled} />}
      {dialogMessage.isShowing && <MessageDialog title={dialogMessage.title} message={dialogMessage.message} onDialogDismissed={showMessageDismissed} />}      
      <MiddlePanel lessons={lessons}/>
    </div>
  );
}

export default App;
