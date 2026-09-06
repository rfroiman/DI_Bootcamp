// ==========================================
// DAILY CHALLENGE - UNION TYPE VALIDATOR
// ==========================================

function validateUnionType(
    value: any,
    allowedTypes: string[]
): boolean {

    const valueType = typeof value;

    for (let type of allowedTypes) {

        if (valueType === type) {
            return true;
        }
    }

    return false;
}


// Tests

console.log(validateUnionType("Hello", ["string", "number"]));
// true

console.log(validateUnionType(25, ["string", "number"]));
// true

console.log(validateUnionType(true, ["string", "number"]));
// false

console.log(validateUnionType(false, ["boolean", "string"]));
// true