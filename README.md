# **PetFriends**

This is a website for pets only! We have here a social media for pets. We can make our beloved pets a profile so they can post silly photos of themselves and follow, vote (or downvote) and comment on other pet's profiles! Saving posts is even possible. All pets welcome! From cats, dogs, hedgehogs, lizards and so on. The site is a content sharing platform, which, once you sign up, you will be redirected to sign in and then redirected to the home page/main feed. From there you can click on your profile icon in the top right of the NavBar and see your profile stats (once you gain some), see your posts, and click on the bars to edit your profile, password and username. Personalise your pet's profile with a picture and a bio, a little bit about your pet!

Once your pet follows a few profiles, you'll be able to see said followed profiles in the "pawfeed" section from the NavBar. The NavBar also contains a "saved" section, which allows you to see posts that you (your pets) specifically saved.

There is a sidebar featured on the posts and profile pages, to show the popular pets profiles and suggested "recommended users to follow". 

Once you're on the homepage, you can "add post", you can also use the search bar above the "add post" section to search through all posts using a keyword or a user's name. 
The three dots on the side of your post allow you to edit or delete your own posts, and the same goes for comments you've written on posts.

This project is the final of five projects that needs to be completed in order to receve a diploma in Software Development from The Code Institute.

## Responsive screen display

![screenshot](documentation/test_screenshots/responsive.png)


A live version of this website will be found here: https://pet-friends.herokuapp.com/

* Deployed FrontEnd - https://pet-friends.herokuapp.com/

* Deployed BackEnd API - https://petfriends-api.herokuapp.com/

* BackEnd Repo - https://github.com/JodyMurray/my-api.git

* FrontEnd Repo - https://github.com/JodyMurray/petfriends.git



## **Table of Contents** ##
<details><summary>UX</summary>

