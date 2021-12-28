# Boilerplate Express Typescript
This repo can be used as a starting point for backend development with Nodejs and Typescript.

## ❯ Table of Contents

- [Getting Started](#-getting-started)
- [License](#-license)

## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`


> If you work with a mac, we recommend to use homebrew for the installation.

### Step 2: Setup Code

Fork or download this project. Configure your package.json for your new project.

Then copy the `.env.sample` file and rename it to `.env`. In this file you have to add your server information.

 Install dependencies:

   ```bash
   npm install
   ```

Start Server

```bash
npm run dev
```

> This starts a local server using `nodemon`, which will watch for any file changes and will restart the server according to these changes.
> The server address will be displayed to you as `http://localhost:3000`.

## ❯ License

[MIT](/LICENSE)
