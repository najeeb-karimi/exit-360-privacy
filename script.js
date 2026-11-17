"use strict";

const copyButton = document.querySelector("[data-copy-email]");

if (copyButton) {
  const copyIcon = copyButton.innerHTML;
  const copyLabel = copyButton.getAttribute("aria-label");
  const copyTitle = copyButton.title;
  const tickIcon = '<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></svg>';
  let resetTimer;

  // Compatibility fallback for local previews without the secure Clipboard API.
  function copySelectedEmail() {
    const emailLink = document.querySelector(".email-link");
    const selection = window.getSelection();
    if (!emailLink || !selection || typeof document.execCommand !== "function") {
      throw new Error("Clipboard copying is unavailable.");
    }
    const savedRanges = [];
    for (let index = 0; index < selection.rangeCount; index += 1) {
      savedRanges.push(selection.getRangeAt(index).cloneRange());
    }
    const range = document.createRange();
    range.selectNodeContents(emailLink);
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      if (!document.execCommand("copy")) {
        throw new Error("Clipboard copying was rejected.");
      }
    } finally {
      selection.removeAllRanges();
      savedRanges.forEach((savedRange) => selection.addRange(savedRange));
    }
  }

  copyButton.addEventListener("click", async () => {
    if (copyButton.disabled) return;
    clearTimeout(resetTimer);
    copyButton.disabled = true;

    try {
      if (window.isSecureContext && typeof navigator.clipboard?.writeText === "function") {
        await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
      } else {
        copySelectedEmail();
      }
      copyButton.innerHTML = tickIcon;
      copyButton.setAttribute("aria-label", "آدرس ایمیل کپی شد");
      copyButton.title = "آدرس ایمیل کپی شد";
    } catch {
      copyButton.innerHTML = copyIcon;
      const failureLabel = "کپی خودکار ممکن نشد؛ آدرس ایمیل را انتخاب و کپی کنید.";
      copyButton.setAttribute("aria-label", failureLabel);
      copyButton.title = failureLabel;
    } finally {
      copyButton.disabled = false;
      resetTimer = setTimeout(() => {
        copyButton.innerHTML = copyIcon;
        copyButton.setAttribute("aria-label", copyLabel);
        copyButton.title = copyTitle;
      }, 1600);
    }
  });
  copyButton.hidden = false;
}
