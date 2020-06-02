import React, {useState, useEffect} from 'react';
import MainContent from './components/main-content/main-content';
import SideBar from './components/sidebar/sidebar';
import LessonInputDialog from './components/modal-dialog/lesson-input-dialog/lesson-input-dialog';
import MessageDialog from './components/modal-dialog/message-dialog/message-dialog';
import {getDateString} from './utils/utils';
import TodayContext from './contexts/today.context';
import './app.css';

const LESSONS_STORAGE_KEY = "til-react.lessons";

function App() {
  const todaysDate = new Date();

  // Renders lessons. A lesson looks like this: {date: "May 19, 2020", text: "I learned..."}. See sample.json.
  const [lessons, setLessons] = useState([]);

  // Renders the add-lesson-dialog.
  const [addingLesson, setAddingLesson] = useState(false);

  // Renders the update-lesson-dialog.
  const [updatingLesson, setUpdatingLesson] = useState(null);

  // Renders the message dialog.
  const [dialogMessage, setDialogMessage] = useState({
    isShowing: false,
    title: "Title",
    message: "Message"
  });

  // This is the initial app start. Effect does not depend on anything, since nothing in the dependency array.
  useEffect(() => {
    let storedLessons = JSON.parse(localStorage.getItem(LESSONS_STORAGE_KEY));

    if (!storedLessons)
      storedLessons = [];

    setLessons(storedLessons);
  }, []);

  // The effect depends on whenever the lessons changes (lessons in the dependency array).
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

  function handleDeletingLessonDone(evt, deletedLesson) {
    const lessonIndex = lessons.findIndex((lesson) => lesson.date === deletedLesson.date);
    
    const newLessons = [...lessons];
    newLessons.splice(lessonIndex, 1);

    setLessons(newLessons);

    setUpdatingLesson(null);
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
    // Using
    <TodayContext.Provider value={todaysDate}>
      <div id='app'>
        {/* With this, we use the React Context APII to demonstrate how to use it. */}
        <SideBar todayHasLesson={todayHasLesson()} onAddLessonClicked={handleAddLessonClicked} />

        {/* Using conditional rendering for the dialogs. Note, only one dialog can show at any given time. */}
        {updatingLesson != null && <LessonInputDialog isAddingLesson={false} lessonDate={updatingLesson.date} lessonText={updatingLesson.text} onEditingLessonDone={handleUpdatingLessonDone} onDeletingLessonDone={handleDeletingLessonDone} onEditingLessonCancelled={handleUpdatingLessonCancelled} />}
        {addingLesson && <LessonInputDialog isAddingLesson={true} lessonDate={getDateString(todaysDate)} lessonText={null} onEditingLessonDone={handleAddingLessonDone} onEditingLessonCancelled={handleAddingLessonCancelled} />}
        {dialogMessage.isShowing && <MessageDialog title={dialogMessage.title} message={dialogMessage.message} onDialogDismissed={showMessageDismissed} />}      

        <MainContent lessons={lessons} onEditLessonClicked={handleUpdatingLessonClicked} />
      </div>
    </TodayContext.Provider>
  );
}

export default App;
