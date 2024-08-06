let notaS1 = document.getElementById("nota1")
let notaS2 = document.getElementById("nota2")
let notaS3 = document.getElementById("nota3")
let resultado = document.getElementById("resultado")
let realizarMedia = document.getElementById("realizarMedia")

function realizarMed(nota1, nota2, nota3) {
    nota1 = notaS1.value
    nota2 = notaS2.value
    nota3 = notaS3.value

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        resultado.innerHTML = "Notas inválidas. Tente novamente. (0-10)"
        return
    } else if (nota1 == "" || nota2 == "" || nota3 == "") {
        resultado.innerHTML = "Preencha todos os campos."
        return
    }
    let media = ((parseInt(nota1) * 3) + (parseInt(nota2) *3) + (parseInt(nota3)) * 4) / 10
    resultado.innerHTML = `A média é: ${media.toFixed(2)}`
}

realizarMedia.addEventListener("click", () => {
    realizarMed(notaS1.value, notaS2.value, notaS3.value)
})
