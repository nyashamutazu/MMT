## Prerequisites

Make sure that you have [Nodejs](https://nodejs.org/en/download/) on your machine.


You might want to use [venv](https://nodejs.org/en/docs/) standard Node library
to create virtual environments and have Node, npm and all dependent packages to be installed and 
served from the local project directory to avoid messing with system wide packages and their 
versions.

You may check your Node version by running:

```bash
node --version
```

Note that in this repository whenever you see `node` it will be assumed that it is Node.


**Installing dependencies**

Install all dependencies that are required for the project by running:

```bash
npm install 
```
## ********************************************************
##                   My Approach
## ********************************************************


## My approach to answering Q1

I went with using Javascript, with using the file system module to find, read and write files. The module helps with handling successful and failed requests.

## My approach to answering Q2

I decided to go with Nodejs with express to created my local server, run on server.js and app.js to connect my application. I used dependencies such as body-parser and cors to support with requests and manipulation of data.

Application runs on localhost:5000

routes / access 

# Get all conference
```
localhost:5000/api
```
**Response for - Get Request**

Success : 
```
200 - {
    status: 
    message:
    data
}
```

Failed : 
```
500 - {
    status: 
    message:
}
```

# Create a conference 
```
localhost:5000/api
```
**Response for - Post Request**
Success : 
```
200 - {
    status: 
    message:
}
```

Failed : 
```
500 - {
    status: 
    message:
}
```

# Add attendee to a conference 
```
localhost:5000/api/:room
```
**Response for - Post Request**
Success : 
```
200 - {
    status: 
    message:
}
```

Failed :
```
500 - {
    status: 
    message:
}
```
