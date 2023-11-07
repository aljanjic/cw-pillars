function pillars(pNumber, distance, pWidth) {
  return pNumber >1 ? (pNumber - 2) * pWidth + distance * (pNumber - 1)*100 : 0;
}

module.exports = pillars;




