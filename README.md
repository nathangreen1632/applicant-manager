# <strong><span id="top" style="color:lightseagreen;"> Applicant Manager </span></strong>

![GitHub](https://img.shields.io/badge/GitHub-API-blue.svg)
![React](https://img.shields.io/badge/React-19.0.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6.0.11-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-22.11.0-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Build_Status](https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd9eb5aaca434fac4f1c7c_Build-Passing-brightgreen.svg)
[![Deps](https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd9eb5aaca434fac4f1c9e_Deps-Up--to--date-brightgreen.svg)]()

<details>
  <summary><strong><span style="color:lightseagreen;">Table of Contents</span></strong></summary>
  <details>
    <summary><strong><span id="about" style="color:coral;">About</span></strong></summary>
    <ul>
      <li><a href="#saving-candidates">Saving Candidates</a></li>
      <li><a href="#skipping-candidates">Skipping Candidates</a></li>
    </ul>
  </details>
  <details>
    <summary><strong><span style="color:coral;">Key Features</span></strong></summary>
    <ul>
      <li><a href="#candidate-browsing">Candidate Browsing</a></li>
      <li><a href="#save-for-later">Save for Later</a></li>
      <li><a href="#skip-option">Skip Option</a></li>
      <li><a href="#persistent-storage">Persistent Storage</a></li>
      <li><a href="#user-friendly-interface">User-friendly Interface</a></li>
    </ul>
  </details>
  <details>
    <summary><strong><span id="technologies-used" style="color:coral;">Technologies Used</span></strong></summary>
    <ul>
      <li><a href="#html5">HTML5</a></li>
      <li><a href="#css-3">CSS 3</a></li>
      <li><a href="#node.js">Node.js</a></li>
      <li><a href="#typescript">TypeScript</a></li>
      <li><a href="#react">React</a></li>
      <li><a href="#react-router">React Router</a></li>
      <li><a href="#vite">Vite</a></li>
      <li><a href="#npm">npm</a></li>
    </ul>
  </details>
  <details>
    <summary><strong><span id="installation" style="color:coral;">Installation</span></strong></summary>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#clone-the-repository">Clone the Repository</a></li>
      <li><a href="#install-dependencies">Install Dependencies</a></li>
      <li><a href="#set-up-environment-variables">Set up Environment Variables</a></li>
      <li><a href="#start-the-development-server">Start the Development Server</a></li>
    </ul>
  </details>
  <details>
    <summary><strong><span id="usage" style="color:coral;">Usage</span></strong></summary>
    <ul>
      <li><a href="#opening-the-application">Opening the Application</a></li>
      <li><a href="#browsing-candidates">Browsing Candidates</a></li>
      <li><a href="#saving-candidates2">Saving Candidates</a></li>
      <li><a href="#skipping-a-candidate">Skipping a Candidate</a></li>
      <li><a href="#viewing-saved-candidates">Viewing Saved Candidates</a></li>
      <li><a href="#handling-empty-candidate-lists">Handling Empty Candidate Lists</a></li>
      <li><a href="#potential-error-handling">Potential Error Handling</a></li>
    </ul>
  </details>
  <details>
    <summary><strong><span id="contributing" style="color:coral;">Contributing</span></strong></summary>
    <ul>
      <li><a href="#contributing-workflow">Contributing Workflow</a></li>
      <li><a href="#contribution-guidelines">Contribution Guidelines</a></li>
    </ul>
  </details>
  <details>
    <summary><strong><span id="tests" style="color:coral;">Supplemental Docs</span></strong></summary>
    <ul>
      <li><a href="#tests">Tests</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#questions">Questions</a></li>
      <li><a href="#you-tube-link">Link to Video Walkthrough</a></li>
    </ul>
  </details>  
</details>




## <span id="about" style="color:lightseagreen;"> About </span>
The Applicant Manager is a comprehensive web application developed to assist employers in efficiently reviewing and tracking potential candidates by leveraging data from the GitHub API. This application enables hiring managers and recruiters to explore candidate profiles, assess their qualifications, and make informed hiring decisions based on publicly available GitHub information.

Upon loading the application, users are presented with detailed candidate profiles that include key information such as their name, username, location, avatar, email, GitHub profile URL, current company affiliation, and hireability. The intuitive interface allows users to systematically browse through the list of candidates, making it easier to identify potential hires that align with their hiring criteria.

The application provides two primary actions for managing candidates:

### <span id="saving-candidates" style="color:lightseagreen;"> Saving Candidates: </span>

Clicking the <span style="color:coral;">✅</span> button allows users to save a candidate to the list of potential hires for further review or contact.
The saved candidates are stored in a separate section where users can revisit and evaluate them at their convenience.

### <span id="skipping-candidates" style="color:lightseagreen;"> Skipping Candidates: </span>

Clicking the <span style="color:coral;">❌</span> button moves to the next candidate without saving the current one, allowing users to continue their search efficiently.
In cases where no more candidates are available for review, the system notifies the user with an appropriate message, ensuring clarity and ease of use.

Additionally, the application offers a Saved Candidates Page, where users can access a list of all previously saved candidates. This page ensures that the data persists across sessions, allowing recruiters to maintain a well-organized pipeline of potential hires.

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

## <span id="key-features" style="color:lightseagreen;"> Key Features: </span>
* <span id="candidate-browsing" style="color:cornflowerblue;">Candidate Browsing: </span>
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Review GitHub profiles one at a time with essential details.
* <span id="save-for-later" style="color:cornflowerblue;">Save for Later: </span>
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Bookmark promising candidates for follow-ups.
* <span id="skip-option" style="color:cornflowerblue;">Skip Option: </span>
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Continue browsing through the pool without saving.
* <span id="persistent-storage" style="color:cornflowerblue;">Persistent Storage: </span>
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Ensure saved candidates remain available even after page reloads.
* <span id="user-friendly-interface" style="color:cornflowerblue;">User-friendly Interface: </span>
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Designed for seamless navigation and efficient candidate management.

With these features, the Applicant Manager simplifies the hiring process by allowing employers to focus on reviewing relevant candidates efficiently while leveraging GitHub's extensive data to make informed decisions.

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

## <span id="technologies-used" style="color:lightseagreen;"> Technologies Used </span>
<br>&nbsp; <span id="html5"> [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.com/html5)</span>
<br>&nbsp; <span id="css-3">[![CSS 3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/css_intro.asp)</span>
<br>&nbsp; <span id="node.js">[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)</span>
<br>&nbsp; <span id="typescript">[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)</span>
<br>&nbsp; <span id="react">[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)</span>
<br>&nbsp; <span id="react-router">[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)</span>
<br>&nbsp; <span id="vite">[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vite.dev/)</span>
<br>&nbsp; <span id="npm">[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com)</span>

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

## <span id="installation" style="color:lightseagreen;"> Installation </span>
Follow these steps to set up the project on your local machine:

### <span id="prerequisites" style="color:coral;">Prerequisites:</span>
Before you begin, ensure you have the following installed on your machine:
- <span style="color: cornflowerblue">Node.js</span> (version 18 or higher)
  - Download and install [Node.js](https://nodejs.org) from the official website.
  To verify the installation, run the following command in your terminal:
  ```bash
    node -v
    ```
- <span style="color: cornflowerblue">npm</span> (Node Package Manager)
  - npm is included with Node.js. To verify the installation, run the following command in your terminal:
  ```bash
    npm -v
    ```
- <span style="color:cornflowerblue">Git</span> (version control system)
  - Download and install [Git](https://git-scm.com) from the official website.
  To verify the installation, run the following command in your terminal:
  ```bash
    git --version
    ```
### **<span id="clone-the-repository" style="color:coral;">Clone the repository: </span>**
   ```bash
   git clone https://github.com/nathangreen1632/applicant-manager.git
   cd applicant-manager
   ```

### **<span id="install-dependencies" style="color:coral;"> Install dependencies: </span>**
   ```bash
   npm install
   ```

### **<span id="set-up-environment-variables" style="color:coral;"> Set up environment variables: </span>**
   - The project requires certain environment variables to be configured. Create a .env file in the root of the project directory and add the following: (Do NOT commit this to your repository.)


  - <span style="color:coral;">Add the following content: </span>
    ```env
    VITE_GITHUB_API_TOKEN=your_github_api_token_here
    ```

- Replace `your_github_api_token_here` with your GitHub API token. You can generate a new token by following the instructions [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).

### **<span id="start-the-development-server" style="color:coral;"> Start the development server: </span>** 
Once dependencies are installed and environment variables are set, start the local development server by running:
- **<span style="color:cornflowerblue;"> Build the project for production: </span>**
   ```bash
   npm run build
   ```

- **<span style="color:cornflowerblue;"> Run the development server: </span>**
   ```bash
   npm run start
   ```

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

## <span id="usage" style="color:lightseagreen;"> Usage </span>
Follow these steps to use the Applicant Manager application:

### **<span id="opening-the-application" style="color:coral;"> Opening the Application: </span>**
Once the project is set up and running, open you preferred web browser and navigate to:
```env
http://localhost:{Port Number}
```
By default, the applications runs on port 5173 when using Vite. If it's not working, check the terminal output for the correct port number.

### **<span id="browsing-candidates" style="color:coral;"> Browsing Candidates: </span>**
Upon loading the application, a candidate profile will be displayed on the screen. The profile includes the following details: 
- <span style="color:cornflowerblue">Name:</span> Full name of the candidate.
- <span style="color:cornflowerblue">Username:</span> GitHub username of the candidate.
- <span style="color:cornflowerblue">Location:</span> Candidate's geographical location (if available).
- <span style="color:cornflowerblue">Avatar:</span> Candidate's profile picture fetched from GitHub.
- <span style="color:cornflowerblue">Email:</span> Candidate's email address (if available).
- <span style="color:cornflowerblue">GitHub Profile:</span> URL to the candidate's GitHub profile.
- <span style="color:cornflowerblue">Company:</span> Current company affiliation of the candidate.
- <span style="color:cornflowerblue">Hireability:</span> Indicates if the candidate is available for hire.

### **<span id="saving-candidates2" style="color:coral;"> Saving Candidates: </span>**
If you find a candidate that matches your requirements, click the <span style="color:coral;">✅</span> button to save the candidate for further review. The saved candidates will be stored in a separate section for easy access.
- Upon clicking the <span style="color:coral;">✅</span> button, the candidate will be added to the saved candidates list in local storage.
- You will automatically proceed to the next candidate profile for review.
- A notification may appear confirming that the candidate has been saved successfully.
###### Tip: Saved candidates can be viewed on the Saved Candidates page.

### **<span id="skipping-a-candidate" style="color:coral;"> Skipping a Candidate: </span>**
If a candidate does not meet your requirements, click the <span style="color:coral;">❌</span> button to skip the candidate and move to the next profile.
- Skipping a candidate will not save their profile to the saved candidates list.
- You will automatically proceed to the next candidate profile for review.

###### Note: Once skipped, a candidate cannot be revisited unless they appear in the candidate pool again.

### **<span id="viewing-saved-candidates" style="color:coral;"> Viewing Saved Candidates: </span>**
To review previously saved candidates, navigate to the Saved Candidates page by clicking the `Saved Candidates` link in the navigation bar.

On the Saved Candidates page, you can view a list of all saved candidates along with their details. This page allows you to revisit saved candidates, review their profiles, and make informed hiring decisions based on the information provided.
- Saved candidates are stored in local storage and persist across sessions.
- You can view the saved candidates list at any time by visiting the Saved Candidates page.
- Saved candidates can be removed from the list by clicking the ❌ button next to their profile.

### **<span id="handling-empty-candidate-lists" style="color:coral;"> Handling Empty Candidate Lists: </span>**
When there are no more candidates available to review, the application will display a message indicating that the candidate pool is empty.

`No more candidates available. Please check back later`.

### **<span id="potential-error-handling" style="color:coral;"> Potential Error Handling: </span>**
If the applicatoin encounters any errors while fetching data from GitHub (e.g., network issues, API rate limits), an error message will be displayed on the screen. Some possible error messages include: 
- `Error fetching candidate data. Please try again later.`
- `API rate limit exceeded. Please try again later.`
- `Network error. Please check your internet connection.`


<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

## <span id="contributing" style="color:lightseagreen;"> Contributing </span>
Contributions to this project are highly encouraged and appreciated. If you want to improve the project or introduce new features, follow the structured workflow below to ensure a smooth collaboration process.

### **<span id="contributing-workflow" style="color:coral;">Contributing Workflow:</span>**
1. **<span style="color:cornflowerblue;"> Fork the Repository </span>**:
   Navigate to the original GitHub repository page and click on the 'Fork' button at the top-right corner. This creates a personal copy of the project under your GitHub account.


2. **<span style="color:cornflowerblue;"> Clone Your Fork </span>**:
    Clone the repository to your local machine using the following command:
    ```bash
    git clone https://github.com/YOUR_USERNAME/applicant-manager.git
    cd applicant-manager
    ```
   
3. **<span style="color:cornflowerblue;"> Create a New Branch </span>**:
    Create a new branch to work on your changes. naming your branch appropriately helps in identifying its purpose.
    ```bash
    git checkout -b feature-branch
    ```
   
4. **<span style="color:cornflowerblue;"> Make Your Changes </span>**:
   Implement your desired improvements, whether it's fixing bugs, enhancing features, or improving documentation. Ensure you follow the project's coding standards and guidelines.


5. **<span style="color:cornflowerblue;"> Commit Your Changes </span>**:
Stage and commit your modifications with a meaningful message:
    ```bash
    git add -A
    git commit -m "Add feature: Detailed description of your changes made"
    ```

6. **<span style="color:cornflowerblue;"> Push Your Fork </span>**:
    Push your changes to your forked repository on GitHub:
    ```bash
    git push origin feature-branch
    ```
   
7. **<span style="color:cornflowerblue;"> Submit a Pull Request </span>**:
Go to the original repository and click on `Pull Requests`. Click `New Pull Request`, select your feature branch, and provide a comprehensive description of your changes, including the purpose and impact. 


8. **<span style="color:cornflowerblue;"> Review and Collaborate </span>**:
   Your pull request will be reviewed by project maintainers to ensure it meets quality standards and aligns with project goals. Constructive feedback will be provided if necessary. Once approved, it will be merged into the main branch.

### **<span id="contributing-workflow" style="color:coral;">Contribution Guidelines:</span>**
- Ensure your changes are well-tested and do not introduce any breaking changes.
- Follow the project's coding standards and guidelines.
- Make sure your commits are descriptive and provide context.
- Document any new features, changes, or improvements made.
- Keep your branch up to date with the latest changes from the main branch to avoid conflicts. 

#  🎉 Thank you for contributing to the Applicant Manager project! 🎉

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

## <span id="tests" style="color:lightseagreen;"> Tests </span>
No tests available at this time.

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

## <span id="license" style="color:lightseagreen;"> License </span>
This project is licensed under the [MIT License](LICENSE).

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

## <span id="questions" style="color:lightseagreen;"> Questions </span>
If you have any questions or feedback, feel free to reach out via the following channels:

- **<span style="color:coral;">GitHub:</span>** [nathangreen1632](https://github.com/nathangreen1632)
- **<span style="color:coral;">LinkedIn:</span>** [Nathan Green](https://www.linkedin.com/in/jgreen1632)
- **<span style="color:coral;">Stack Overflow:</span>** [Nathan](https://stackoverflow.com/users/27279774/nathan)

<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>

## <span id="you-tube-link" style="color:lightseagreen;"> Link to Video Walkthrough </span>
[Project Walkthrough](https://www.youtube.com/watch?v=6z5qPHpE0Mo&t)

<a id="you-tube-link"></a>


<div style="text-align: right;">
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20Top-%E2%86%91-royalblue" alt="Back to Top">
  </a>
</div>