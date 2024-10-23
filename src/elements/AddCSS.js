function addCSS(URL){
    const link1 = document.createElement('link');
    link1.rel = "stylesheet";
    link1.href = URL;
    const existingLink1 = document.querySelector("link[href='"+URL+"']");
    if (!existingLink1) { document.head.appendChild(link1); }
}

export default addCSS;