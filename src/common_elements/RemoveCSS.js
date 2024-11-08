function removeCSS(URL){
    const existingLink1 = document.querySelector("link[href='"+URL+"']");
    if (existingLink1) { existingLink1.remove(); }
}

export default removeCSS;