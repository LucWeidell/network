
export function convertToQuery(object) {
  let htmlEncode = '?'
  for (const key in object) {
    htmlEncode += key + '=' + object[key] + '&'
  }
  // if (Object.keys(object)[1] === 'id') {
  //   htmlEncode = htmlEncode.substring(1, htmlEncode.length - 1)
  // }
  htmlEncode = htmlEncode.substring(0, htmlEncode.length - 1)
  return htmlEncode
}
