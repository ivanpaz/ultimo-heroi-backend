const { listFiles, upload } = require("./uploader");

module.exports = {
	async create(request, response) {
		const file = request.files.anexo;
		await upload(file);
		return response.json({ status: "criado" });
	},
};
