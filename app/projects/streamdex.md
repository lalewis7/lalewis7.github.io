### ❓ **The Problem**

The popularity of streaming services has grown exponentially in the past decade, making subscriptions to various platforms a necessity to have access to all your favorite releases. Many movies and TV shows are exclusive to each service – especially as they’ve moved from just carrying these titles to now producing them – making it sometimes hard to find where certain titles are available to stream. 

### 💡 **The Solution**

[Streamdex](https://streamdex.net) solves this problem. Using our service, you can check which streaming services are offering your favorite movies and TV shows and be directed to watch them instantly. In addition to showing the offerings of various streaming services, we also let users check the availability in different countries. Streamdex also strives to help users decide what to watch by giving tailored recommendations and showing new and popular releases. Streamdex aims to consolidate the cluttered world of streaming services to get you watching quicker.

### 🔭 **Future**

Streamdex is currently in an alpha state and is missing a lot of the core functionality that it needs to fulfill its purpose. We are in the process of autonomously propagating our database using web-scraping bots. Everything has been hardcoded to give a template of what the site will look like when our service is ready for release. With the addition of bots, we will be able to ensure that our data is reliable and accurate. Once we start to fill our databases, we will start implementing algorithms to give users custom recommendations on the browse, new, and popular tabs for titles we think they might like. Additionally, we want to expand the list of streaming services we offer to include every major service. With these additions, along with some other minor changes, we hope that Streamdex will help its users find and watch all their favorite titles.

### 🥞 **The Stack**

##### Hosting

Streamdex uses Amazon Web Services (AWS) for hosting all of its systems. To the run website, we are currently using these AWS services: EC2, RDS, S3, Route 53, Certificate Manager, and CloudFront.

##### Backend API

The backend API consists of an express +node.js server that connects to a MySQL database. We run an Amazon EC2 instance, which proxies all web requests through nginx to our node.js server. Our EC2 instance is connected to an Amazon RDS database running MySQL.

##### Frontend

Streamdex has two frontend react websites: our public website and a private administrator website used for making edits to the database. Both websites run as a single static site that is compiled using create-react-app running on Amazon S3.

##### Web scraping bot

We are in the development of adding a web scraping bot to help propagate our database and keep our data up to date. We are going to use puppeteer running on a node.js server to have data autonomously added to our database.
