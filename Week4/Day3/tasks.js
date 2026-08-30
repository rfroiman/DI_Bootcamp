const myFunction = (a, b) => {

    const result = a + b;
    try {        
        if (result % 2 === 1) throw new Error("Oh no! That is not quite riiiiiight!!!");        
    } catch (e) {
        console.log("ERROR " + e.name);
        console.log(e.message);
    }
    return result
}

console.log(myFunction(4,1));