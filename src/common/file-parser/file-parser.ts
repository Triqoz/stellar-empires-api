/**
 * parse user input
 * @param source string of raw empire data
 */
import { keyToCamelCase } from './util'

export const parseFile = (source: string): object => {
    let prepared = prepare(source)
    let parsed = extract(prepared)
    return clean(parsed)
}

/**
 * Partial trim, split on linebreaks and slice irrelevant data
 * @param source string raw empire date from suer
 * @return string[] prepared source
 */
const prepare = (source: string): string[] => {
    let transformed = source.replace(/\t/g, '').replace(/\n/g, '')
    let split = transformed.split('\r')
    return split.slice(2, split.length - 2)
}

/**
 * Turn a given string into a json object or array given its contents
 * @param source string[] prepared empire string
 * @return object|string[]
 */
const extract = (source: string[]): object | string[] => {
    // '=' count of the source
    let count = 0
    source.forEach(line => {
        if (line.includes('=')) count++
    })

    // if it doesn't contain key-value pairs return an array of the values
    if (count === 0) return source.map(str => str.replace(/"/g, '')).slice(0, source.length)

    let parsed: object = {}
    let openingIndex: number = null
    let openObjects: number = 0
    let key: string = null
    let value: string = null

    for (let i = 0; i < source.length; i++) {
        let current: string = source[i].trim()
        let split: string[] = current.split('=')

        // If we are opening an object
        if (current.includes('{')) {
            openObjects++
            // and it's the first one
            if (openingIndex === null) {
                key = keyToCamelCase(split[0])
                openingIndex = i
            }
            continue
        }

        // If we are closing an object
        if (current.includes('}')) {
            openObjects--
            if (openingIndex !== null && openObjects === 0) {
                let obj = source.slice(openingIndex + 1, i)
                parsed[key] = extract(obj)
                openingIndex = null
            }
            continue
        }

        if (openingIndex !== null) continue

        // Else we have a key value pair that isn't an object
        value = split.slice(1).reduce((a, b) => a + b).replace(/"/g, '')
        key = keyToCamelCase(split[0])

        // If the key exists, turn it into an array
        if (parsed.hasOwnProperty(key)) {
            let existingValue = parsed[key]
            if (typeof existingValue === 'string') parsed[key] = [parsed[key], value]
            else parsed[key].push(value)
        } else {
            parsed[key] = value
        }
    }
    return parsed
}

/**
 * Clean the final object up, by removing null values and correcting grammar on fields
 * @param parsed object
 * @return object cleaned object
 */
const clean = (parsed: object): object => {
    parsed['ethics'] = parsed['ethic']
    delete parsed['ethic']
    parsed['empireFlag']['colors'].splice(2)
    parsed['species']['traits'] =  parsed['species']['trait']
    if(parsed['secondarySpecies']['trait'] !== undefined) parsed['secondarySpecies']['traits'] = parsed['secondarySpecies']['trait']
    return parsed
}