#!/usr/bin/env node
import { CommandsCLI} from "./helpers/args.js";
class WeatherCLI {
    constructor(commands){
        this.commands = commands
    }

    init() {
        const args = this.commands.getArgs()
        console.log(args)
    }
}
const Commands = new CommandsCLI(process.argv);
const Weather  = new WeatherCLI(Commands);


Weather.init();