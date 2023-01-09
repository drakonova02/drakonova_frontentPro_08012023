const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

console.log(array);

if(array.length) {

    // Task 1

    let positiveSum = 0;
    let positiveQuant = 0;
    let negativeQuant = 0;
    let positiveEvenQuant = 0;
    let positiveOddQuant = 0;
    let positiveEvenSum = 0;
    let positiveOddSum = 0;
    let positiveMult = 1;

    for(const elem of array) {
        if(elem > 0) {
            ++positiveQuant;
            positiveSum += elem;
            positiveMult *= elem;

            if(elem % 2 === 0) {
                ++positiveEvenQuant;
                positiveEvenSum += elem;

            } else {
                ++positiveOddQuant;
                positiveOddSum += elem;
            }
        } else if(elem < 0) {
            ++negativeQuant;
        }
    }

    console.log(`Sum of positive element is ${positiveSum}`);
    console.log(`Quantity of positive element is ${positiveQuant}`);

    // Task 2

    const minElem = Math.min(...array);
    const minElemPosition = array.indexOf(minElem) + 1;

    console.log(`Minimal element is ${minElem}`);
    console.log(`Minimal element's position is ${minElemPosition}`);

    // Task 3

    const maxElem = Math.max(...array);
    const maxElemPosition = array.indexOf(maxElem) + 1;

    console.log(`Maximal element is ${maxElem}`);
    console.log(`Maximal element's position is ${maxElemPosition}`);

    // Task 4

    console.log(`Quantity of negative number is ${negativeQuant}`);

    // Task 5

    console.log(`Quantity of odd positive number is ${positiveOddQuant}`);

    // Task 6

    console.log(`Quantity of even positive number is ${positiveEvenQuant}`);

    // Task 7

    console.log(`Sum of even positive number is ${positiveEvenSum}`);

    // Task 8

    console.log(`Sum of odd positive number is ${positiveOddSum}`);

    // Task 9

    positiveQuant ? console.log(`Mult of positive number is ${positiveMult}`) : console.log('No. positive number');

    // Task 10

    array.forEach(function(elem) {
        if(elem !== maxElem) {
            elem = 0;
        }
    })

    console.log(array);
} else {
    console.log('Array is empty')
}