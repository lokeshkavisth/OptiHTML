function minifyHTML(event) {
  event.preventDefault();
  const fileInput = document.getElementById("file-input");
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    const html = reader.result;
    const minified = html.replace(/\s+/g, " ").trim();
    document.getElementById("minified-output").value = minified;
    document.getElementById("download-link").href =
      "data:text/plain," + minified;
    document.getElementById("download-link").innerHTML =
      "Download minified version";
  };
  reader.readAsText(file);
}

function copyMinified() {
  const minifiedOutput = document.getElementById("minified-output");
  minifiedOutput.select();
  document.execCommand("copy");
  alert("Minified code copied to clipboard!");
}
