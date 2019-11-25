let i = 0;
// let printString;
const moji = "MESSAGE SENT";

const sendMessage = () => {
  document.getElementById("submit").textContent = moji.substring(0, i++);
  if (i <= moji.length) {
    setTimeout("sendMessage()", 150);
  }
}
