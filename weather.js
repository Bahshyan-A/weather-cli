#!/usr/bin/env node
import { WeatherAPI } from "./services/api.service.js";
import { CommandsCLI } from "./services/commands.service.js";
import { LoggerCLI, colors } from "./services/logger.service.js";
import { Storage } from "./services/storage.service.js";
class WeatherCLI {
  constructor(commands, logger, api) {
    this.commands = commands;
    this.logger = logger;
    this.api = api;
  }

  init() {
    const args = this.commands.getArgs();

    if (args.h) {
      this.logger.printHelp();
    } else if (args.s) {
      this.api.getCityWeather(args.s);
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

async function initCLI() {
  const Logger = new LoggerCLI(colors);
  const Commands = new CommandsCLI(process.argv);

  const apiKey = await Storage.getKeyValue('token');
  const API = new WeatherAPI(apiKey);
  
  const Weather = new WeatherCLI(Commands, Logger, API);

  Weather.init();
}


initCLI();