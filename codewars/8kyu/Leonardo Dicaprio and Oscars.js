function leo(oscar){
    switch (oscar){
        case 88:
            return "Leo finally won the oscar! Leo is happy"
        case 86:
            return "Not even for Wolf of wallstreet?!"
        default:
            if (oscar < 88) {
                return "When will you give Leo an Oscar?";
            } else {
                return "Leo got one already!";
            }
    }
}
console.log(leo(89))//"Leo got one already!"
console.log(leo(88))//"Leo finally won the oscar! Leo is happy"
console.log(leo(87))//"When will you give Leo an Oscar?"
console.log(leo(86))//"Not even for Wolf of wallstreet?!"