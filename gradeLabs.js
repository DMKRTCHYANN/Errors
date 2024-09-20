let studentLabs2 = [
    {
        student: "Blake",
        myCode: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Jessica",
        runLab: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Mya",
        runLab: function (num) {
            return num * num;
        },
    },
];


function gradeLabs(labs) {
    for (let i = 0; i < labs.length; i++) {
        let lab = labs[i];
        try {
           if (typeof lab.runLab !== "function") {
                throw new TypeError("lab.runLab is not a function");
            }
            let result = lab.runLab(5);
            console.log(`${lab.student}'s lab passed with result: ${result}`);
        } catch (error) {
            console.log(`${lab.student}'s lab failed: Error thrown`);
        }
    }
}


gradeLabs(studentLabs2);
