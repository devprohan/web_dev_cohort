function trafficGrade(signal) {
  if (signal === 'red') {
    return "Rukja Bhai";
  } else if (signal === 'yellow') {
    return "Tayar Rah Bhai";
  } else if (signal === 'green') {
    return "Bhaga Bhai";
  } else {
    return "else conition";
  }
}
  console.log(trafficGrade('yellow'));
