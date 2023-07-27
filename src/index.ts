#!/usr/bin/env node
import { GenFile } from 'controller/generate.controller';
import inquirer from 'inquirer';
import { IAnswers } from 'interfaces/answers.interface';
import { questions } from 'questions';

class Init {
  constructor() {
    inquirer.prompt(questions).then((answers: IAnswers) => {
      GenFile.gen(answers);
    });
  }
}

new Init();
