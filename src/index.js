/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus = 'family', knowsProgramming = true, config = {family: 4}) {
  let priority = arguments[2][arguments[0]];

  return arguments[1] == true ? Math.ceil(800 / priority) : Math.ceil(1300 /priority); 
};
  