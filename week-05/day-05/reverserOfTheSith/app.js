const PORT = 3001;
const express = require('express')
const app = express()
app.use(express.json())

// reverse method
function reverse(sentence){
    // sentence = sentence.substr(0, sentence.length-1);
    const arr = sentence.split(' ');
    const len = arr.length;
    let words = [];

    if(len % 2 == 0){
        for(let i = 0; i < len; i+=2){
            words[i] = arr[i+1];
            words[i+1] = arr[i];
        }
    }else{
        let finalWord = arr[len-1];
        for(let i = 0; i < len-1; i+=2){
            words[i] = arr[i+1];
            words[i+1] = arr[i];
        }
        words.push(finalWord);
    }
    let newSentence = words.join(" "); 
    newSentence += ". Arrgh.";
    return newSentence
}


function splitPara(paragraph){
    let sentences = paragraph.split('. ');
    sentences.map((item, index) =>{
        if(item == ''){
            sentences.splice(index, 1);
        }
    })
    return sentences
}

// splitPara(sen);

function sithText(paragraph){
    let sentencesArr = splitPara(paragraph);
    let finalWord = sentencesArr[sentencesArr.length-1];
    finalWord = finalWord.substr(0, finalWord.length-1);
    sentencesArr.splice(sentencesArr.length-1,1, finalWord);//delete the period

    let newSentenceArr = '';
    sentencesArr.forEach(sentence => {
        let firstCapital = reverse(sentence).substr(0,1).toUpperCase();
        let reverseSentence = firstCapital + reverse(sentence).substr(1);      
        newSentenceArr = newSentenceArr + ' ' + reverseSentence;
        // console.log(reverse(sentence));
    })
    // console.log(newSentenceArr);
    return newSentenceArr
}






// api
app.post('/sith', (req, res) => { 
    const {body} = req;
    const {text} = body;
    if(text){
        res.json({
            sith_text: sithText(text),
            // sith: text
        })
    }

    res.json({
        error: "Feed me some text you have to, padawan young you are. Hmmm."
    })
})


app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});