let text = document.getElementById('text')
let QRImg = document.getElementById('QRimg')
let QRCode = document.getElementById('QR-Code')


function QRgenerater() {
    let textValue = text.value.trim()

    if (textValue === '') {
        alert('please enter your text or url')
    } else {
        QRCode.classList.add('show-img')
        QRImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textValue}`
    }


}

