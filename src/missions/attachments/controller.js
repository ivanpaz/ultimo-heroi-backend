class AttachmentsController {
	constructor(uploader) {
		this.uploader = uploader;
	}

	async create(request, response) {
		const file = request.files.anexo;
		await this.uploader.upload(file);
		return response.json({ status: "criado" });
	}
}
module.exports = AttachmentsController;
