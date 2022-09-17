/**
 * Group objects by specified attributes.
 * @param {Array} objects           - groupable objects.
 * @param {...string} ...attributes - grouping attributes.
 * 
 * @returns {{object: Object, count: number}} groupping result: object and its count.
 */

function groupBy(objects, ...attributes) {
    return Object.entries(splitObjectsByAttributes(objects, attributes))
        .map(([_name, sameObjects]) => (
            { object: sameObjects[0], count: sameObjects.length }
        ))
}

function splitObjectsByAttributes(objects, attributes) {
    return objects.reduce((memo, object) => {
        const key = attributes.map((attribute) =>
            object[attribute] || null
        ).join(' ')

        memo[key] = [...memo[key] || [], object];
        /*memo[object[`${attribute}`]] = [...memo[object[`${attribute}`]] || [], object]; */

        return memo;
    }, {})
}

export default groupBy;
