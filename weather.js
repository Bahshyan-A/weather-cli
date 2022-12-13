#!/usr/bin/env node
import { CommandsCLI} from "./helpers/args.js";
const initCLI = () => {
    const commands = new CommandsCLI(process.argv);
    const args = commands.getArgs()
    console.log(args)
}

initCLI();