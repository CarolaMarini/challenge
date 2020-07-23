/* let button = document.querySelector('#btn')

if(button){onLoad(button)}

function onLoad(button){
    button.addEventListener('click', () => {
        let formResponse = document.querySelector('#myForm')
        nonNumericEntries(formDataToJson(formResponse))
      })            
}
 */
function formDataToJson(data) {
    let entries = Array.from(new FormData(data))
    return Object.fromEntries(entries)
}

function nonNumericEntries(entries) {
    let nonNumeric = []
    for (let key in entries) {
        if (isNaN(Number(entries[key]))) {
            nonNumeric.push(key)
        }
    }
    return nonNumeric
}

function sumEntries(entries) {
    let result = 0
    for (let key in entries) {
        result += Number(entries[key])
    }
    return result
}

function subEntries(entries) {
    let result;
    for (let key in entries) {
        let num = Number(entries[key])
        if (!result) {
            result = num
        } else {
            result -= num
        }
    }
    return result
}

function divEntries(entries) {
    let result;
    for (let key in entries) {
        let num = Number(entries[key])
        if (!(num)) {
            return null
        }
        if (!result) {
            result = num
        } else {
            result /= num
        }
    }
    return result
}

function multiplyEntries(entries) {
    let result;
    for (let key in entries) {
        let num = Number(entries[key])
        if (!result) {
            result = num
        } else {
            result *= num
        }
    }
    return result
}

function orderEntriesAsc(entries) {
    let result = []
    for (let key in entries) {
        let num = Number(entries[key])
        result.push(num)
    }
    result.sort()
    return result
}

function orderEntriesDes(entries) {
    let result = []
    for (let key in entries) {
        let num = Number(entries[key])
        result.push(num)
    }
    result = result.sort((a, b) => b - a)
    return result
}