function addJS(URL, integrity, crossOrigin){
    const script = document.createElement('script')
    script.src = URL
    if (integrity !== "") {script.integrity = integrity}
    if (crossOrigin !== "") {script.crossOrigin = crossOrigin}
    const existingLink = document.querySelector("script[src='"+URL+"']")
    if (!existingLink) { document.head.appendChild(script); }
}

export default addJS;