# Stockholm AI Leads

Welcome to the Stockholm AI Leads project! This repository contains a simple website designed for lead generation outreach, focusing on AI solutions tailored for facility management and waste management in Stockholm.

## Project Structure

The project is organized as follows:

```
stockholm-ai-leads
├── public
│   ├── index.html         # Main landing page introducing AI solutions
│   ├── services.html      # Details of specific AI services offered
│   ├── contact.html       # Contact form for potential clients
│   ├── robots.txt         # Instructions for search engine indexing
│   ├── styles
│   │   └── main.css       # CSS styles for the website
│   └── scripts
│       └── main.js        # JavaScript functionality for the website
├── server
│   └── form-handler.js     # Handles form submissions from the contact page
├── package.json            # npm configuration file
├── .gitignore              # Files and directories to be ignored by Git
└── README.md               # Documentation for the project
```

## Features

- **Tailored Solutions**: Focused on providing AI-driven solutions specifically for facility management and waste management in Stockholm.
- **Lead Generation**: Designed to attract high-ticket customers through targeted outreach.
- **User-Friendly Interface**: Clean and professional design to enhance user experience.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd stockholm-ai-leads
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Deployment

This repository includes a GitHub Actions workflow that publishes the `public/` folder to GitHub Pages when you push to the `main` branch. The repository also contains a `public/CNAME` file set to `aiautomationstockholm.org` so GitHub Pages will use that custom domain after you configure it in the repository settings.

Steps to deploy using GitHub Pages:

1. Create a GitHub repository and push this project to the `main` branch.
   ```bash
   cd stockholm-ai-leads
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin git@github.com:USERNAME/aiautomationstockholm.git
   git push -u origin main
   ```

2. In the GitHub repository settings -> Pages (or Settings -> Pages), ensure the source is set to the `gh-pages` branch or the workflow is enabled. The workflow will create/update the `gh-pages` branch automatically on pushes to `main`.

3. Configure the custom domain `aiautomationstockholm.org` in the Pages settings (the `CNAME` file is already present).

4. Update your domain registrar DNS:
   - Add an `A` record pointing to GitHub Pages IPs (if required), or follow GitHub Pages custom domain instructions for your registrar.
   - GitHub's recommended IP addresses are in their docs — prefer following the current GitHub Pages docs for exact records.

Alternative: If you'd prefer Netlify, push the repo to GitHub and connect it to Netlify. Enable Netlify Forms or replace the contact form's `action` with Formspree as described earlier.

If you want, I can:
- Create the GitHub repo for you (you'll need to provide access/token).
- Convert the contact form to Netlify Forms or Formspree and test the submission locally.
