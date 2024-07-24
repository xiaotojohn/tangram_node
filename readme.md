This is a project for the purpose of education but also for production.
Contributors:
- Dexin
- xiaotojohn@gmail.com

## How to Set it up?
- `node.js`&`nvm`&`npm`: follow this [link](https://nodejs.org/en/download/package-manager). Choose `V20.xx.x(LTS)` on `mac OS` using `nvm`
- Find the [package json file](package.json), which contains all dependencies. **Enter your project directory in terminal**, then use ```npm install [package_name]``` to install the packages listed.
- Run `node express-test.js` and you shall see the following message: 

```
server startednow 
listening on port 8080
```
- Once you saw this message you are good to go.
- Then type `http://localhost:8080` to access the web.
- You also want to try `http://localhost:8080/sample`, where a navbar is provided.
- Another thing, node probably will tell you .env is missing, in that case, find the .env file I sent you, put it under the project main folder. Your project sturcture shoud look like this:
```
.
├── controllers/
├── node_modules/
├── public/
├── routes/
├── views/
├─ .env
├─ .gitignore
├─ express_test.js
├─ package-lock.json
├─ package.json
├─ readme.md
```

---

### To do list
- flowchart(business logic)
- database
- user authentication
- cookies
- deployment
    - reverse proxy apache -> express
    - docker
- error handling
    - dev_test.log
    - winston

