function sendWhatsApp() {
  var name = document.getElementById("name").value;
  var message =
    "Halo idetrans, saya dari website anda dan tertarik dengan tawaran bisnis anda, hubungi saya kembali di kontak " +
    name;
  var whatsappUrl =
    "https://api.whatsapp.com/send?phone=6285255930077&text=" + message;
  window.location.href = whatsappUrl;
}
