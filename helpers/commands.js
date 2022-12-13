
export class CommandsCLI {
    constructor(args) {
      this.args = args;
    }
  
    getArgs() {
        const res = {};
        const [executer, file, ...rest] = this.args;
    
        rest.forEach((val, i, arr) => {
            if(val.charAt(0) === '-'){
                if(i === arr.length - 1){
                    res[val.substring(1)] = true
                } else if(arr[i + 1] !== '-'){
                    res[val.substring(1)] = arr[i + 1]
                } else {
                    res[val.substring(1)] = true;
                }
            }
        })
        return res;
    }
  }
  
