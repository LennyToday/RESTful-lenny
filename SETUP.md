# Setup
This project is written using Azure functions.

---

## Local development (Visual Studio Code)
Using visual studio code, you can publish the project to Azure.

Follow the [official guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-function-vs-code#test-the-function-locally) or the steps below.

<br>

### First time setup
1. **npm install -g azure-functions-core-tools@core**
2. "cd" into the directory and run **npm install**
3. Copy local.settings.example.json and rename to local.settings.json

### Running the site locally
In Visual Studio Code, press F5. **Functions will automatically rebuild when changes are detected.**

### Debugging locally
When running the site, the debugger should automatically start.

_**NOTE**: The debugger currently seems to crash when changes are made and the project rebuilds itself. You will need to restart the debugger after making changes (see steps below)._

#### To manually start the debugger
In VS Code, open the debug pane (on the left) then click the play button next to **Attach to Azure Functions**

**Keyboard shortcuts**
* F9 = Add/Remove breakpoint
* F10 = Step to next line
* F11 = Step inside line
* F5 = continue until next breakpoint

### Creating a new function
https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-function-vs-code#create-an-http-triggered-function

1. In Visual Studio Code, go to the Azure tab on the left
2. Click the Create Function button

---

## Local development (Other tools)

### Running the site locally
1. Make sure your node modules are up to date with **npm install**
2. **npm start** or **func host start**

### Creating a new function
Run **func new**. See other functions for function.json examples