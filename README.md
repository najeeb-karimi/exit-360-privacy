# 🔐 Exit 360: Public Privacy Policy Website

Prepared on **17 November 2026** for Exit 360’s public privacy-policy website. The page is in Persian/Dari, and the publisher is **Zafar Shafaq**.

Privacy and support contact: **md.z.shafaq@gmail.com**.

The content was adapted from the reviewed in-app policy on **17 November 2026 (26 Aqrab 1405)**. It preserves the app's disclosures, changes the policy-update wording for the web, and adds a separate section about GitHub Pages hosting. The app's green palette and Vazirmatn font are used here.

## 🌐 Publish with GitHub Pages

1. Keep this dedicated repository public for GitHub Free. No app source, signing keys, credentials, or user records belong in this repository.
2. Commit the website files on `main` and push them to `origin`.
3. In the GitHub repository, open **Settings → Pages**.
4. Set **Source** to **Deploy from a branch**, then select **main** and **/ (root)**. Save.
5. Wait for GitHub's Pages deployment to finish. Open the URL reported by GitHub and verify it on both a phone and a desktop, without signing in.
6. Enable **Enforce HTTPS** when available. Use the resulting HTTPS URL in Play Console's privacy-policy field.

With the configured origin `najeeb-karimi/exit-360-privacy`, the expected default project URL is:

```text
https://najeeb-karimi.github.io/exit-360-privacy/
```

That is an expected address, not confirmation that the site has been deployed. GitHub's Pages settings show the actual published URL.

No custom domain, Node.js installation, dependency install, framework build, or separate Actions workflow is required. The entry file is `index.html` at the repository root, `.nojekyll` disables Jekyll processing, and all local asset paths are relative so they work under the repository subpath.

## 🖥️ Preview locally

From this directory, with Python installed:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Open `http://127.0.0.1:8080/` in a browser. Press **Ctrl+C** in the server terminal when finished. Core policy text, navigation, and contact information are available without JavaScript. JavaScript only enables the copy-email icon in a secure context when the clipboard API is available; the email link and selectable text remain usable otherwise.

## 📝 Update the policy

Edit the readable text directly in `index.html`; styling is in `styles.css`. Update both the visible revision date and the `datetime` value when making a policy revision. Then commit and push: branch-based Pages publishing deploys updates independently of an app release.

Keep factual disclosures aligned with the app and Play Console's Data safety answers. The in-app policy is bundled with the app and needs an app update to change. A web edit does not change the app's behavior or its bundled text. The website-specific hosting section should remain separate from app-only statements about offline use and local data.

If the publisher, contact, app behavior, host, or website integrations change, review the relevant policy sections. In particular, do not retain the website's no-analytics/no-visitor-storage claims if analytics, forms, cookies, or browser storage are later introduced. Check the host's privacy practices again if moving away from GitHub Pages.

The revision date records the policy revision, not proof of a Play submission or Google approval. This repository does not publish or submit a new app release.

## 🗂️ Files and privacy

| File / directory | Purpose |
|---|---|
| `index.html` | Full policy, accessible headings, section navigation, and contact details. |
| `styles.css` | Responsive RTL layout, local font definitions, keyboard focus, reduced-motion support, and print styling. |
| `script.js` | Optional user-triggered copy-email action; no network requests, cookies, or persistent browser storage. |
| `assets/images/` | Local app icon (`app-icon.png`) and circular favicon (`favicon.png`). |
| `assets/fonts/` | Three local Vazirmatn font weights. No CDN or Google Fonts request is needed. |
| `assets/fonts/OFL.txt` | The Vazirmatn font's SIL Open Font License and copyright notice. The fonts are copied unchanged from the app. |

There is no visitor form, authentication gate, analytics SDK, or tracking script. GitHub Pages logs visitor IP addresses for security purposes; the public policy discloses this. See the official references below for GitHub's own processing and retention practices.

## 📚 Official references

- [Google Play: privacy-policy requirements](https://support.google.com/googleplay/android-developer/answer/10144311#privacy-policy)
- [GitHub Pages: static hosting and visitor IP logging](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub Pages: choosing the publishing branch and folder](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages: creating a site and disabling Jekyll](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub Pages: HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [Vazirmatn's original font license](https://github.com/rastikerdar/vazirmatn/blob/master/OFL.txt)
