import React, {useState, useEffect} from 'react';
import MainContent from './components/main-content/main-content';
import SideBar from './components/sidebar/sidebar';
import LessonInputDialog from './components/modal-dialog/lesson-input-dialog/lesson-input-dialog';
import MessageDialog from './components/modal-dialog/message-dialog/message-dialog';
import {getDateString} from './utils/utils';
import './app.css';

// TODO: commenting
// TODO: context?
// TODO: Responsiveness

const LESSONS_STORAGE_KEY = "til-react.lessons";

function App() {
  const todaysDate = new Date();

  const [lessons, setLessons] = useState([]);
  const [addingLesson, setAddingLesson] = useState(false);
  const [updatingLesson, setUpdatingLesson] = useState(null);
  const [dialogMessage, setDialogMessage] = useState({
    isShowing: false,
    title: "Title",
    message: "Message"
  });

  useEffect(() => {
    let storedLessons = JSON.parse(localStorage.getItem(LESSONS_STORAGE_KEY));

    if (!storedLessons)
      storedLessons = [];

    setLessons(storedLessons);
  }, []);

  useEffect(() => {
    localStorage.setItem(LESSONS_STORAGE_KEY, JSON.stringify(lessons))
  }, [lessons])

  function todayHasLesson() {
    const todaysDateString = getDateString(todaysDate);
    const aDate = lessons.find((aDate) => aDate.date === todaysDateString);
    return aDate !== undefined;
  }

  function handleAddingLessonCancelled(evt) {
    setAddingLesson(false);
  }

  function handleAddingLessonDone(evt, lesson) {
    const newLessons = [...lessons];

    newLessons.unshift(lesson);
   
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

  function handleUpdatingLessonCancelled(evt, lesson) {
    setUpdatingLesson(null);
  }

  function handleUpdatingLessonDone(evt, updatedLesson) {
    const lessonIndex = lessons.findIndex((lesson) => lesson.date === updatedLesson.date);
    
    const newLessons = [...lessons];
    newLessons[lessonIndex] = updatedLesson;

    setLessons(newLessons);

    setUpdatingLesson(null);
  }

  function handleUpdatingLessonClicked(evt, lesson) {
    setUpdatingLesson(lesson);
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
      <SideBar todayHasLesson={todayHasLesson()} todaysDate={todaysDate} onAddLessonClicked={handleAddLessonClicked} />
      {updatingLesson != null && <LessonInputDialog isAddingLesson={false} lessonDate={updatingLesson.date} lessonText={updatingLesson.text} onEditingLessonDone={handleUpdatingLessonDone} onEditingLessonCancelled={handleUpdatingLessonCancelled} />}
      {addingLesson && <LessonInputDialog isAddingLesson={true} lessonDate={getDateString(todaysDate)} lessonText={null} onEditingLessonDone={handleAddingLessonDone} onEditingLessonCancelled={handleAddingLessonCancelled} />}
      {dialogMessage.isShowing && <MessageDialog title={dialogMessage.title} message={dialogMessage.message} onDialogDismissed={showMessageDismissed} />}      
      <MainContent lessons={lessons} onEditLessonClicked={handleUpdatingLessonClicked} />
    </div>
  );
}

export default App;
