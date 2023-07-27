import { EChoicesBoilerplate } from 'enums/choices-boilerplate.enum';
import { EGitName } from 'enums/git-name.enum';
import { IAnswers } from 'interfaces/answers.interface';
import path from 'node:path';
import shelljs from 'shelljs';

class GenerateController {
  public gen(answers: IAnswers) {
    try {
      switch (answers.tech) {
        case EChoicesBoilerplate.NodejsTypescript:
          this._execPath(EGitName.NodejsTypescript, answers.folderName);
          break;
        case EChoicesBoilerplate.Scss:
          this._execPath(EGitName.Scss, answers.folderName);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }

  private _execPath(gitName: string, folderName: string) {
    try {
      shelljs.cd(path.resolve());
      shelljs.exec(
        `git clone git@github.com:troquatte/${gitName}.git ${folderName} && cd ${folderName} && rm -rf .git && git init && git add . && git commit -m "Initial commit"`,
      );
      console.log('Projeto criado com sucesso!');
      return shelljs.exit();
    } catch (error) {
      console.log(error);
    }
  }
}
export const GenFile = new GenerateController();
