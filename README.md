# Autobooker

This is a toy project to automate bookings

### Prerequisites

- Make sure you have at least [**Node.js v14.18.1**](https://nodejs.org/en/blog/release/v14.18.1/) installed. It is highly recommended to install a [Node version manager](http://npm.github.io/installation-setup-docs/installing/using-a-node-version-manager.html) (such as [nvm](https://github.com/nvm-sh/nvm)) that enables you to switch between multiple versions of Node.js.
- This project uses the [**Yarn**](https://yarnpkg.com/) package manager. You can read how to install the Yarn CLI in [their documentation](https://yarnpkg.com/en/docs/install).

### Install

```bash
yarn

# Opens cypress ui with options.
yarn open --env date="31.10.21",time="10:30 - 12:30"
# Run the script as a CLI
yarn book:boulder:bkk --env date="31.10.21",time="10:30 - 12:30"
```

### Personal Data for the bookings

Each script requires a different set of data. In order to add your personal
data for a given booking look in `/cypress/fixtures/*.examples`. Rename then into
a JSON file and fill it out with your data.

# License

MIT
