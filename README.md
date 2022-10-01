<div align="center">

# @blazingworks/utils

![Lines of code](https://img.shields.io/tokei/lines/github/blazingworks/utils?style=for-the-badge)
![npm Downloads](https://img.shields.io/npm/dy/@blazingworks/utils?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/blazingworks/utils?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/blazingworks/utils?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/blazingworks/utils?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/blazingworks/utils?style=for-the-badge)
![npm Version](https://img.shields.io/npm/v/@blazingworks/utils?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/blazingworks/utils?style=for-the-badge)

</div>

🌍 Hello World NPM Library by BlazingWorks, acts as a boilerplate for future libraries

## Tech Stack

-   [TypeScript](https://www.typescriptlang.org/)
-   [Jest](https://jestjs.io/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)

## Installation

### NPM

```bash
npm install @blazingworks/utils
```

### Yarn

```bash
yarn add @blazingworks/utils
```

## Usage

### TypeScript

```typescript
import { prettyNumber } from "@blazingworks/utils/numbers";
import { surround } from "@blazingworks/utils/text";

prettyNumber(74854); // 74,854
surround("Hello World", ["👋 ", " 🌍"]); // 👋 Hello World 🌍

// or

import { numbers, text } from "@blazingworks/utils";

numbers.prettyNumber(74854); // 74,854
text.surround("Hello World", ["👋 ", " 🌍"]); // 👋 Hello World 🌍
```

### JavaScript

```javascript
const { prettyNumber } = require("@blazingworks/utils/numbers");
const { surround } = require("@blazingworks/utils/text");

prettyNumber(74854); // 74,854
surround("Hello World", ["👋 ", " 🌍"]); // 👋 Hello World 🌍

// or

const { numbers, text } = require("@blazingworks/utils");

numbers.prettyNumber(74854); // 74,854
text.surround("Hello World", ["👋 ", " 🌍"]); // 👋 Hello World 🌍
```

## How to report issues/questions

-   For general issues/questions, [open an issue](https://github.com/blazingworks/utils/issues)
-   For security issues, please email [security@blazing.works](mailto:security@blazing.works)
-   For important questions, please email [opensource@blazing.works](mailto:opensource@blazing.works)

## License

As this is an open-source project, support is limited. Please use [GitHub Issues](https://github.com/blazingworks/utils/issues) for community support or contact [opensource@blazing.works](mailto:opensource@blazing.works) for very important matters.

**ℹ️ All code in this repository is licensed under the [MIT License](LICENSE.md).**
