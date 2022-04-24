# dotconfig

Inspired by dotenv. Dotconfig is a simple, lightweight, zero-dependency module that allows you to store global variables, and use them through out your project. 

## Install

to install dotconfig onto your project, copy this onto your projects terminal.

```bash
npm install dotconfigure --save
```

## Usage

Create a `.config` file in the root of your project. 

Creating string variables:
```
VARIABLE_NAME=Enter your string of text here.=STRING
```
Note: for dotconfig to work. We will need to define the data type of your variable at the end of the value. For an example, if we want to create a string variable holding a name, we simple do: ``FIRST_NAME=Gabriel=String``
