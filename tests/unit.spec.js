
let rewire = require('rewire');
let app = rewire('../index.js');
let nonNumericEntries = app.__get__('nonNumericEntries')
let sumEntries = app.__get__('sumEntries')
let subEntries = app.__get__('subEntries')
let divEntries = app.__get__('divEntries')
let multiplyEntries = app.__get__('multiplyEntries')
let orderEntriesAsc = app.__get__('orderEntriesAsc')
let orderEntriesDes = app.__get__('orderEntriesDes')

// done - Chequear valores de entrada
// pending - Si hay algun valor no numerico mostrar alert con campo de error
// si todos los valores son numericos hacer sum
// - Sum de todos los valores.
// - Div de todos los valores en orden.
// - Resta de todos los valores de manera secuencial.
// - Ordenar los valores ordenados de maner desc y ascc.


describe("#nonNumericEntries", function () {

    test("when entries are all numeric it returns empty array", function () {
        entries = { a: "4", b: "5", c: "7" }
        expect(nonNumericEntries(entries)).toEqual([])
    })

    test("when some values are NaN it returns an array of keys with invalid values", function () {
        entries = { a: "4", b: "not a numbeer", c: "also not a number" }
        expect(nonNumericEntries(entries)).toEqual(['b', 'c'])
    })

})

describe("#sumEntries", function () {
    test("when receiving entries with numbers it sums all the numberes", function () {
        entries = { a: "1", b: "2", c: "3" }
        expect(sumEntries(entries)).toEqual(6)
    })
})

describe("#subEntries", function () {
    test("when receiving entries with numbers it substracts all the numberes", function () {
        entries = { a: "5", b: "2", c: "1" }
        expect(subEntries(entries)).toEqual(2)
    })
})

describe("#divEntries", function () {
    test("when any of the entries is 0 it returns null", function () {
        entries = { a: "5", b: "0", c: "1" }
        expect(divEntries(entries)).toEqual(null)
    })

    test("when none of the entries are 0 it divides all the entries in order", function () {
        entries = { a: "20", b: "2", c: "2" }
        expect(divEntries(entries)).toEqual(5)
    })
})

describe("#multiplyEntries", function () {
    test("when receiving entries with numbers it multiplies all the numberes", function () {
        entries = { a: "5", b: "2", c: "1" }
        expect(multiplyEntries(entries)).toEqual(10)
    })
})

describe("#orderEntriesAsc", function () {
    test("when receiving entries with numbers sorts them in ascendent order", function () {
        entries = { a: "5", b: "2", c: "1" }
        expect(orderEntriesAsc(entries)).toEqual([1, 2, 5])
    })
})


describe("#orderEntriesDes", function () {
    test("when receiving entries with numbers sorts them in descendant order", function () {
        entries = { a: "2", b: "5", c: "1" }
        expect(orderEntriesDes(entries)).toEqual([5, 2, 1])
    })
})


