#!/usr/bin/env node

// kills a process running on a specified port
// make sure to make it executable (chmod u+x ./scripts/kill.js)

import { exec } from "node:child_process";
import { argv } from "node:process";

exec(`fuser ${argv[2]}/tcp`, (err, output) => {
	if (err) {
		return process.exit(1);
	}

	process.kill(+output);
	console.log(`Tried to kill ${output} pid process on port ${argv[2]}`);
});
