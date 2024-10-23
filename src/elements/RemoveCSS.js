function removeCSS(URL){
    const existingLink1 = document.querySelector("link[href='"+URL+"']");
    if (existingLink1) { document.head.removeChild(existingLink1); }
}

export default removeCSS;