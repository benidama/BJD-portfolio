# My React Portfolio

This is a personal portfolio built using React, Tailwind CSS, and React Router. It showcases my skills, projects, and contact information as a front-end developer.

## Features

- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.
- **Dynamic Routing**: Navigate seamlessly between pages using React Router.
- **Project Showcase**: A dedicated section to display personal projects with descriptions and links.
- **Contact Form**: Allows users to get in touch directly from the website.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For navigation between different sections.
- **Tailwind CSS**: For styling and responsiveness.
- **GitHub Pages / Netlify / Vercel**: For deployment.

## Getting Started

Follow these instructions to set up and run the project locally:

### Prerequisites

- Node.js installed on your system.
- A package manager like npm or yarn.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/benidama/BJD-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `build/` folder.

## Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── ProjectCard.js
│   ├── ContactForm.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Projects.js
│   ├── Contact.js
├── App.js
├── index.css
├── tailwind.config.js
```

## Deployment

This project can be deployed using services like GitHub Pages, Netlify, or Vercel.

### GitHub Pages

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages
   ```
2. Add the following to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/react-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the application:
   ```bash
   npm run deploy
   ```

### Netlify or Vercel

1. Push your code to a GitHub repository.
2. Connect the repository to your Netlify or Vercel account.
3. Follow the deployment steps provided by the platform.

## Contributing

Feel free to submit issues or pull requests for improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by Jean Damascene.
