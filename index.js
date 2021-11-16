function countLetter(letter, sentence) {
    let result = 0;
    
    // Check first whether the letter is a single character.
    // If letter is a single character, count how many times a letter has occurred in a given sentence then return count.
    // If letter is invalid, return undefined.
    if(letter.length == 1){
        for (let index = 0; index < sentence.length; index++) {
            if(letter == sentence[index]){
                result++;
            }            
        }
        return result;
    }
    else{
        return undefined;
    }
}


function isIsogram(text) {
    // An isogram is a word where there are no repeating letters.
    // The function should disregard text casing before doing anything else.
    // If the function finds a repeating letter, return false. Otherwise, return true.

    //Steps
    //loop through all letters
    //another loop to compare the letters with each other letter
    //make sure to not include the letter compared

    text.toLowerCase();
    let letter;
    
    for (let index = 0; index < text.length; index++) {
        letter = text[index];
        let count = 0;
        for (let i=0; i< text.length -1; i++) {
            if(letter == text[i]){
                count++;
            }
            if(count > 1){
                return false;
                break;
            }
        }        
    }
    return true;
    
    

    
}

function purchase(age, price) {
    // Return undefined for people aged below 13.
    // Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
    // Return the rounded off price for people aged 22 to 64.
    // The returned value should be a string.

    //Steps:
    //Check if age < 13, return undefined if true
    //return discount of 20%(multiply by .8) if 12 < age < 22 && age >= 65
    //return rounded off price for other ages(you can put this in else)
    if(age < 13){
        return undefined;
    }
    else if( (12 < age && age < 22) || age > 64){
        return ((Math.round((price * 0.8) * 100))/100).toString();
    }
    else{
        return ((Math.round(price*100))/100).toString();
    }


    
}

function findHotCategories(items) {
    // Find categories that has no more stocks.
    // The hot categories must be unique; no repeating categories.

    // The passed items array from the test are the following:
    // { id: 'tltry001', name: 'soap', stocks: 14, category: 'toiletries' }
    // { id: 'tltry002', name: 'shampoo', stocks: 8, category: 'toiletries' }
    // { id: 'tltry003', name: 'tissues', stocks: 0, category: 'toiletries' }
    // { id: 'gdgt001', name: 'phone', stocks: 0, category: 'gadgets' }
    // { id: 'gdgt002', name: 'monitor', stocks: 0, category: 'gadgets' }

    // The expected output after processing the items array is ['toiletries', 'gadgets'].
    // Only putting return ['toiletries', 'gadgets'] will not be counted as a passing test during manual checking of codes.

    //use find() to get categories that have 0 stocks
    //add the categories to a certain variable to be returned
    let toReturn = [];
    items.forEach(function(items){
        if(items.stocks === 0){
            toReturn.push(items.category);
        }
    } )
    //using filter to remove redundant results
    let uniqueReturn = toReturn.filter((value, index, array) => array.indexOf(value) === index);
    return uniqueReturn;

}

function findFlyingVoters(candidateA, candidateB) {
    // Find voters who voted for both candidate A and candidate B.

    // The passed values from the test are the following:
    // candidateA: ['LIWf1l', 'V2hjZH', 'rDmZns', 'PvaRBI', 'i7Xw6C', 'NPhm2m']
    // candidateB: ['kcUtuu', 'LLeUTl', 'r04Zsl', '84EqYo', 'V2hjZH', 'LIWf1l']

    // The expected output after processing the candidates array is ['LIWf1l', 'V2hjZH'].
    // Only putting return ['LIWf1l', 'V2hjZH'] will not be counted as a passing test during manual checking of codes.
    commonVoters = candidateA.filter(function(index) {
        return candidateB.indexOf(index) !== -1;
    })

    return commonVoters;
}

module.exports = {
    countLetter,
    isIsogram,
    purchase,
    findHotCategories,
    findFlyingVoters
};