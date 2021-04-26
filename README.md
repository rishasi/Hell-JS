# Hello NodeJS



### 1. Create a Node Project

```bash
git init
npm init
## Leave the defaults
## It created a file package.json:
```

```json
{
  "name": "hello-nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

### 2. Added .gitignore and index.json

```bash
$ cat .gitignore                                                                                           ok | 21:53:55
.idea
*.DS_Store
node_modules

$ cat index.js                                                                                             
console.log("Hello JS");
```

### 3. First run through node and npm command:

```bash
$ node index.js
Hello JS
```

​	Referred the `index.js` file in `package.json`:

```yaml
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"   #### Here
```

​	After adding the start script in `package.json` the command `npm run start` can be executed as below:

```bash
$ npm run start
Hello JS
```

### 4. Configuring Unit Test with Jest

```bash
$ npm install --save-dev jest
```

​		`package.json` updated:

```diff
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC",
+  "devDependencies": {
+    "jest": "^26.6.3"   
  }
}
```



---

### Starting Code Notes:

Function, variables, function in function, returning functions in functions:

```javascript
console.log("Hello JS");

// Create variable in JS
const one = "one";
let two = "two";

// Creating function
function sayHello(name){
    console.log("Hello " + name);
    function sayTitle(title) {
        console.log("Title: " + title);
    }
    return sayTitle;
}

const firstFunction = sayHello;
const returnedFunction = firstFunction();
returnedFunction("Singh");

sayHello("Rishabh");

// Declaring functions with Lambda
// Functions are also types

const sayMyName = (name) => {
    console.log("Hello lambda " + name);
}

sayMyName("Rishabh");


// Output:
Hello JS
Hello undefined
Title: Singh
Hello Rishabh
Hello lambda Rishabh

```

In JavaScript, functions can be passed on and can have operations like an onject, varible in Java.

