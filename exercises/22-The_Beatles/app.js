/*let sing = () => {
    lyric = "";
    const part = "yeah, let it be Oh,"
    const part2 = "yeah, let it be"

    for (let i = 0; i < 3; i++){
        lyric = lyric + "let it be, " 
    }
    
    let song = (lyric + part + " there will be an answer let it be " + lyric + part2 + " Whisper words of wisdom Let it be")
    
    return song ;
}

//Your code above ^^^

console.log(sing());*/


function sing(){
    let song = "";
    for(let i = 0; i < 11; i++){
        if (i === 4){
            song = song + "whisper words of wisdom, ";
        }
        else if (i === 10){
            song = song + "there will be an answer, let it be";
        }
        else {
            song = song + "let it be, "
        }
    }

    return song;
}

//Your code above ^^^

console.log(sing());


