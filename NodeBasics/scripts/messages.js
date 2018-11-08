const fs = require("fs");
const argv = process.argv;

function WriteFile(fs,file, text)
{
    return new Promise((resolve, reject) =>
    {
        fs.writeFile(file, text,(err, result) =>
        {
            if(err)
            {
                console.log("Error.")
                return;
            }
            resolve({message: "[Process succeded]"})
        }); 
    });  
}

let fileSystemFileReading = ( fs, file, text ) =>
{
    return new Promise((resolve, reject) =>
    {
        fs.readFile(file, "utf8", (err, data) =>
        {
            if(err)
            {
                console.log("Something went wrong");
                throw err;
                return;
            }
            resolve({title: "[TEXT]", msg: data});
        })
    });
}


let callArgv = () =>
{
    return new Promise((resolve, reject) =>
    {
        let message = "";
        if(argv[2] && argv[2].split("=").length > 1) message = argv[2].split("=")[1];
        if(message == "") reject("No args available");
        resolve({text: message});        
    });
}

let readFromUser = async(text) =>
{
    text = "This file has been corrupted";
    let response = await callArgv();
    if(!response)
    {
        console.log("Error reading from user");
        return text;
    }
    //console.log(response.text);
    if(response) return response.text;
}

let callTheFS = async(file, text) =>
{
    // reading if user has a messege to be send
    text = await readFromUser(text);

    // take the message/text and saving it in a file
    let response = await WriteFile(fs,file, text);
    
    if(response)
    {
        // if text was did successfully
       console.log(response.message);
       // the read the file
       let response2 = await fileSystemFileReading(fs, file, text);
       // showing what is inside the text wrote
       console.log(`${response2.title}:`);
       if(response2) console.log(response2.msg);
    }
}

let text = ":DEFAULT:";
let file = "./fileOps/TEXT1.txt";

// calling all the actions:
// read from user
// save in file
// read the file
callTheFS(file, text)
.catch(err =>
{
    console.log("[ERROR]")
    console.log(`[ERROR LOG]: ${err}`)
});