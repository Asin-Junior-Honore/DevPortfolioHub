# Contributing to DevPortfolioHub

Thank you for considering contributing to our project! This guide outlines how you can contribute to the project by adding your details to the `contributors.json` file.

## Adding Your Details

To add your details to the project, please follow these steps:

1. **Fork the Repository**: Click on the "Fork" button at the top right corner of the repository page to create a copy of the repository in your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using the following command in your terminal or command prompt: 

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

3. **Create Your Branch**: Create a new branch on your local machine where you'll make your changes. This can be done using the following command:

   ```bash
   git checkout -b your-branch-name
   ```

4. **Create `contributors.json`**: In the root directory of the cloned repository, create a new file named `contributors.json`.

5. **Add Your Details**: Open the `contributors.json` file and add your details in the following format:

   ```json
   [
     {
       "name": "Your Full Name",
       "portfolio": "Link to Your Portfolio"
     }
   ]
   ```

   Replace `"Your Full Name"` with your actual full name and `"Link to Your Portfolio"` with the URL of your portfolio website.

6. **Commit Your Changes**: After adding your details, save the file and commit your changes with a descriptive commit message:

   ```bash
   git add contributors.json
   git commit -m "Add [Your Full Name]'s details to contributors.json"
   ```

7. **Push Your Changes**: Push your changes to your forked repository on GitHub:

   ```bash
   git push origin your-branch-name
   ```

8. **Submit a Pull Request**: Visit the main repository on GitHub and click on the "New pull request" button. Follow the prompts to submit your pull request. Please provide a clear description of the changes you've made.

## Contribution Guidelines

- Please ensure that your details are added in the correct JSON format as shown above.
- Make sure your portfolio link is valid and points to your actual portfolio website.
- If you're updating an existing entry, provide a clear explanation of the changes in your pull request description.
- Avoid adding any sensitive or personal information in your details.

Thank you for contributing to our project! We appreciate your support and participation.✌️🌟🧑‍💻
