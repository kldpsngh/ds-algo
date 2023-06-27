import readline from "readline";

//singleton class ...
export default class Scanner {
    private scanner: readline.Interface;
    private instance: Scanner;
    constructor() {
        if (this.instance) return this.instance;
        this.scanner = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.instance = this;
    }

    close() {
        this.scanner.close();
    }

    async readLine() {
        return new Promise((resolve, reject) => {
            this.scanner.once("line", (input: string) => {
                resolve(input);
            });
        });
    }
}
