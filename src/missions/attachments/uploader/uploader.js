const { listItens, createFolder, createFile } = require("./googleDrive");

module.exports = {
	async upload(file) {
		const folderId = await createFolder("testes");
		await createFile(file, folderId);
	},
	
	async listFiles() {
		try {
			listItens();
		} catch (e) {
			console.log(e);
		}
	},
};
