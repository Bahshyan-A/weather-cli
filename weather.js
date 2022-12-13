#!/usr/bin/env node
import { CommandsCLI} from "./helpers/commands.js";
import { Logger } from "./services/logger.service.js";
class WeatherCLI {
    constructor(commands, logger){
        this.commands = commands;
        this.logger = logger;
    }

    init() {
        const args = this.commands.getArgs()
        if(args.h){
            Logger.printHelp();
        }
        if(args.s){
        }
    }
}

const Commands = new CommandsCLI(process.argv);
const Weather  = new WeatherCLI(Commands);


Weather.init();