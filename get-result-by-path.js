function getResultByPath(path, obj) {
  const normalizedPath = getPath(path)
  const tokens = splitPath(normalizedPath)

  
  let copiedObj = obj
  for(const token of tokens){
    if(copiedObj === undefined) return undefined
    if(copiedObj === null) return null
    
    copiedObj = copiedObj[token]
  }
  
  return copiedObj
}

function getPath(path){
  let output = ""
  
  for(let i = 0; i < path.length; i++){
    const char = path[i]
    if(char === "["){
      output+= "."
    }else if(char === "]"){
      output+= ""
    }else{
      output+= char
    }
  }
  
   if (output[0] === ".") {
    output = output.slice(1);
  }
  
  return output
}

function splitPath(path){
  const output = []
  let current = ""
  
  for(let i = 0; i < path.length; i++){
    const char = path[i]
    
    if(char === "."){
      output.push(current)
      current = ""
    } else {
      current+= char
    }
  }
  
  output.push(current)
  return output
}

console.log(getResultByPath("data.results.status", {
  data: {
    results: {
      status: "completed",
      error: "",
    },
  },
}));

console.log(getResultByPath("data.results[1].status[0].type", {
  data: {
    results: [
      {
        status: "completed",
        error: ""
      },
      {
        status: [
          { type: "done" },
          { type: "start" }
        ],
        error: ""
      }
    ]
  }
}));

console.log(getResultByPath("a.b.c", { a: {} }) )
console.log(getResultByPath("a.b", { a: null }) )
console.log(getResultByPath("[0].name", [{ name: "John" }]) )
