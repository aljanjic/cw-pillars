function pillars(pNumber, distance, pWidth) {

  if(pNumber <= 1) return 0;

  return (pNumber - 2) * pWidth + distance * (pNumber - 1)*100;
}

module.exports = pillars;




