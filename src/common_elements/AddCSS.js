function addCSS(URL){
    const linkObj = document.createElement('link');
    linkObj.rel = "stylesheet";
    linkObj.href = URL;
    const existingLinkObj = document.querySelector("link[href='"+URL+"']");
    if (!existingLinkObj) { document.head.appendChild(linkObj); console.log("Added CSS", URL); }
}

export default addCSS;