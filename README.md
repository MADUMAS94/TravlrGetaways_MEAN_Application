# CS465-fullstack
 This application was created through the CS-465 Full Stack Development class with MEAN


# Project Reflection

**Compare and contrast the types of frontend development you used in your full stack project, including Express, HTML, JavaScript, and the single-page application (SPA)**

The client side of this project utilized Express, HTML, JavaScript and Handlebars to display the page. This is the static peice of the applicaiton where pages were generated through routes and controllers with handlebar templates on the server then sent to the client. The admin website is where I utilized Angular to create a single page application that handled all the GET, PUT, POST and DELETE requests without the need for a third party application. This portion of the project is different than a static page as page is generated on the client side instead of the server. 

**Why did the backend use a NoSQL MongoDB database?**

MongoDB is an open source database that scales well and stores documents in JSON templates - making it a good option for this project. 

**How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?**

Javascript is a programming language that is utilized in most modern webpages. JSON is data format that is independent from any programming language, most modern programming languages contain functions that can parse and generate JSON data. JSON ties the back and frontend together by being the format that data is both sent and received from the database through the MongoDB driver. It can then be used through handlebars and typescript to display the requested information on the webpage.

**Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.**

The main example I have of refactoring code is replacing the static HTML pages with Handlebar templates. This allowed me to cut down on the code being ran to display the page and update the page with information from the database instead of having it hard coded within HTML. The benefits of this is that we can add new information to the website via the database instead of needing to refactor the code and better resource management by creating less code to read to display the page.

**Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods,**
**endpoints, and security in a full stack application.**

The methods that were utlized to manipulate the data were the standard GET,PUT,POST and DELETE methods. This was done through API endpoints where the client can communicate these requests to the server. Testing these methods were simple once implimented and could be done though either the third party application Postman or the admin webpage. Adding layers of security can increase the difficulty of testing as there now needs to be verification, encryption, and token generation included into every new request. If this is not working properly it can be difficult to pin down as many times the error will be 'no user found' instead of a code that can be traced. 

**How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?**

This class has helped me by showing me exactly what it means to be a full stack developer. Many postions are requesting specific stacks or areas that had not gotten a chance to learn before now. I can now confidently put this project into my portfolio and start applying for entry level postions requesting developers for both back, front and full stack development. 



