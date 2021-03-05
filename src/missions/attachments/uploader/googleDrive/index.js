const { google } = require("googleapis");
const googleAuth = require("./auth");
const fs = require("fs");
const { Readable } = require("stream");

const listItens = async () => {
	const drive = await getDrive();
	const t = await drive.files.list({ spaces: "drive", auth: googleAuth });
	return t.data.files;
};

const createFolder = async (name) => {
	let fileMetadata = {
		name,
		mimeType: "application/vnd.google-apps.folder",
		parents: [process.env.DRIVE_PARENT_FOLDER_ID],
	};
	const drive = await getDrive();
	const folder = await drive.files.create({
		resource: fileMetadata,
		fields: "id",
		auth: googleAuth,
	});

	return folder.data.id;
};

const createFile = async (file, folder) => {
	const readable = new Readable();
	readable._read = () => {}; // _read is required but you can noop it
	readable.push(file.data);
	readable.push(null);

	let fileMetadata = {
		name: file.name,
		mimeType: "image/jpeg",

		parents: [folder],
	};
	let media = {
		mimeType: "image/jpeg",
		body: readable,
	};

	const drive = await getDrive();
	const fileCreated = await drive.files.create({
		media,
		resource: fileMetadata,
		fields: "id",
		auth: googleAuth,
	});
	return fileCreated.data;
};

async function getDrive() {
	return await google.drive({
		version: "v3",
	});
}
module.exports = { listItens, createFolder, createFile };
