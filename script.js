let files = [];

function caricaFile() {
    let fileInput1 = document.getElementById('file1').files[0];
    let fileInput2 = document.getElementById('file2').files[0];
    let fileInput3 = document.getElementById('file3').files[0];
    
    if (!fileInput1 || !fileInput2 || !fileInput3) {
        alert("Per favore carica tutti e tre i file Excel.");
        return;
    }

    files.push(fileInput1, fileInput2, fileInput3);
    localStorage.setItem('excelFiles', JSON.stringify(files.map(file => file.name)));

    // Redirige alla pagina di presentazione
    window.location.href = 'presentazione.html';
}

function avviaPresentazione() {
    const savedFiles = JSON.parse(localStorage.getItem('excelFiles'));
    if (!savedFiles || savedFiles.length !== 3) {
        document.getElementById('presentazione').innerHTML = "Nessun file caricato.";
        return;
    }

    // Simulazione del caricamento e visualizzazione dei contenuti
    let index = 0;
    function mostraFile() {
        document.getElementById('presentazione').innerHTML = `Mostrando: ${savedFiles[index]}`;
        index = (index + 1) % savedFiles.length;
    }
    
    // Mostra i file a intervalli regolari (ad esempio ogni 3 secondi)
    mostraFile();
    setInterval(mostraFile, 3000);
}

if (window.location.pathname.endsWith("presentazione.html")) {
    avviaPresentazione();
}
