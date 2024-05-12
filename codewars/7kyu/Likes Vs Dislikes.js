function likeOrDislike(buttons) {
    let state = "Nothing";
    for (const button of buttons) {
        if (button === "Like" && state === "Dislike") {
            state = "Like";
        } else if (button === "Dislike" && state === "Like") {
            state = "Dislike";
        } else if (button === "Like" && state === "Like" || button === "Dislike" && state === "Dislike") {
            state = "Nothing";
        } else if (button !== state) {
            state = button;
        }
    }
    return state;
}

console.log(likeOrDislike(['Dislike'])) //, Dislike
console.log(likeOrDislike(['Like', 'Like'])) //, Nothing
console.log(likeOrDislike(['Dislike', 'Like'])) //, Like
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike'])) //, Nothing
console.log(likeOrDislike(['Dislike', 'Dislike'])) //, Nothing
console.log(likeOrDislike(['Like', 'Like', 'Like'])) //, Like
console.log(likeOrDislike(['Like', 'Dislike'])) //, Dislike
console.log(likeOrDislike(['Dislike', 'Like', 'Dislike'])) //, Dislike
console.log(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike'])) //, Dislike
console.log(likeOrDislike([])) //, Nothing
