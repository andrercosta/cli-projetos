import fs from 'node:fs';
import path from 'node:path';
import { EChoicesBoilerplate } from 'enums/choices-boilerplate.enum';
import { EErrors } from 'enums/errors.enum';
import { EGitName } from 'enums/git-name.enum';

export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual boilerplate quer utilizar?',
    choices: [EChoicesBoilerplate.NodejsTypescript, EChoicesBoilerplate.Scss],
  },
  {
    type: 'input',
    name: 'folderName',
    message: 'Qual o nome do projeto?',
    validate(folderName: string) {
      if (!folderName) return EErrors.FolderName;
      if (/[^\w\s-]/.test(folderName))
        return EErrors.SpecialCharacters;
      if (
        folderName === 'node_modules' ||
        folderName === EGitName.NodejsTypescript ||
        folderName === EGitName.Scss
      )
        return EErrors.FolderNameReserved;

        try {
            const dir = path.join(__dirname, '..', folderName);
            if (fs.existsSync(dir)) {
              return EErrors.FolderNameExists;
            }
            
        } catch (error) {
            console.log(error);
            
        }

      return true;
    },
  },
];
