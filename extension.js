//
//
const vscode = require('vscode');
// const vscodGTPI = require('chatgpt');
//
function commentLine() {
	vscode.commands.executeCommand('editor.action.addCommentLine');
  }

//
function activate(context) {

	console.log('Congratulations, your extension "chatbotaidevops" is now active!');

	let StartChat = vscode.commands.registerCommand('chatbotaidevops.StartChat', async function () {
		vscode.window.showInformationMessage('wellcome to Devopschat!');
		await vscode.commands.executeCommand("workbench.action.terminal.kill");
		await vscode.commands.executeCommand("workbench.action.chat.open");
		// -.-
		await vscode.commands.executeCommand("workbench.action.chat.openInEditor");
		await vscode.commands.executeCommand("workbench.action.closeSidebar");
		// .-.
		//let varfilePath = vscode.workspace.workspaceFolders[0].uri.fsPath + "\\test\\sc.txt"; 
		// vscode.window.showInformationMessage(varfilePath);
		const wsedit = new vscode.WorkspaceEdit();
		const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath; // gets the path of the first workspace folder
		const cfilePath = vscode.Uri.file(wsPath + '/test/tempo.txt');


		const fs = require('fs')
		const path = './test/tempo.txt'
		try { 
			if (fs.existsSync(path)) {
				vscode.workspace.openTextDocument(cfilePath).then(doc => {
					vscode.window.showTextDocument(doc);});
				vscode.window.showInformationMessage("se abrio archivo temporal !");
  			}
			else
			{
				wsedit.createFile(cfilePath);
				await vscode.workspace.applyEdit(wsedit);
				vscode.window.showInformationMessage("se creo y abrio archivo temporal !");
				await vscode.workspace.openTextDocument(cfilePath).then(doc => {
					vscode.window.showTextDocument(doc);});

			}
		} catch(err) {
  			console.error(err)
		}

	});

	let Cat = vscode.commands.registerCommand('chatbotaidevops.Cat', function () {
		vscode.window.showInformationMessage('Cat you!');
		
	});


	let EndChat = vscode.commands.registerCommand('chatbotaidevops.EndChat', function () {
		vscode.window.showInformationMessage('Devopschat, see you!');
		
	});



	context.subscriptions.push(StartChat);
	context.subscriptions.push(Cat);
	context.subscriptions.push(EndChat);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
