Dotconfig was inspired by dotenv, all credit goes towards them for the idea.

# ⚙️ dotconfig 

Dotconfig is a simple lightweight zero-dependency module that allows developers to create enviroment variables in a ``.config`` file. No more having to store your enviroment variables inside your source, start storing them somewhere safer with dotconfig!

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
