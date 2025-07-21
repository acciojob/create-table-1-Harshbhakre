let parent  = document.querySelector("#sampleTable")
function insert_Row() {
let newData = document.createElement("tr")
newData.innerHTML = `<tr><td>New Cell1</td><td>New Cell2</td></tr>`
	parent.insertBefore(newData, parent.firstChild)
}