/**
 * Turns a word like 'test_word' to testWord
 * @param key string
 * @return string key to camel case
 */
export const keyToCamelCase = (key: string): string => {
    const split = key.split('_')
    return split.reduce((a, b) => a + b.charAt(0).toUpperCase() + b.substring(1, b.length))
}