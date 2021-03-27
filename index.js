// 1. Given two variables num1 and num2, create a function that would swap the values of num1 and num2 without the use of a third variable. Hint: Make use of arithmetic operations as needed.
function switchNumber(num1, num2) {
    // Rule 1: Do not create a new variable.
    // Rule 2: Use an arithmetic operation.

    // Code area to swap num1 and num2.
    


    // Do not change anything beyond this line. 

    return { num1, num2 };
}

// 2. Create a function that would count the number of times a letter occurs in a string. Other things to consider: the input to the function must be a letter and a string.
function countLetter(letter, sentence) {
    let result = 0;

    // Using a loop, check first whether the letter is a single character.
    // If letter is a single character, count how many times a letter has occurred in a given sentence then return count.
    // If letter is invalid, return undefined.

    
}

// 3. Given a string, determine if it is a palindrome or not. A palindrome is a string that is the same when read from left to right and right to left. Usage of Array.reverse() IS NOT allowed.
function isPalindrome(phrase) {
    // If a phrase is palindrome, return true. If not, return false.
    // The function should first remove all spaces within the phrase.
    // The function should also check for the letters regardless of its casing.

    
}

// 4. Given a string, create a function that will output true if given string is an isogram and false otherwise. Disregard character case. An isogram is a word with no repeating characters (ie. "city" is an isogram, "hello" is not)
function isIsogram(text) {
    // An isogram is a word where there are no repeating letters.
    // The function should disregard text casing before doing anything else.
    // If the function finds a repeating letter, return false. Otherwise, return true.

    
}

// 5. Students aged 13 to 21 years old as well as senior citizens (65 and up) both enjoy a 20% discount on purchased goods. Students below 13 years of age cannot purchase without their parent's consent. Given an age and a price, create a function that will output UNDEFINED if age is below permitted age or the final purchase price otherwise. Final purchase price must have TWO decimal places.
function purchase(age, price) {
    // Return undefined for people aged below 13.
    // Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
    // Return the rounded off price for people aged 22 to 64.

    
}

// 6. Create a function that will return an array of DISTINCT categories that have at least ONE of its items sold out. If all items are in stock, an empty array will be returned instead.
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


}

// 7. Given 2 arrays of voter ID's representing the votes of two different candidates, create a function that will return an array of voter ID's who voted for BOTH candidates. If no flying voters identified, return an empty array instead.
function findFlyingVoters(candidateA, candidateB) {
    // Find voters who voted for both candidate A and candidate B.

    // The passed values from the test are the following:
    // candidateA: ['LIWf1l', 'V2hjZH', 'rDmZns', 'PvaRBI', 'i7Xw6C', 'NPhm2m']
    // candidateB: ['kcUtuu', 'LLeUTl', 'r04Zsl', '84EqYo', 'V2hjZH', 'LIWf1l']

    // The expected output after processing the candidates array is ['LIWf1l', 'V2hjZH'].

    
}

// 8. Given an array of objects each representing an ad campaign of a particular brand, create a function that will return an array of objects with the brand name and their corresponding adEfficiency which is computed as (customers gained / expenditure) x 100. SORT this array in DESCENDING order based on adEfficiency.
function calculateAdEfficiency(adCampaigns) {
    // Sort the ad efficiency according to the most to least efficient.

    // The passed campaigns array from the test are the following:
    // { brand: 'Brand X', expenditure: 12345.89, customersGained: 4879 }
    // { brand: 'Brand Y', expenditure: 22456.17, customersGained: 6752 }
    // { brand: 'Brand Z', expenditure: 18745.36, customersGained: 5823 }

    // The efficiency is computed as (customersGained / expenditure) x 100.

    // The expected output after processing the campaigns array are:
    // { brand: 'Brand X', adEfficiency: 39.51922461645131 }
    // { brand: 'Brand Z', adEfficiency: 31.063687227132476 }
    // { brand: 'Brand Y', adEfficiency: 30.06746030155632 }

    
}

module.exports = {
    switchNumber,
    countLetter,
    isPalindrome,
    isIsogram,
    purchase,
    findHotCategories,
    findFlyingVoters,
    calculateAdEfficiency
};