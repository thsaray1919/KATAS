// funciones callback: se ejecutaran despues

function postConsoleLog(callback){
    const hiddenNumber = 6;
    console.log(`This is the hidden number: ${hiddenNumber}`);
    callback(hiddenNumber);
} 

function newC(firstParam){
    console.log(`im the callback, and my first param is: ${firstParam}`);
};

postConsoleLog(newC);
