//https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
const fs = require("fs");
const path = require("path");
const { COPYFILE_EXCL, COPYFILE_FICLONE } = fs.constants;

module.exports = fetchAsset = (assetFolder, assetName) => {
	//const asset = require.resolve(`./${assetFolder}/${assetName}`);

	try {
		if (fs.existsSync(`/tmp/${assetName}`)) {
			console.log("Font lives in tmp already.");
		} else {
			fs.copyFileSync(
				path.join(
					process.cwd(),
					`node_modules/vercel-assets/${assetFolder}/${assetName}`
				),
				`/tmp/${assetName}`,
				COPYFILE_FICLONE | COPYFILE_EXCL
			);
		}
	} catch (err) {
		console.error(err);
	}

	return `/tmp/${assetName}`;
};
