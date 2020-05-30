function getDateParts(aDate) {
    return {
      year: aDate.getFullYear(),
      month: aDate.toLocaleString('default', {month: 'long'}),
      day: aDate.getDate()
    };
}

function getDateString(aDate) {
  return aDate.toLocaleDateString('default', { year: 'numeric', month: 'long', day: 'numeric' });
}

function createLesson(lessonDate, lessonText) {
  return {
    date: lessonDate,
    text: lessonText
  };
}

export {getDateParts, getDateString, createLesson};