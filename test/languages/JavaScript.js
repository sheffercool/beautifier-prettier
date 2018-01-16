import test from "ava";
import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../dist";

test.beforeEach(t => {
  t.context.unibeautify = newUnibeautify();
});

test("should successfully beautify JavaScript text", t => {
  const { unibeautify } = t.context;
  unibeautify.loadBeautifier(beautifier);

  const text = `function test(n){return n+1;}`;
  const beautifierResult = `function test(n) {
  return n + 1;
}
`;

  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          indent_char: " ",
          indent_size: 2
        }
      },
      text
    })
    .then(results => {
      t.is(results, beautifierResult);
    });
});