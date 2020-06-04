//gives more control to string does not add newline unlike console log
//process.stdout.write("helloo");

const questions = ["What si your name?", "What is your hobby?", "Who is Harry Potter's godfather?", "What flavour are Bertie Bott's beans?", "What animal represents Hufflepuff house?", "Who was Hermione's date at the Yule Ball?"];
const ask = (i = 0) => {
    //process.stdout.write("bleh");
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }

});

process.on('exit', () => {
    const [name, activity, characterH] = answers;
    console.log(`
    
    Thank you for answers!

    Go ${activity} ${name} you can read about ${characterH} later!!!

    
    `);
});