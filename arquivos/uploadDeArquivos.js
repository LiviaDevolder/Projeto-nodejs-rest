const fs = require('fs')

fs.createReadStream('./assets/peteca.jpg')
  .pipe(fs.createWriteStream('./assets/peteca-stream.jpg'))
  .on('finish', () => console.log('Imagem foi escrita com sucesso!'))