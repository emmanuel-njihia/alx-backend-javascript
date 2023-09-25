export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const task = true; // Use let instead of var
    const task2 = false; // Use let instead of var
  }

  return [task, task2];
}

