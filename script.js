const repoUrl = new URL("./", window.location.href).href;
const copyButton = document.querySelector("#copy-repo");
const toast = document.querySelector("#toast");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(repoUrl);
    toast.textContent = "Đã sao chép — mở Sileo, chọn Sources rồi nhấn +";
  } catch {
    window.prompt("Sao chép link này rồi dán vào Sileo:", repoUrl);
    toast.textContent = "Hãy sao chép link repo trong ô vừa mở";
  }
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
});
