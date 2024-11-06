import readline from "readline";

const read = async (question: string): Promise<string> => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
        });
    });
};

const add = async () => {
    try {
        const num1 = await read("Enter the first number: ");
        const num2 = await read("Enter the second number: ");
        if(!Number(num1) && !Number(num2)){
            console.error('Enter vaild numbers only');
            return;
        }
        console.log(`Answer: ${Number(num1) + Number(num2)}`);
    } catch (error) {
        console.error('Enter vaild numbers only');
    }
};

const multiply = async () => {
    try {
        const num1 = await read("Enter the first number: ");
        const num2 = await read("Enter the second number: ");
        if(!Number(num1) && !Number(num2)){
            console.error('Enter vaild numbers only');
            return;
        }
        console.log(`Answer: ${Number(num1) * Number(num2)}`);
    } catch (error) {
        console.error('Enter vaild numbers only');
    }
};

const subtract = async () => {
    try {
        const num1 = await read("Enter the first number: ");
        const num2 = await read("Enter the second number: ");
        if(!Number(num1) && !Number(num2)){
            console.error('Enter vaild numbers only');
            return;
        }
        console.log(`Answer: ${Number(num1) - Number(num2)}`);
    } catch (error) {
        console.error('Enter vaild numbers only');
    }
};

const divide = async () => {
    try {
        const num1 = await read("Enter the first number: ");
        const num2 = await read("Enter the second number: ");
        if(!Number(num1) && !Number(num2)){
            console.error('Enter vaild numbers only');
            return;
        }
        if (Number(num2) === 0) {
            console.error('Cannot divide by zero');
            return;
        }
        console.log(`Answer: ${Number(num1) / Number(num2)}`);
    } catch (error) {
        console.error('Enter vaild numbers only');
    }
};

const power = async () => {
    try {
        const num1 = await read("Enter the base number: ");
        const num2 = await read("Enter the power: ");
        if(!Number(num1) && !Number(num2)){
            console.error('Enter vaild numbers only');
            return;
        }
        console.log(`Answer: ${Math.pow(Number(num1), Number(num2))}`);
    } catch (error) {
        console.error('Enter vaild numbers only');
    }
};

const main = async () =>{
    while (true){
        console.log('1. Add');
        console.log('2. Subtract');
        console.log('3. Multiply');
        console.log('4. Divide');
        console.log('5. Power');
        const choice = await read('Enter your choice: ');
        switch (choice) {
            case '1':
                await add();
                break;
            case '2':
                await subtract();
                break;
            case '3':
                await multiply();
                break;
            case '4':
                await divide();
                break;
            case '5':
                await power();
                break;
            default:
                console.error('Invalid choice');
                break;
        };
    };
};

main();