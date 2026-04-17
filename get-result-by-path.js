// You are given a nested JavaScript object and a string that represents a path to a deeply nested value within that object. The path is dot-separated and may include array indices written in square brackets (e.g., "data.results[0].status[1].type". Write a function getResultByPath(path, response) that extracts and returns the value at the given path within the object.

function normalizePath(path) {
  let output = "";
  for (let i = 0; i < path.length; i++) {
    const char = path[i];
    if (char === "[") {
      output += ".";
    } else if (char === "]") {
      output += "";
    } else {
      output += char;
    }
  }

  if (output[0] === ".") {
    output = output.slice(1);
  }

  return output;
}

function customSplitPath(path) {
  let currentStr = "";
  let output = [];

  for (let i = 0; i < path.length; i++) {
    const char = path[i];
    if (char === ".") {
      output.push(currentStr);
      currentStr = "";
    } else {
      currentStr += char;
    }
  }

  output.push(currentStr);
  return output;
}

function getResultByPath(path, obj) {
  const normalizedPath = normalizePath(path);

  const splitPath = customSplitPath(normalizedPath);

  let output = obj;
  for (let i = 0; i < splitPath.length; i++) {
    const key = splitPath[i];
    if (output === undefined || output === null) return output;
    output = output[key];
  }

  return output;
}

console.log(
  getResultByPath("data.results.status", {
    data: {
      results: {
        status: "completed",
        error: "",
      },
    },
  }),
);
console.log(
  getResultByPath("data.results[1].status[0].type", {
    data: {
      results: [
        {
          status: "completed",
          error: "",
        },
        {
          status: [{ type: "done" }, { type: "start" }],
          error: "",
        },
      ],
    },
  }),
);
console.log(getResultByPath("a.b.c", { a: {} }));
console.log(getResultByPath("a.b", { a: null }));
console.log(getResultByPath("[0].name", [{ name: "John" }]));