- [User Demographic](#user-demographic "User Demographic")
- [Site Goals](#site-goals "Site Goals")
- [User Goals](#user-goals "User Goals")
- [Audience](#audience "Audience")
- [User Stories](#user-stories "User Stories")

</details>
<details><summary>Design</summary>

- [Colour Scheme](#colour-scheme "Colour Scheme")
- [Typography](#typography "Typography")
- [Iconography](#iconography "Iconography")
- [Wireframes](#wireframes "Wireframes")
- [Images](#images "Images")

</details>
<details><summary>Features</summary>

- [NavBar](#navbar "NavBar")
- [Home Landing Page](#home-landing-page "Home Landing Page")
- [Post Page](#post-page "Post Page")
- [About Page](#about-page "About Page")
- [PawFeed](#pawfeed "PawFeed")
- [Saved](#saved "Saved")
- [Profile Page](#profile-page "Profile Page")
- [Sign-in](#sign-in "Sign-in")
- [Sign-up](#sign-up "Sign-up")
- [No results found](#no-results-found "No results found")
- [CRUD](#crud "CRUD")
- [Defensive Design](#defensive-design "Defensive Design")

</details>

<details><summary>Technologies Used</summary>

- [Languages Used](#languages-used "Languages Used")
- [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used "Frameworks, Libraries and Programs Used")
- [Databases platform and cloud storage](#databases-platform-and-cloud-storage "Databases platform and cloud storage")

</details>
<details><summary>Testing</summary>

- [Introduction](#introduction "Introduction")
- [Validator testing](#validator-testing "Validator Testing")
- [Fixed Bugs and Solutions](#fixed-bugs-and-solutions "Fixed Bugs and Solutions") 
- [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")
- [Future plans to implement](#future-plans-to-implement "Future plans to implement")

</details>

<details><summary>Deployment</summary>

- [GitHub](#github "GitHub")
- [Heroku](#heroku "heroku")

</details>


<details><summary>Credits</summary>

- [Acknowledgements](#acknowledgements "Acknowledgements")
- [Sources](#sources "Sources")
- [Media](#media "Media")

</details>

------------------------------------------------------------------------------------------------------------

## **UX**

### **User Demographic**

This application has been designed for pets of all kinds who want to share content and make some friends!
Mkae your pet a profile, add a post and start interacting with fellow domesticated animals! 

### **Site Goals**

To build a content sharing platform to allow users to make profiles for their pets, add posts, follow and unfollow other users, vote or downvote posts, as well as save them, and comment on posts too! You can use the provided search bar to search through the posts with a keyword or a user's name. 


### **Audience**

For your pets! Especially those looking to make new friends.


### **User Stories**
User Stories and Backend Tasks can be found in this GitHub repository project Kanban board, and for this project, all user stories can be found [here](https://github.com/users/JodyMurray/projects/11)

## **Design**

### **Colour Scheme**
The colour scheme chosen, was decided from looking up trending colour schemes online from this website 
[(https://coolors.co/palettes/trending)]
- The colour for the NavBar is a linear-gradient (to right, rgba(241, 231, 254), rgba(213, 184, 255))
- The colour for the content boxes is rgb(246, 239, 245)
- The colour for the downVotes and saved icons in posts is rgb(7, 108, 108)
- The colour for headings in the signup/in page is #7a21b2
- The colour for the "light" buttons is #7a21b2, #ddc6ec
- The colour for the unfollow button is rgb(139, 227, 218)


### **Typography**

All fonts are from the Google Fonts library.The following fonts were chosen for the page:
- 'Hanken Grotesk', sans-serif for the headers in the SignInUpForms.
- 'Raleway', sans-serif for the rest of the font on the page.

### **Iconography**

The logo used for this project was made using [Looka](https://looka.com/explore).

### **Wireframes**

Wireframe for home page/feed:

![screenshot](documentation/wireframes/wireframes1.png)
<br>
<br>

Wireframe for post page:

![screenshot](documentation/wireframes/wireframes2.png)
<br>
<br>

Wireframe for profile page:

![screenshot](documentation/wireframes/wireframes3.png)
<br>
<br>

Wireframe for add post page:

![screenshot](documentation/wireframes/wireframes4.png)
<br>
<br>

### **Images**

All images for the websites pages were sourced through google and stored on Cloudinary.

The images used for the posts and pet's profiles were sourced from google, but mostly from pets I live with (Yoda) and my friend's pets. 

## **Features**

### **NavBar**
NavBar, user not logged in.

![screenshot](documentation/features/NavBar2.png)

NavBar, user loggeed in.

![screenshot](documentation/features/NavBar.png)

### **Home Landing Page**

The home screen and landing page, with the recommended profiles sidebar.

![screenshot](documentation/features/HomePage.png)

### **Post Page**

The post's page, with the recommended profiles sidebar.
Thumbs up and thumbs down buttons to upvote or downvote any post to your desire.
The three dots on the side of the post image is the button to edit or delete your post.

![screenshot](documentation/features/PostPage1.png)
![screenshot](documentation/features/PostPage2.png)


### **About Page**

Just a little paragraph about the site! This page only shows up in the NavBar if you are not signed in.

![screenshot](documentation/features/About.png)

### **PawFeed**

The PawFeed consist of posts from users that you follow.

![screenshot](documentation/features/PawFeed.png)

### **Saved**

The saved page consists of posts you have specifically saved.

![screenshot](documentation/features/Saved.png)

### **Profile Page**

Your profile page, or another user's, along with the sidebar of recommended profiles to follow. 
The profile page contains a bio section, the bars in the corner to edit your profile, change your username or password.

![screenshot](documentation/features/ProfilePage.png)

### **Sign-in**

Sign-in page, along with a link to sign up for an account if you haven't already!

![screenshot](documentation/features/SignIn.png)

### **Sign-up**

Sign-up page, along with a link to sign in if you have an account already!


![screenshot](documentation/features/SignUp.png)

### **CRUD**



## **Technologies Used**
### **Languages Used**
- HTML
- CSS
- Javascript
- React


### **Frameworks, Libraries and Programs Used**
- [Axios](https://axios-http.com/): a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
- [Favicon](https://favicon.io/): Used to generate the favicon image from a logo generated.
- [jwt-decode](https://jwt.io/): is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
- [React-Bootstrap](https://react-bootstrap.github.io/): a component-based library that provides native Bootstrap components as pure React components.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): enables you to implement dynamic routing in a web app. 
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component): a technique that automatically adds the next page as the user scrolls down through content, more content is loaded.
- [Font Awesome](https://fontawesome.com/): a widely-used icon set that gives you scalable vector images that can be customized with CSS.
- [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/): an open source tool for running technical website audits.
- [Am I Responsive?](https://ui.dev/amiresponsive): to ensure the project looked good across all devices.
- [HTML Markup Validation](https://validator.w3.org/): used to validate HTML code syntax.
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/): used to validate CSS code syntax.
- [Balsamiq](https://balsamiq.com/): used to create mockups/wireframes of the project prior to starting.
- [Google Fonts](https://fonts.google.com/): a computer font and web font service owned by Google. This includes free and open source font families.
- [GitHub](https://github.com/): an Internet hosting service for software development and version control using Git.
- [Heroku](https://heroku.com/): a cloud platform as a service (PaaS) supporting several programming languages. Used to 
deploy and store for final deployment.

### **Databases platform and cloud storage**

- ElephantSQL Postgres: database service provided by ElephantSQL for data storage.
- Heroku Postgres: SQL database service provided directly by Heroku for storing data.
- Cloudinary: to store images and static files in production.
- Heroku: to deploy and run the application in production.

## **Testing**
### **Introduction**
This project has been continuously tested throughout development stages using the following features:
- Python terminal for backend functionalities
- Google Developer Tools
- Manual Testing
- Automated Testing

### **Validator Testing**
- All HTML files passed through the HTML checker with no errors, but with an info message to remove trailing slashes in the index.html.
- After removal of these slashes, there was so message and everything passed.

![screenshot](documentation/test_screenshots/HTML_validator.png)


- CSS files pass through the Jigsaw validator without error.

![screenshot](documentation/test_screenshots/CSS_validator.png)

- All JSX code was validated and corrected throughout the development of the project.


#### **LightHouse testing**

* **For Desktop:**

    | Section | Performance | Accessibility | Best Practices | SEO |
    | --- | --- | --- | --- | --- |
    | Home | 73 | 100 | 92 | 100 |
    | PawFeed | 73 | 100 | 92 | 100 |
    | Saved | 73 | 100 | 92 | 100 |
    | Sign Up | 86 | 100 | 67 | 100 |
    | Sign in | 87 | 100 | 67 | 100 |
    | Profile | 83 | 100 | 92 | 100 |

* **For Mobile devices:**

    | Section | Performance | Accessibility | Best Practices | SEO |
    | --- | --- | --- | --- | --- |
    | Home | 51 | 100 | 92 | 100 |
    | PawFeed | 53 | 100 | 92 | 100 |
    | Saved | 51 | 100 | 92 | 100 |
    | Sign Up | 53 | 100 | 83 | 100 |
    | Sign in | 53 | 100 | 83 | 100 |
    | Profile | 51 | 100 | 92 | 100 |


### **Fixed bugs and solutions**

- TokenTimestamp wasn't functioning as it should.
    * Solution: A spelling error fix solved the issue.

- Reply count unpon testing wasn't going up in count as a reply is added.
    * Solution: The variable was wrongly named "replies_count", resolved once renamed "reply_count".

- For smaller screen sizes, the navlink's text and icons stacked on top of each other.
    * Solution: Reduce padding, size of font and reduce margin on the logo as it was pushing everything to the right.

- An error logged to the console for the logo/favicon image. 
    * Solution: I had deleted the original favicon.io 16x16 images when I first opened the project, adding these back with. the new logo resolved this error.

- Errors would show up in the console claiming that there were several icons with "class" instead of "className" 
obviously from copying and pasting from font awesome.
    * Solution: Searching all icons in the sidebar on github, this was quicky resolved.

- When the reply icon was clicked on, the page wasn't redirecting to the reply section on the post page.
    * Solution: There was an unnecessary space in the link - {posts/$id}.

- There was an issue with logging in from safari, once I added the credentials it would jump back to the signin page.
    * Solution: Upon researching in Slack, the issue was with the JWT json web token as a http-only cookie in the browser,
    in the settings in Safari, enabling "Allow cross-website tracking" resolved the issue and it was possible to sign-in.


## **Deployment**
### **GitHub**
### **Heroku**


## **Credits**

- The Moments walkthrough was used as a guide for this project, it served as a major help in creating this site.
- My mentor at Code Institute - Martina Terlevic.
- Keiron Chaudhry, a fellow student and great support!


## **Sources**

- The Moments walkthrough was the main source I used as a guide for this project.
- Slack - was a major help in solving some issues I came across.
- StackOverflow - another major help in solving issues I came across building this project.


## **Media**

- The media sourced for this website, were mostly found on Google.
- Other images were from friends and family, photos of their pets. And my own pet's images also.
- The logo was generated using a logo generator from this website - [Looka](https://looka.com/)
- The background remover tool was very useful to help with the logo and favicon - [here](https://www.remove.bg/)
- The image for favicon was generated through - [favicon.io](https://favicon.io/)
- The image for the responsive design at the top of the ReadMe was generated through - 
[am i responsive?](https://ui.dev/amiresponsive)


