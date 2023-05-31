import { child_process } from "node:process"

// Here the project. I want to create a process which run the command nuxi dev and report the output

const child = child_process.spawn("npx", ["nuxi", "dev"])
