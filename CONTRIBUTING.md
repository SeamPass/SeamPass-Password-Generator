# 🤝 Contributing to SeamPass

Welcome! We're thrilled that you'd like to contribute to **SeamPass**, a simple and secure password generator built with modern tools.

Your contributions — whether it's bug fixes, improvements, or new features — are highly appreciated!

---

## 📋 Table of Contents

- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Code Guidelines](#code-guidelines)
- [Linting & Formatting](#linting--formatting)
- [Git Commit Guidelines](#git-commit-guidelines)
- [Need Help?](#need-help)

---

## ✅ How to Contribute

1. **Fork** the repo
2. **Create a branch** for your feature or fix

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
4. **Commit and push**

   ```bash
   git add .
   git commit -m "Add: Your descriptive commit message"
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** against the `master` branch

We'll review and merge your PR as soon as possible!

---

## 🛠 Development Setup

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

---

## 🧹 Code Guidelines

- Use **TypeScript** for all components
- Keep code modular and reusable
- Use **Radix UI** and **TailwindCSS** for UI elements
- Password generation logic lives in `lib/`

---

## 🧼 Linting & Formatting

We use ESLint and Prettier.

To run manually:

```bash
yarn lint
```

> **Note:** Pre-commit hooks will automatically lint and format your staged code using Husky + lint-staged

---

## ✅ Git Commit Guidelines

Use clear, concise commit messages. For example:

- `Add: Generate memorable password with uppercase option`
- `Fix: Handle empty password length edge case`
- `Update: Improve copy-to-clipboard UX`

---

## 💬 Need Help?

If you're stuck or have any questions, feel free to open an issue or start a discussion. We're here to help!

Thanks for being awesome 🙌

---

© 2025 SeamPass. Licensed under the [MIT License](LICENSE).
