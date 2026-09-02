function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//The output will first display "calling". 
//Then the await waits for the Promise returned by resolveAfter2Seconds() to resolve. 
//After 2 seconds, the Promise resolves with "resolved", and "resolved" is displayed in the console.

//[Running] node "d:\Documentos\Developers Institute Projects\DI_Bootcamp\Week5\Day1\Exercise4XP.js"
//calling
//resolved

//[Done] exited with code=0 in 2.23 seconds
