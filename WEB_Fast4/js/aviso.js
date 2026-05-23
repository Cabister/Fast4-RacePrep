function mostrarAviso() {
    const aviso = document.getElementById("aviso");

    aviso.classList.add("mostrar");

    setTimeout(() => {
        aviso.classList.remove("mostrar");
    }, 3000);
}