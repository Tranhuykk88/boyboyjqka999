const repoUrl = new URL("./", window.location.href).href;
const sileoUrl = `sileo://source/${repoUrl}`;
const addButton = document.querySelector("#add-sileo");
const copyButton = document.querySelector("#copy-repo");
const toast = document.querySelector("#toast");

addButton.href = sileoUrl;

function legacyCopy(value) {
  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, value.length);
  const copied = document.execCommand("copy");
  input.remove();
  return copied;
}

copyButton.addEventListener("click", async () => {
  let copied = false;
  try {
    await navigator.clipboard.writeText(repoUrl);
    copied = true;
  } catch {
    copied = legacyCopy(repoUrl);
  }

  if (copied) {
    toast.textContent = "Đã sao chép link repo";
  } else {
    window.prompt("Nhấn giữ link rồi chọn Sao chép:", repoUrl);
    toast.textContent = "Hãy sao chép link trong ô vừa mở";
  }
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
});
