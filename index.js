
function validateEntries(entries) {
    let nonNumericFields = nonNumericEntries(entries).join(", ")

    if (nonNumericFields.length) {
        let alertMsg = `Los campos ${nonNumericFields} no son numereos`
        alert(alertMsg)
    }
}

function nonNumericEntries(entries) {
    let nonNumeric = []
    for (let key in entries) {
        if (isNaN(parseFloat(entries[key]))) {
            nonNumeric.push(key)
        }
    }
    return nonNumeric
}

function entriesToNumbers(entries) {
    for (let key in entries) {
        entries[key] = parseInt(entries[key])
    }
    return entries
}

function sumEntries(entries) {
    let result = 0
    for (let key in entries) {
        result += entries[key]
    }
    return result
}

function subEntries(entries) {
    let result;
    for (let key in entries) {
        if (!result) {
            result = entries[key]
        } else {
            result -= entries[key]
        }
    }
    return result
}

function divEntries(entries) {
    let result;
    for (let key in entries) {
        num = entries[key]
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
    let result = null
    for (let key in entries) {
        if (result == null) {
            result = entries[key]
        } else {
            result *= entries[key]
        }
    }
    return result
}

function orderEntriesAsc(entries) {
    let result = []
    for (let key in entries) {
        result.push(entries[key])
    }
    result.sort()
    return result
}

function orderEntriesDes(entries) {
    let result = []
    for (let key in entries) {
        result.push(entries[key])
    }
    result = result.sort((a, b) => b - a)
    return result
}
