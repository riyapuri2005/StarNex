function addCSS(URL){
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = URL;
    const existingLink1 = document.querySelector("link[href='"+URL+"']");
    if (!existingLink1) { document.head.appendChild(link); console.log("Added CSS", URL); }
}

export default addCSS;