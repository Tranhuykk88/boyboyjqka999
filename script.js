const repoUrl = new URL("./", window.location.href).href;
const sileoUrl = `sileo://source/${repoUrl}`;
const repoLabel = document.querySelector("#repo-url");
const addButton = document.querySelector("#add-sileo");
const copyButton = document.querySelector("#copy-repo");
const toast = document.querySelector("#toast");

repoLabel.textContent = repoUrl;
addButton.href = sileoUrl;

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(repoUrl);
    toast.textContent = "Đã sao chép link repo";
  } catch {
    toast.textContent = repoUrl;
  }
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
});
