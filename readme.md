This is a project for the purpose of education but also for production.
Generally speaking, this is a open source web application for education companies, schools. 

Contributors:
- Dexin
- xiaotojohn@gmail.com

## How to Set it up? (For local test)
- `node.js`&`nvm`&`npm`: follow this [link](https://nodejs.org/en/download/package-manager). Choose `V20.xx.x(LTS)` on `mac OS` using `nvm`
- Find the [package json file](package.json), which contains all dependencies. **Enter your project directory in terminal**, then use ```npm install [package_name]``` to install the packages listed.
- Luckily, we deployed our databased online, so you dont have to bother set it up.
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
├── db/
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
- ~~database~~
- user authentication
    - error handler for views
    - API with Sessions
    - password reset
    - registration conflicts
    - security of sessions, need to refer to more stuff on authentication.
- cookies
- deployment
    - reverse proxy apache -> express
    - docker
- error handling
    - dev_test.log
    - winston
- adminpage
    - internal control over databases
    - teachers cannot register themselves, only be inserted by the admin
    - tbh, students shall not register themselves as well, an account shall be assigned. but we will talk about this.
- more queries
    - ~~getAllstudents not returning id~~
- chatboard
    - refactor db, currently no id

- 7.31 to be discussed
    - show dx how to embed the student login into the index.html
## Sample Students
- Daemon Targaryen: imarriedmyniece 
- Vhagar: meleytastesnice
- youshould: workthistime
- czxczxc: dasdsad
- hello: lol