
function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}
console.log(htmlspecialchars("<h2>Hello World</h2>"))