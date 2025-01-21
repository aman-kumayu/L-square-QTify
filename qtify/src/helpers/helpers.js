export const truncate = (text, length)  => {
    if(text.length > length){
        return text.subst(0, length) + "...";
    }
    return text;
}