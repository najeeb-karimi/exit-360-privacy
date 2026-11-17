# 🔐 Exit 360 Privacy Policy

The public privacy-policy website for **Exit 360**, an exam-preparation app for curative medicine and stomatology graduates and senior students preparing for the Exit Exam.

[🌐 View the live privacy policy](https://najeeb-karimi.github.io/exit-360-privacy/)

## 📖 Project overview

This website presents Exit 360’s privacy policy in Persian/Dari, with a right-to-left layout, the app’s green color palette, and the Vazirmatn font. The text is adapted from the in-app policy and includes a separate disclosure about the website’s hosting.

The policy covers local app data, accounts and advertising, internet use for formula rendering, information sharing, backup and transfer, data deletion, security, the intended audience, publisher contact details, and policy changes.

## ✨ Features

- Responsive layouts with a desktop contents sidebar and a collapsible catalog on smaller screens.
- Smooth catalog expansion and collapse where supported, with reduced-motion preferences respected.
- Section navigation, a back-to-top button, and an email-copy button with brief confirmation.
- Keyboard focus indicators, a skip link, and print styling.
- Locally bundled fonts and images, including an optimized circular favicon.
- Policy text, navigation, and contact details available without JavaScript.

## 🛠️ Technology

Plain **HTML, CSS, and JavaScript**, with no framework, package dependencies, or build step. The site has no analytics, tracking scripts, forms, or persistent browser storage. Its hosting disclosure explains GitHub Pages’ handling of visitor information.

## 🗂️ Project structure

| File / directory | Purpose |
|---|---|
| `index.html` | Privacy-policy text, navigation, and contact details. |
| `styles.css` | Responsive styling, fonts, accessibility preferences, and print layout. |
| `script.js` | Optional email-copy interaction and confirmation. |
| `assets/images/` | App icon and optimized 128 × 128 PNG favicon. |
| `assets/fonts/` | Locally bundled Vazirmatn fonts and their SIL Open Font License. |
| `.nojekyll` | Keeps GitHub Pages serving the static files without Jekyll processing. |

## 🖥️ Local preview

Open `index.html` directly in a browser to view the website without installing anything. The policy and navigation work this way, though the browser may restrict the email-copy action for local files.

For a preview served over HTTP, you can optionally use Python. If it is installed, run this command from the project directory:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Open [localhost:8080](http://127.0.0.1:8080/) in a browser. Stop the server with **Ctrl+C**.

## 📬 Publisher and contact

- **Publisher:** Zafar Shafaq

- **Privacy and support:** [md.z.shafaq@gmail.com](mailto:md.z.shafaq@gmail.com)
