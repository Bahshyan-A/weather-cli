#!/usr/bin/env node
import { CommandsCLI } from "./services/commands.service.js";
import { LoggerCLI, colors } from "./services/logger.service.js";
import { Storage } from "./services/storage.service.js";
class WeatherCLI {
  constructor(commands, logger) {
    this.commands = commands;
    this.logger = logger;
  }

  init() {
    const args = this.commands.getArgs();

    if (args.h) {
      this.logger.printHelp();
    } else if (args.s) {
    } else if (args.t) {
      return this.saveToken(args.t);
    } else {
      this.logger.printError("Несуществующая команда");
      this.logger.printHelp();
    }
  }

  async saveToken(token) {
    try {
      await Storage.saveKeyValue("token", token);
      this.logger.printSuccess("Токен сохранен");
    } catch (e) {
      this.logger.printError(e.message);
    }
  }
}
const Logger = new LoggerCLI(colors);
const Commands = new CommandsCLI(process.argv);
const Weather = new WeatherCLI(Commands, Logger);

Weather.init();
