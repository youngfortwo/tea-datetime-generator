function index(name) {
    return 'hello ' + name + ', now is ' + Date();
}
function generateFormattedDate(format) {
  const currentDate = new Date();
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  };
  return new Intl.DateTimeFormat('en-US', options).format(currentDate);
}
module.exports = {
    index,
    generateFormattedDate
}
