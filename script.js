"use strict";

const copyButton = document.querySelector("[data-copy-email]");
const copyStatus = document.getElementById("copy-status");

if (copyButton && copyStatus && window.isSecureContext && navigator.clipboard) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
      copyStatus.textContent = "آدرس ایمیل کپی شد";
    } catch {
      copyStatus.textContent = "کپی خودکار ممکن نشد؛ آدرس ایمیل را انتخاب و کپی کنید.";
    }
  });
}
