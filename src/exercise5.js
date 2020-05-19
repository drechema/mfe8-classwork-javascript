
/* Generate random number between 0 and 10
 * @returns {number} number from 0 to 10
 */
const generateNumber = () => Math.round(Math.random()*10);

/* Generate random boolean
 * @returns {boolean} true/false
 */
const generateBool = () => generateNumber()>5;

class SlotMachine {
    constructor() {
        this.coins = 0;
    }
    play() {
        this.coins++;
        const lucky1 = generateBool();
        const lucky2 = generateBool();
        const lucky3 = generateBool();
        console.log(`${lucky1} | ${lucky2} | ${lucky3}`);
        if (lucky1 && lucky2 && lucky3){
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }
}

function exercise5() {
    const machine1 = new SlotMachine();
    for (let i=0;i<5;i++){
        machine1.play();
    }
}