<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<h3 align="center">Cryptolearn</h3>

  <p align="center">
    Game-Based Cryptography Algorithm Learning
    <br />
    <a href="https://github.com/malcolmtwz/cryptolearn"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://malcolmtwz.github.io/cryptolearn/">View Demo</a>
    ·
    <a href="https://github.com/malcolmtwz/cryptolearn/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/malcolmtwz/cryptolearn/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project aims to provide developers an opportunity to learn cryptography algorithms through games and tutorials. The target audience for this project are beginners in software security who are not well-versed in the field of Cyber Security, Information Technology or Computer Science. To achieve this objective, the project will accomplish four tasks:
1. Design and implement a user-friendly and responsive web application with interactive cryptography interface.
2. Start with game-based tutorials that teaches the fundamentals of simple cryptography.
3. Gamify encryption algorithms using puzzles with increasing levels of difficulty.
4. Assess the effectiveness of the web application.

https://malcolmtwz.github.io/cryptolearn/

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With
* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/malcolmtwz/cryptolearn.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### HomeScreen.js
The Home Screen is the welcoming interface of our application. Designed with user-friendliness in mind, it greets every visitor with a warm message, setting the tone for an immersive educational journey. 
Central to this screen are two prominently placed buttons:

**‘Start Learning!’**

This button is strategically designed to attract newcomers, gently ushering them into the world of knowledge contained within the app.

**‘Test your Skills!’**

Aimed at seasoned users, this button serves as an invitation to challenge and validate their understanding.

![screenshot](/screenshots/homeScreen.png)

The navigation bar will consistently appear across the application, ensuring users have a familiar point of reference regardless of their location within the interface. Additionally, both the 'Start Learning!' and 'Notes' buttons on the navigation bar will direct users to the same screen. Similarly, the 'Test your Skills!' and 'Game' buttons will lead to an identical screen experience. By ensuring such consistent navigation pathways, we aim to create an environment where learning is not just effective but also effortlessly enjoyable.

### NotesScreen.js

When a user selects either the ‘Start Learning!’ or the ‘Notes’ buttons in the application, they are ushered into the introduction page of the tutorial screens. This introductory page is designed to orient users to the Sidebar, which is consistently positioned on the left of all tutorial screens. The Sidebar is the primary navigation tool for users to choose and delve into different ciphers.  

![screenshot](/screenshots/tutorialScreen.png)

As illustrated above, the main screen intuitively directs users to select their desired cipher from the Sidebar. For those unfamiliar with the ciphers, we recommend starting from the top and progressing downward. This sequence is intentional, as the list is organized in increasing order of cipher complexity or uniqueness. Our design philosophy prioritizes user-friendliness, and this approach is consistently applied throughout the tutorial screens.
An added advantage of our Sidebar design is its modularity. As we introduce new ciphers to the application, they can be seamlessly integrated into the existing navigation structure, ensuring that updates are both efficient and non-disruptive for users.

### GamesScreen.js

Upon entering the Games Introduction screen, users are greeted with an insight into the heart of our application: the game quizzes. 

![screenshot](/screenshots/gameScreen.png)

This is what they can expect:

1) **Purpose**

This screen serves as a gateway to our quizzes. Whether a user clicks on 'Test your Skills!' or 'Game' from the main menu, they will be navigated to this introduction page.

2) **Points System Overview**

Before diving into the quizzes, users are briefed about the point system, helping them understand how their performance will be evaluated.

3) **Topic Selection**

We believe in giving our users choices. Therefore, on this screen, they can select from two distinct topics for their quiz: fruit names and vegetables names. These topics are chosen due to being universally recognized and simple to grasp. It ensures that users of all ages and backgrounds can enjoy the game without any prerequisites.

### Caesar Tutorial

The Caesar Cipher is the first selection in our tutorial screen and is meant to be the first cipher taught to new users and beginners in cryptography. Therefore, it is important for the project to create a baseline knowledge for new users to work with.

A quick tutorial is given to the user at the start of the Caesar Cipher page as seen below. The example below shows an alphabet shift for rotational value of 3. The default rotation value of the Caesar Table component is set to 3 for this example, but users can adjust the key by either dragging the bar or typing in their desired value. This would be a key component used in further game-based designs as it provides new user with an interactable interface specially created for Caesar Cipher. 

![screenshot](/screenshots/caesarCipher.png)


### Caesar Quiz

After selecting their preferred topics, cipher types, and difficulty levels, users commence the quiz. Each quiz comprises 10 randomized questions, with keys or rotational values assigned based on the cipher type. As the formats across quizzes are largely uniform, the Caesar Cipher Quiz will be used as a demonstration in the figures below to illustrate the quiz section's mechanics.

![screenshot](/screenshots/caesarQuiz.png)

In this segment of the application, users are presented with a series of encrypted texts. Their primary objective is to apply their knowledge from the tutorials to decipher these texts, submitting their plaintext values through an input box. The design choice to focus solely on uppercase values serves to create a more streamlined and focused learning experience. To aid users in their endeavors, each quiz is accompanied by a corresponding cipher table, located at the bottom of the screen. This table not only serves as a handy reference tool but also as a bridge connecting new knowledge with previous learning experiences from the tutorials.

_For full usage, please refer to the [Documentation](https://malcolmtwz.github.io/documentation/FYP Report - Malcolm Tan)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Home Screen
- [x] Navigation Bar
- [x] Notes Screen
  - [x] Caesar Cipher Tutrorial
    - [x] Interactive Caesar Cipher Table
  - [x] Beaufort Cipher Tutorial
    - [x] Interactive Beaufort Cipher Table
  - [x] Vigenere Cipher Tutorial
    - [x] Interactive Vigenere Cipher Table
  - [x] Columnar Transposition Tutorial
    - [x] Interactive Columnar Transpostion Table
  - [x] Public Key Cryptography Tutorial
    - [x] Interactive Public Key Encryption Demo
- [x] Games Screen
  - [x] Choose between Topic: Fruits or Vegetables
    - [x] Choose Quiz Type: Caesar, Beaufort, Vigenere, Columnar, Final
      - [x] Choose Levels: Encryption or Decryption
- [x] About Us Screen
    

See the [open issues](https://github.com/malcolmtwz/cryptolearn/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/malcolmtwz/cryptolearn.svg?style=for-the-badge
[contributors-url]: https://github.com/malcolmtwz/cryptolearn/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/malcolmtwz/cryptolearn.svg?style=for-the-badge
[forks-url]: https://github.com/malcolmtwz/cryptolearn/network/members
[stars-shield]: https://img.shields.io/github/stars/malcolmtwz/cryptolearn.svg?style=for-the-badge
[stars-url]: https://github.com/malcolmtwz/cryptolearn/stargazers
[issues-shield]: https://img.shields.io/github/issues/malcolmtwz/cryptolearn.svg?style=for-the-badge
[issues-url]: https://github.com/malcolmtwz/cryptolearn/issues
[license-shield]: https://img.shields.io/github/license/malcolmtwz/cryptolearn.svg?style=for-the-badge
[license-url]: https://github.com/malcolmtwz/cryptolearn/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/malcolmtwz
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
