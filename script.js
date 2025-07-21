let parent  = document.querySelector("#sampleTable tbody")
function insert_Row() {
let newData = document.createElement("tr")
newData.innerHTML = `<td>New Cell1</td><td>New Cell2</td>`
	parent.insertBefore(newData, parent.firstChild)
}