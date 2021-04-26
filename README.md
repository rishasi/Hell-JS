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





