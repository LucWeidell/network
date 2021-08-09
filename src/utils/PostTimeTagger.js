// FIXME not sure if needed yet
// EX: const date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...
// DB GIVES:
// "createdAt": "2021-08-07T22:11:21.281Z",
export function postAgeTag(dateToCompare) {
  const now = new Date()
  let postTimeTag = ''
  if (now.getYear() > dateToCompare.getYear()) {
    postTimeTag += (now.getYear() - dateToCompare.getYear()) + 'Y'
    return postTimeTag
  } else if (now.getMonth() > dateToCompare.getMonth()) {
    postTimeTag += (now.getMonth() - dateToCompare.getMonth()) + 'M'
  } else if (now.getDay() > dateToCompare.getDay()) {
    postTimeTag += (now.getDay() - dateToCompare.getDay()) + 'D'
  } else if (now.getHours() > dateToCompare.getHours()) {
    postTimeTag += (now.getDay() - dateToCompare.getDay()) + 'h'
  } else {
    postTimeTag += (now.getMinutes() - dateToCompare.getMinutes()) + 'm'
  }
  return postTimeTag
}
