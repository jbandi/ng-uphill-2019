# Angular Workshop: Preparation 
### Overview:

The following steps are needed for the setup. Below are detailed informations for each of the steps.

1. Install Git
2. Install NodeJS
3. Install Chrome
4. (Optional) Install WebStorm/IntelliJ or Visual Studio Code
5. Check out the repo: `https://github.com/jbandi/ng-uphill-2019`
6. In the repo in `01-Starter/awesome-ng` run `npm install` and then `npm start`
7. (Optional) If you are new to Angular and you want to prepare yourself for the workshop then you could have a look at the official tutorial: <https://angular.io/tutorial>

If you have any questions or problems concerning the instructions below, please contact: jonas.bandi@ivorycode.com


### Important:

Make sure that you have __unrestricted__ access to the internet! In the steps below you will have to access Bitbucket, GitHub and npmjs.org. Some corporate proxies block these sites or block access over https or git!

If you are already using node/npm, make sure that you __don't__ have a global npm-proxy configured. (Check: `npm config get proxy` should return `null`). If it does not return 'null', then you should probably comment out the corresponding proxy in the file `.npmrc` in your home or profile directory.


## Software Installation
For the workshop the following software should be installed.  

**The version numbers don't have to match exactly, but they should be pretty close!**

### Git
A recent git installation is needed to download the sample code and exercises.  
Git can be downloaded from here: <https://git-scm.com/download/>

Check:  

	> git --version                                                             
	git version 2.14.1



### Node.js & NPM 
Node and NPM are the fundament for many modern web development toolchain.  
The Node installer can be downloaded here: <https://nodejs.org/>

Install the latest version of Node (at least version 8 or above).  


**Advanced instructions for OSX/Linux:** If you don't want to install global packages with `sudo` in the steps below, you can either install [Node Version Manager](https://github.com/creationix/nvm) (recommended) or you can perform the instructions here: <https://docs.npmjs.com/getting-started/fixing-npm-permissions>

Check:

	> node --version
	v10.12.0
	> npm --version
	6.4.1


### Global NPM Packages

We want to install some JavaScript development tools globally, so that they can be used from the commandline.

**OSX/Linux:** run the following commands:

	sudo npm install -g serve @angular/cli 



**Windows:** run the following commands in a Administrator command prompt:

	npm install -g serve @angular/cli


Ignore some scary warnings during the installation. Everything is ok, as long as the final output of the installation command is not an `npm ERR ...`
	
**Background info:** As default (if you did not execute the advanced instructions above to avoid `sudo`) the installation of those global packages is placed in `/usr/local/lib/` on OSX/Linux or in `C:\Program Files\nodejs` on Windows. To uninstall the packages, you can always delete the directory `node_modules` there.



### Browser
A recent Chrome browser must be available.  

*Optional:* install the Extension "Augury": https://augury.angular.io/  
*(installing extensions is often blocked in corporate environments)*



### Optional: WebStorm/IntelliJ or Visual Studio Code
[WebStorm](http://www.jetbrains.com/webstorm) or [Visual Studio Code](https://code.visualstudio.com/) are both very good editors/IDEs for web development.  
Note: IntelliJ IDEA Ultimate supports the same features as WebStorm.

These editors are not a requirement for the workshop. However the examples and demos will be shown with WebStorm. It is up to the attendees to use any other editor of their preference. 



## Course Material

All the course material will be provided in the following repository:

	https://github.com/jbandi/ng-uphill-2019

Please clone the repo like this:

	git clone https://github.com/jbandi/ng-uphill-2019.git


To update the repo later during the course:

	cd ng-bfh-2019
	git pull


## Run the Intro Example

In order to check that the environment is set up correctly, the intro example should be executed:

	git pull
	cd 01-Starter/awesome-ng
	npm install
	npm start

Navigate a modern browser (Chrome, Firefox ...) to `http://localhost:4200/` - a "Welcome"-screen should be displayed.

## (Optional) The official Angular Tutorial
If you are new to Angular and you want to prepare yourself for the workshop then you could have a look at the official tutorial: <https://angular.io/tutorial>