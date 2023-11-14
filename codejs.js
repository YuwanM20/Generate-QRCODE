const input = document.getElementById("qrinput");
const qrimage = document.getElementById("qrimage");
const btngenerate = document.getElementById("generate");
const btndownload = document.getElementById("download");
const resetButton = document.getElementById("reset");

btngenerate.addEventListener("click", () => {
    // const backgroundColor = "#ffffff";
    const padding = 10;
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}&color=000000&bgcolor=FFFFFF&margin=${padding}`;
    qrimage.src = qrCode;
    var audio = new Audio('br.wav');
    audio.play();
});

btndownload.addEventListener("click", async () => {
    const response = await fetch(qrimage.src);
    const blob = await response.blob();
    const downloadlink = document.createElement("a");
    downloadlink.href = URL.createObjectURL(blob);
    downloadlink.download = "qrcode.jpg";
    downloadlink.click();
    var audio = new Audio('dw.wav');
    audio.play();
});

resetButton.addEventListener("click", () => {
    qrimage.src = "";
    qrinput.value = "";

    var audio = new Audio('res.wav');
    audio.play();
});
