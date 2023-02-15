const fs = require('fs')

function insertToFile(path, dataToInsert) {
  fs.readFile(path, (err, fileData) => {
    if (err) throw err
    console.log(fileData)
    let updatedFile = dataToInsert + '\n' + fileData
    fs.writeFile(path, updatedFile, (err) => {
      if (err) throw err
      console.log('Data has been inserted!')
    })
  })
}

const dataToInsert = "import './css/index.css';"

insertToFile('./dist/index.js', dataToInsert)
insertToFile('./dist/index.es.js', dataToInsert)

insertToFile('./scr/index.js', "import './forStory' //clean-on-prod")
