// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
// @param {vscode.ExtensionContext} context
//
function activate(context) {

	console.log('Congratulations, your extension "chatbotaidevops" is now active!');
	//let disposable = vscode.commands.registerCommand('chatbotaidevops.helloWorld', function () {
	//	vscode.window.showInformationMessage('Hello World from ChatbotAIDevOps!');
	//});

	let StartChat = vscode.commands.registerCommand('chatbotaidevops.StartChat', async function () {
		vscode.window.showInformationMessage('wellcome to Devopschat!');
		await vscode.commands.executeCommand("workbench.action.terminal.kill");
		await vscode.commands.executeCommand("workbench.action.chat.open");
		// -
		// en una nueva ventana popup
		//await vscode.commands.executeCommand("workbench.action.chat.openInNewWindow");
		// en el editor 
		// await vscode.commands.executeCommand("workbench.action.chat.openInEditor");
		// await vscode.commands.executeCommand("workbench.action.closeActiveEditor");
		// await vscode.commands.executeCommand("workbench.action.closeSidebar");
		// await vscode.commands.executeCommand("workbench.action.newWindow");
		//vscode.window.showInformationMessage('wellcome to Devopschat!');
		//const terminal = vscode.window.createTerminal("Open Terminal");
		//terminal.show();

	});

	let EndChat = vscode.commands.registerCommand('chatbotaidevops.EndChat', function () {
		vscode.window.showInformationMessage('Devopschat, see you!');
		
	});



	context.subscriptions.push(StartChat);
	context.subscriptions.push(EndChat);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
