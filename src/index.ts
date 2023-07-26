import inquirer from 'inquirer';
import { IAnswers } from 'interfaces/answers.interface';
import { questions } from 'questions';

class Init{
    constructor(){       
        inquirer.prompt(questions).then((answers: IAnswers) => {
            console.log(answers);            
        });
    }
}

new Init();