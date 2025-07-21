let parent  = document.querySelector("#sampleTable")

function insert_Row() {
let newData = document.createElement("tr")
newData.innerHTML = `<tr><td>New cell1</td> 
		<td>New cell2</td></tr>`
	parent.insertBefore(newData, parent.firstChild)
}
