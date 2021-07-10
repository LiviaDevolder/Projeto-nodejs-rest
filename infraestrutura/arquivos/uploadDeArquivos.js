const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
  const tiposValidos = [
    'jpg',
    'jpeg',
    'png'
  ]
  const tipo = path.extname(caminho)

  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

  if(!tipoEhValido) {
    const erro = 'Tipo é inválido'
    console.log('Erro! Extensão de arquivo não suportada')
    callbackImagemCriada(erro)
  } else {
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on('finish', () => callbackImagemCriada(false, novoCaminho))
  }
}
