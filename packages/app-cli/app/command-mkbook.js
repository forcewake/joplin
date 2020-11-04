const { BaseCommand } = require('./base-command.js');
const { app } = require('./app.js');
const { _ } = require('@joplinapp/lib/locale');
const Folder = require('@joplinapp/lib/models/Folder.js');

class Command extends BaseCommand {
	usage() {
		return 'mkbook <new-notebook>';
	}

	description() {
		return _('Creates a new notebook.');
	}

	async action(args) {
		const folder = await Folder.save({ title: args['new-notebook'] }, { userSideValidation: true });
		app().switchCurrentFolder(folder);
	}
}

module.exports = Command;