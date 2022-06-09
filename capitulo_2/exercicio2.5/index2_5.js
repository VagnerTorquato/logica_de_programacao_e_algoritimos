const frm = document.querySelector('form');
const resp = document.querySelector('#tituloPromocao');
const resp1 = document.querySelector('#promocao');

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value);

    const precoPromocao = Math.floor(preco * 2);

    resp.innerText = `Promoção de ${medicamento}`;
    resp1.innerText = `Leve 2 por apenas R$: ${precoPromocao}`;
    e.preventDefault();
})