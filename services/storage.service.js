import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

class StorageCLI {
  data = {};

  constructor(filePath) {
    this.filePath = filePath;
  }

  saveKeyValue = async (key, value) => {
      if(!value.length) {
        throw new Error('невалидный токен')
      }

      const fileExist = await this.isExist();

      if (fileExist) {
        const file = await promises.readFile(this.filePath);
        this.data = JSON.parse(file);
      }

      this.data[key] = value;
      await promises.writeFile(this.filePath, JSON.stringify(this.data));
  };

  isExist = async () => {
    try {
      await promises.stat(this.filePath);
      return true;
    } catch (e) {
      return false;
    }
  };

  // getKeyValue = async (key) => {
  //     if(await isExist(filePath)){
  //         const file = await promises.readFile(filePath);
  //         const data = JSON.parse(file);
  //         return data[key];
  //     }
  //     return undefined;
  // }
}

const Storage = new StorageCLI(filePath);

export { Storage };
