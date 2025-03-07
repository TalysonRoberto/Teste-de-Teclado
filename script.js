document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (event) => {
        event.preventDefault(); // Bloqueia a função padrão da tecla

        let tecla = event.code.toUpperCase(); // Usa event.code para padronizar

        // Tratamento especial para a tecla Espaço
        if (event.code === "Space") tecla = "SPACE";

        // Tratamento especial para PrintScreen (varia dependendo do navegador)
        if (event.key === "PrintScreen") tecla = "PRINTSCREEN";

        const div = document.getElementById(tecla);

        if (div) {
            div.style.backgroundColor = "#0985EB"; // Muda a cor ao pressionar
            div.style.color = "#000"// Muda a cor ao soltar
        }
    });

    document.addEventListener("keyup", (event) => {
        event.preventDefault(); // Bloqueia a função padrão da tecla

        let tecla = event.code.toUpperCase(); // Usa event.code para padronizar

        if (event.code === "Space") tecla = "SPACE";
        if (event.key === "PrintScreen") tecla = "PRINTSCREEN";

        const div = document.getElementById(tecla);

        if (div) {
            div.style.backgroundColor = "#09EB44" ; 
            div.style.color = "#000"// Muda a cor ao soltar
        }
    });
  
  // Resetar cores ao clicar no botão com ID="resetar"
    document.getElementById("RESETAR").addEventListener("click", () => {
        const teclas = document.querySelectorAll(".tecla"); // Seleciona todas as teclas
        teclas.forEach(tecla => {
            tecla.style.backgroundColor = "#F2F2F2"; // Volta à cor original (altere conforme necessário)
            tecla.style.color = "#8f8f8f"// Muda a cor para a original
        });
    });
  
  // Alternar tema ao clicar na div com ID="TEMA"
    document.getElementById("TEMA").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode"); // Alterna a classe do body
        document.querySelector(".tema").classList.toggle("ativo"); 
    });
});

document.addEventListener("keydown", (event) => {
    event.preventDefault(); // Evita ações padrão (como F5 recarregar a página)

    let tecla = event.key.toUpperCase(); // Transforma a tecla em maiúscula

    // Exceções para teclas especiais
    if (event.code === "Space") tecla = "ESPAÇO";
    if (event.key === "PrintScreen") tecla = "PRINT SCREEN";

    // Atualiza a div com o nome da tecla pressionada
    document.getElementById("tecla-exibida").textContent = `Tecla: ${tecla}`;
});