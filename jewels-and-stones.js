/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => S
  .split('')
  .filter(t => J.includes(t))
  .length
