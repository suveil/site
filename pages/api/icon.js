// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createReadStream, statSync } from "fs";
import fetchAsset from "vercel-assets";

export default async (req, res) => {
	const filePath = fetchAsset("images", "suyoinker.ico");
	const stat = statSync(filePath);

	res.writeHead(200, {
		"Content-Type": "image/vnd.microsoft.icon",
		"Content-Length": stat.size,
	});

	const readStream = createReadStream(filePath);
	await new Promise((resolve) => {
		readStream.pipe(res);
		readStream.once("end", resolve);
	});
};
