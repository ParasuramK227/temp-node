//FS(file)  
//ASYNCHRONOUS APPROACH

const {readFile, writeFile, write} = require('fs');//destructuring directly

console.log('start')

readFile('./content/first.txt' ,'utf8', (err,result)=>{
    if(err){
        return;
        console.log(err);
    }
    const first  = result;

    readFile('./content/second.txt' , 'utf8' , (err,result)=>{
        if(err){
        return;
        console.log(err);
    }
    const second  = result;

    writeFile('./content/result-async.txt' , `Here is the result : ${first} , ${second}`
        ,(err , result)=>{
            if(err){
                return;
                console.log(err)
            }
            console.log('done with this task');
        }
    );
    })
    
})

console.log('starting with the next one')
 ////// THIS CODE REPRESENTS CALLBACK HELL !!!!!!!!!!!!!!!!!!!