function parenthesisCheck(input) {
  const checks = {
    '(' : ')',
    '[' : ']',
    '<' : '>',
    '{' : '}'
  };
  let stack = [];
  let pushedToStack = false;
  const openingTags = Object.keys(checks);

  for (let i = 0; i < input.length; ++i) {
    pushedToStack = false;

    for (let j = 0; j < openingTags.length; ++j) {
      if (input[i] === openingTags[j]) {
        pushedToStack = true;
        stack.push(input[i]);
      }
    }

    if (!pushedToStack && checks[stack.pop()] !== input[i]) {
      return false;
    }
  }
  return true;
}