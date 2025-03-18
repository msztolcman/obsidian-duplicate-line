import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Remember to rename these classes and interfaces!

export default class DuplicateLine extends Plugin {
	async onload() {
		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'duplicate-line',
			name: 'Duplicate line',
			editorCallback: (editor: Editor, view: MarkdownView) => {
                if (editor.somethingSelected()) {
                    let data = editor.getSelection();
                    editor.replaceSelection(data + data)
                }
                else {
                    let cur = editor.getCursor();
                    let data = editor.getLine(cur.line)
                    editor.setLine(cur.line, data + "\n" + data);
                }
			}
		});
	}

	onunload() {
	}
}

