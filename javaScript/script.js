document.addEventListener('DOMContentLoaded', () => { 
    const slider = document.getElementById('slider');
    const antesWapper = document.querySelector('.img-anteswrapper');
    const linha = document.querySelector('.linha-separadora');

    if (!slider || !antesWapper || !linha ) {
    console.error('Erro: não achei');
    return;
    }
    console.log ('Comparador carregado');

    slider.addEventListener('input', (e) => {
        const valor = e.targety.value;
        antesWapper.style.width = '%';
        linha.style.left = '%';
    });
});