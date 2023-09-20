function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    if (arr.length === 0) {
        return []; // Return an empty array if the input array is empty
    }

    const result = [];

    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    if (arr.length === 0) {
        return []; // Return an empty array if the input array is empty
    }

    const result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if(i % 2 === 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2.
    let newArr = [];
    for (let i = 1; i < arr.length; i *= 2) {
        newArr.push(arr[i]);
    }
    return newArr;
}


function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let newArr = [];
    for (let i = 1; i < arr.length; i *= n) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let newarr = [];

    if (arr.length === 0) {
        return []; // Return an empty array if the input array is empty
    }

    for (let i = 0; i < (arr.length/2); i++) {
        newarr.push(arr[i]);
    }
    return newarr;

}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let newarr = [];

    if (arr.length <= 1) {
        return []; // Return an empty array if the input array is empty
    }

    for (let i = (arr.length/2); i < arr.length; i++) {
        newarr.push(arr[i]);

    }
    return newarr;

}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
