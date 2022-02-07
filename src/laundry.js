/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
        let basket = new Set();
        let numOfClean = 0;
       
        for(let sock of cleanPile) {
          if (basket.has(sock)) {
            basket.delete(sock);
            numOfClean++;
          } else {
            basket.add(sock);
          }
        }
       
        if (noOfWashes === 0) {
          return numOfClean;
        }
       
        const unmatchedCleanPile = Array.from(basket);
       
        for (let sock of unmatchedCleanPile) {
          const index = dirtyPile.findIndex(i => i === sock);
          if (index !== -1 && noOfWashes > 0) {
            dirtyPile.splice(index, 1); //remove from dirtyPile
            noOfWashes--;// wash the sock
            numOfClean++;
          }
        }
       
        if (noOfWashes === 0 || dirtyPile.length === 0) {
          return numOfClean;
        }
       
        basket.clear();
       
        for (let sock of dirtyPile) {
          if (basket.has(sock) && noOfWashes > 1) {
            basket.delete(sock); //remove from basket
            noOfWashes -= 2;
            numOfClean++;
          } else {
            basket.add(sock);
          }
        }
       
        return numOfClean;
       }
       module.exports = getMaxPairs;

  
 
 
 //Laundry algorithm =======
 
 //noOfWashes;
  
 //cleanPile;
 //dirtyPile;
  
 //Find the number of matching socks in cleanPile; numClean;
 //Find the unmatched socks in cleanPile; [1, 2] unmatchedCleanPile;
  
 //Check if noOfWashes === 0?
  
 //If true => Return numClean;
  
 //Else:
 //Loop through unmatchedCleanPile
 //If sock is in dirtyPile and noOfWashes > 0
 //Remove sock from dirtyPile
 //then wash sock
 //and numClean++;
  
 //Check if noOfWashes === 0?
 //Check if dirtyPile === 0?
  
 //If true => Return numClean;
  
 //Else:
  
 //Create basket = [ ];
 //Loop through dirtyPile:
 //If sock is in basket and noOfWashes > 0
 //Remove sock from basket
 //Wash sock
 //numClean++;
  
 //Return numClean;

