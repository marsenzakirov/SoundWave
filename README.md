# Project Name

SoundWafe - convenient and easy to listen to music online, using the sportify API. The project is intended for testing in the code the dream organization. Therefore, there will not be the full functionality of the site, which I would like to implement.

## Installation

1. Clone the repository: `git clone git@github.com:marsenzakirov/SoundWave.git`
2. Navigate to the project directory: `cd SoundWave`
3. Install dependencies using pnpm: `pnpm install`

## Usage

To start the project, simply use the `pnpm start` command

## Project Structure

The project structure is organized as follows:

- `src/`: Source code directory
  - `components/`: Contains React components used throughout the application.
  - `styles/`: Houses CSS stylesheets for styling the components.
  - `utils/`: Contains utility functions and helper modules used across the project.
  - `pages/`: Contains page components representing different views/routes of the application.
  - `App.js`: Main/root component responsible for rendering the entire application structure.
  - `index.js`: Entry point of the application, where the React app is initialized and rendered to the DOM.


## Why pnpm?

This project recommends using pnpm as the package manager. pnpm is a fast, disk-space efficient package manager for Node.js applications. Here are some benefits of using pnpm:

- **Fast Installation**: pnpm optimizes installation by reusing packages that are already on disk, which results in faster installs compared to other package managers.
- **Disk Space Efficient**: With pnpm, packages are stored in a content-addressable storage, avoiding duplication of dependencies and saving disk space.
- **Parallel Installation**: pnpm installs dependencies in parallel, further speeding up the installation process.
- **No Disk Bloat**: Unlike npm and Yarn, pnpm does not create node_modules directories in every project, reducing disk bloat.

To start using pnpm for your project, simply run `npm install -g pnpm` then `pnpm install` instead of `npm install` or `yarn install`. Enjoy faster and more efficient package management with pnpm!
