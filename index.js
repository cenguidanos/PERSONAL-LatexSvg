const math = require("mathjax-node");
const fs = require("fs");

const object = {
  fileName: "equation_8",
  tex: "(2,0)",
};

math.config({
  MathJax: {
    // traditional MathJax configuration
  },
});
math.start();

math.typeset(
  {
    math: object.tex,
    format: "TeX",
    svg: true,
  },
  function (data) {
    if (!data.errors) {
      fs.writeFile(
        __dirname + `/svg/${object.fileName}.svg`,
        data.svg,
        { flag: "a+" },
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Ok boy!");
        }
      );
    }
  }
);
