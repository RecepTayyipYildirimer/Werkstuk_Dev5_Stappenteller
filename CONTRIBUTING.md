# Contributing Stappenteller

A big welcome and thank you for considering contributing to Stappenteller open source projects! It’s people like you that make it a reality for users in our community.

Reading and following these guidelines will help us make the contribution process easy and effective for everyone involved. It also communicates that you agree to respect the time of the developers managing and developing these open source projects. In return, we will reciprocate that respect by addressing your issue, assessing changes, and helping you finalize your pull requests.

Please feel free to submit pull requests or open issues to improve the champions in the project.

Again be sure to follow the following guidelines to get started!
# Contributing guidelines

## Acceptable Contributions

### Pull Requests

Stappenteller only accept pull requests that:

* Fixes bugs for existing functions
* Enhances the API or implementation of an existing function
* Adding more tests for optimal user experience

In the case of adding a new function:

* Document where the original source came from
* Document the path where the function is exported

PRs to our libraries are always welcome and can be a quick way to get your fix or improvement for the next release. In general, PRs should:

* Only fix/add the functionalities.
* Add unit or integration tests for fixed or changed functionality.
* Always include documentation in the repo.

For changes that address core functionality or would require breaking changes, it's best to open an Issue to discuss your proposal first. This is not required but can save time creating and reviewing changes.

* Fork the repository to your own Github account
* Clone the project to your computer
* Create a branch locally with a descriptive name
* Commit changes to the branch
* Push changes to your fork
* Open a PR in our repository
## Code of Conduct

Please read this before starting on your new implementation. We have set some basic rules so that everyone can get along. [Stappenteller_Code_Of_Conduct](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
### Our Purpose
A primary goal of all the conferences and user groups that refer to this Code of Conduct is to be inclusive to the largest number of contributors, with the most varied and diverse backgrounds possible. As such, we are committed to providing a friendly, safe and welcoming environment for all, regardless of gender, sexual orientation, ability, ethnicity, socioeconomic status and religion (or lack thereof).

This Code of Conduct outlines our expectations for all those who participate in our community, as well as the consequences for unacceptable behavior.

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards
Examples of behavior that contributes to creating a positive environment include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

### Scope

This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.
### Expected Behavior
Participate in an authentic and active way. In doing so, you contribute to the health and longevity of this community.
Exercise consideration and respect in your speech and actions.
Attempt collaboration before conflict.
Refrain from demeaning, discriminatory, or harassing behavior and speech.
Be mindful of your surroundings and of your fellow participants. Alert community leaders if you notice a dangerous situation, someone in distress, or violations of this Code of Conduct, even if they seem inconsequential.
Unacceptable Behavior
Unacceptable behaviors include: intimidating, harassing, abusive, discriminatory, derogatory or demeaning speech or actions by any participant in our community online, at all related events and in one-on-one communications carried out in the context of community business. Community event venues may be shared with members of the public; please be respectful to all patrons of these locations.

Harassment includes: harmful or prejudicial verbal or written comments related to gender, sexual orientation, race, religion, disability; inappropriate use of nudity and/or sexual images (including presentation slides); inappropriate depictions of violence (including presentation slides); deliberate intimidation, stalking or following; harassing photography or recording; sustained disruption of talks or other events; inappropriate physical contact, and unwelcome sexual attention.

Consequences of Unacceptable Behavior
### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting this repository's maintainer. All complaints will be
reviewed and investigated and will result in a response that is deemed necessary
and appropriate to the circumstances. The project team is obligated to maintain
confidentiality with regard to the reporter of an incident.

Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.
## Open [Source/Culture/Tech] Citizenship
A supplemental goal of this Code of Conduct is to increase open [source/culture/tech] citizenship by encouraging participants to recognize and strengthen the relationships between our actions and their effects on our community.

Communities mirror the societies in which they exist and positive action is essential to counteract the many forms of inequality and abuses of power that exist in society.

If you see someone who is making an extra effort to ensure our community is welcoming, friendly, and encourages all participants to contribute to the fullest extent, we want to know.

## Report bugs

* Open a ticket on github, with a bug tag
* Set application to VERBOSE in your .env file
* Include your Error logs
* Explain the setup
* include the following:

```
OS: 
Docker version: 
Global npms: 
npm version: 
```

examples, of good and bad requests

good: Getting error "" when trying to call endopoint
what data sending

Bad: endpoint does not work
## Suggest new features

* Open a feature request on github with a "enhancement" label
* Declare why usefull

## Guidelines for development

1. Fork the repo
1. Clone your fork
1. Create a branch ex. when creating a feature create a feature branch.
1. Open terminal and navigate to the `api` folder using the command: `cd api`
1. Install all dependencies with the following command: `npm install`
1. After successfully installing all dependencies and packages, simply write `npm start` to start your server
1. Build container by opening a new terminal in your console and writing: `docker-compose build`
1. To get all the tables up and running simply write the command: `docker-compose up` to the new terminal we just opened.
1. Now that you have all your terminals running, you can test it out on your desired browser by writing: `localhost:3001/`
1. After implementing your own code be sure to test it out before sending it to the repo by writing `npm run test` in the terminal
1. If you do not have any errors when testing it out, create a new branch
1. If things are working for you, add your changes with `git add.`
1. Commit your changes with `git commit -m "<your message>"`
1. Push your changes to your fork with `git push`
1. Create a pull request.
1. Iterate on the solution.
1. Finally merge your commit!


Global variables are open to use like:

`app`, `DatabaseHelper`, `Helpers`, `pg`

### (logging)

```
if(process.env.VERBOSE >= 2) {
  console.log()
}
```

expected log levels:
| verbose level | code |
| --- | --- |
| 2 | console.log |
| 1 | console.warn |
| 0 | console.error |

## Roadmap and vision

I invision that this porject would expand and create a community where people would use this project on a daily basis to help them at their daily tasks.

## Get in touch

If you wish to contact the creator, send an email to: receptayyip.yildirimer@student.ehb.be
Follow my projects on GitHub: https://github.com/RecepTayyipYildirimer/