# MSc Artificial Intelligence E-Portfolio

This repository contains the e-portfolio for my MSc in Artificial Intelligence at the University of Essex Online. It showcases my work, assignments, and projects completed throughout the program.

## 📖 Overview

This e-portfolio is a React application built to demonstrate my knowledge and skills acquired during the MSc in Artificial Intelligence program. It includes:

- Detailed information about each completed module
- Technical assignments and corresponding solutions
- Projects and research work
- Personal reflections on academic development

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Emotion CSS
- **Routing**: React Router
- **UI Components**: Custom components with Lucide React icons
- **Markdown Processing**: React Markdown with remark plugins
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or newer)
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dewynl/msc_artificial_intelligence_eportfolio.git
cd msc_artificial_intelligence_eportfolio
```

2. Install dependencies:

```bash
yarn install --ignore-engines
```

This flag helps resolve dependency version conflicts that may arise with the TypeScript and ESLint versions.

> Note: While the repository contains both `package-lock.json` and `yarn.lock` files, we're standardizing on Yarn as the preferred package manager for this project.

### Running Locally

To start the development server:

```bash
yarn start
```

This will launch the application at [http://localhost:3000](http://localhost:3000).

## 🔍 Project Structure

```
msc_artificial_intelligence_eportfolio/
├── public/            # Static files and images
├── src/
│   ├── components/    # Reusable UI components
│   ├── data/          # Module content and static data
│   ├── pages/         # Main page components
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main application component
│   └── index.tsx      # Entry point
└── package.json       # Dependencies and scripts
```

## 📦 Building for Production

To create a production build:

```bash
yarn build
```

This generates optimized files in the `build` directory.

## 🌐 Deployment

The project is configured for deployment to GitHub Pages. To deploy:

```bash
yarn deploy
```

This builds the project and pushes it to the `gh-pages` branch, making it available at: https://dewynl.github.io/msc_artificial_intelligence_eportfolio/

## 🧪 Testing

Run tests with:

```bash
yarn test
```

## 🔧 Additional Scripts

- `yarn format` - Format code using Prettier

## 👨‍💻 Author

- **Dewyn Liriano** - MSc Artificial Intelligence student from the Dominican Republic

## 📄 License

This project is for educational purposes.

## 🔗 Links

- **Portfolio**: [https://dewynl.github.io/msc_artificial_intelligence_eportfolio/](https://dewynl.github.io/msc_artificial_intelligence_eportfolio/)
- **GitHub Repository**: [https://github.com/dewynl/msc_artificial_intelligence_eportfolio](https://github.com/dewynl/msc_artificial_intelligence_eportfolio)
