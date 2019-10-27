const PORT = 3002;
const express = require('express')
const app = express()
app.use(express.json())


function gibberish(str){
    const vowelList = ['a', 'e', 'i', 'o', 'u'];
    // const gibberishWords = vowelList.map((letter) => {
    //      return 'l'+letter
    // })
    let newStr = str.split('');

    let gibberishWords = newStr.map( word => {
        if(vowelList.includes(word)){
            word = word + "l" + word;
        }
        return word
    });
    
    return gibberishWords.join('')
}

// let str = "This is an example sentence.";
// console.log(gibberish(str));




app.post('/translate',(req, res) => {
    const {body} = req;
    const{text, lang} = body;
    if(text && lang){
        if(lang == "en"){
            res.json({
                text: gibberish(text),
                lang: "ginbberish"
            })
        }  
    }

    res.json({
        error: "I can't translate that!"
    })
})

app.listen(PORT);