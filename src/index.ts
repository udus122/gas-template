import { SheetService } from './sheetService';

function createNewFile(): void {
  const ss = SheetService.createInitialFile('New file');
  ss.getRange('A2').setValue('Happy gas!');
}

const greeter = (person: string) => {
  return `Hello, ${person}!`;
};

function testGreeter() {
  const user = 'Panda 🐼';
  Logger.log(greeter(user));
}
