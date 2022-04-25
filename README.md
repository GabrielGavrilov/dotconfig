Dotconfig was inspired by dotenv, all credit goes towards them for the idea.

NPM Package: https://www.npmjs.com/package/dotconfigure
GitHub Repository: 

# dotconfig 

Dotconfig is a simple lightweight zero-dependency module that allows developers to create enviroment variables in a ``.config`` file. No more having to store your enviroment variables inside your source, start storing them somewhere safer with dotconfig!

# Install

to install dotconfig locally via node package manager.

```bash
npm install dotconfigure --save
```

# Usage

Create a `.config` file in the root of your project, here is where we will be storing all the variables inside this file. 

and as early as possible, import dotconfig into your application:
```javascript
const config = require('dotconfigure')
```

## Variables

Creating variables:
```dosini
VARIABLE_DATA_TYPE=VARIABLE_NAME=value
```
With dotconfig, we first define our variable, followed up with our variable name and value. You might have noticed that we used all captial characters for data type and the variable definition. Although this might be the standard for dotconfig, **data types, and variable definitions are not case sensitive**, so if you prefer using lower case characters, then by all means.

Dotconfig currently supports three different data types:
- Strings
- Numbers
- Booleans

## Creating string enviroment variables

To create a string enviroment variables:
```dosini
STRING=SERVER_HOST=localhost
```
If we call this by ``config.SERVER_HOST`` it will output ``"localhost"``

## Creating number enviroment variables:

To create an enviroment variable that's a integer:
```dosini
NUMBER=SERVER_PORT=3000
```
If we call this by ``config.SERVER_PORT`` it will output ``3000``

## Creating boolean enviroment variables:

To create boolean enviroment variables:
```dosini
BOOLEAN=TEST_MODE=True
```
If we call this by ``config.TEST_MODE`` it will output ``true``

*Note: boolean values are case insentivive. if the value would have been all caps, dotconfig would have still read it as "true" or "false".*

## Calling the enviroment variables

Calling the enviroment variables is even easier than making them. If you havent already, require dotconfig onto your application.
```javascript
const config = require('dotconfigure')
```
Once we have dotconfig required, and some enviroment variables set, we would be able to start using them. For the example, lets say that we want to start an express server with the variables we just created. 
```javascript
app.listen(config.SERVER_PORT, config.SERVER_HOST, (err)=> {
    if(err) throw err;
    console.log(`Server is listening @ port ${config.SERVER_PORT}`);
})
```
And thats it. Dotconfig is a very simple package module that isn't hard to learn at all. Honestly, this took me under an hour initially make, hope you guys enjoy.
