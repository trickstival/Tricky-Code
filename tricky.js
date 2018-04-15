const mForm = document.getElementById('pagelet_composer')
  .children[0].children[0].children[1].children[0].children[0]
  .children[0].children[1]

const txtArea = mForm.children[1].children[0].children[0].children[1].children[0]
txtArea.placeholder = 'Insert some code'

var myCodeMirror = CodeMirror(txtArea)

console.dir()