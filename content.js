var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3 && 
            node.parentElement.tagName.toLowerCase() != "script" &&
            node.parentElement.tagName.toLowerCase() != "style") {
            
            var text = node.textContent;
            var replacedText = text.replace(/(\d+)/g, '$1.666');

            if (replacedText !== text) {
                console.log(text);
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

