// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createReadStream, statSync } from "fs";
import { join } from "path";

export default async (req, res) => {
	const filePath = join(process.cwd(), "public/suyoinker.ico");
	const stat = statSync(filePath);

	res.writeHead(200, {
		"Content-Type": "image/x-icon",
		"Content-Length": stat.size,
	});

	const readStream = createReadStream(filePath);
	await new Promise((resolve) => {
		readStream.pipe(res);
		readStream.once("end", resolve);
	});
};
