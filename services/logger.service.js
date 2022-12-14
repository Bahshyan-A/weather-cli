import chalk from "chalk";
import dedent from "dedent";

let { bgCyan, bgGreen, bgRed, bgYellow } = chalk;


class LoggerCLI {
  
  constructor(colors){
    this.colors = colors;
  }

  printError = (err) => {
    console.log(colors.red("ERROR") + " " + err);
  };

  printSuccess = (msg) => {
    console.log(colors.green("SUCCESS") + " " + msg);
  };

  printHelp = () => {
    console.log(
      dedent`${colors.blue("HELP")} 
      Без парамметров - вывод погоды
      -s [CITY] - для установки города
      -h - для вывода помощи 
      -t - [API_KEY] для сохранения токена
      `);
  };
  
};

const colors = {
  red: bgRed,
  green: bgGreen,
  blue: bgCyan, 
  yellow: bgYellow
};

export {LoggerCLI, colors};

