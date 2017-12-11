# Setup

## Local development

### First time setup
1. **npm install -g azure-functions-core-tools**
2. "cd" into the directory and run **npm install**
3. Copy local.settings.example.json and rename to local.settings.json

### Running the site locally
1. Make sure your node modules are up to date with **npm install**
2. **npm start** or **func host start**

Functions will reload when changes are detected.

### Debugging locally
1. Start the function host: **func host start --debug vscode**
2. Open the project folder in Visual Studio Code
3. In VS Code, open the debug pane (on the left) then click **Attach to Azure Functions**

* F9 = Add/Remove breakpoint
* F10 = Step to next line
* F11 = Step inside line
* F5 = continue until next breakpoint

### Creating a new function
Run **func new**. See other functions for function.json examples