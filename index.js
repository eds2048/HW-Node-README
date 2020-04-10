// HW Assignment - Create ReadMe

const fs = require("fs");
const axios = require("axios");
var inquirer = require("inquirer");
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your username?",
            name: "username"
        },
        {
            type: "password",
            message: "What is your password?",
            name: "password"
        },
        {
            type: "password",
            message: "Re-enter password to confirm:",
            name: "confirm"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Project Title?",
            name: "projecttitle"
        },
        {
            type: "input",
            message: "What is the Description?",
            name: "description"
        },
        {
            type: "input",
            message: "What is the Table of Contents?",
            name: "tableofcontents"
        },
        {
            type: "input",
            message: "installation?",
            name: "installation"
        },
        {
            type: "input",
            message: "What is the License?",
            name: "license"
        },
        {
            type: "input",
            message: "What is the Contributing?",
            name: "contributing"
        },
        {
            type: "input",
            message: "What is the Tests?",
            name: "tests"
        }

    ])
    .then(function (response) {
        if (response.confirm === response.password) {
            const queryUserName = `https://api.github.com/users/${response.username}`;
            const queryPassword = `https://api.github.com/users/${response.password}`;
            const queryReadMe = `https://api.github.com/users/${response}`;

            axios.get(queryUserName)
                .then((response1) => {
                    console.log(response1.data);
                    console.log("Success!");
                    console.log(response.username);

                        
                        var filename = JSON.stringify(response, null, '\t');
                        fs.writeFile("ReadMe-Test.md", filename, function (err) {
                            if (err) {
                                throw err;
                            }
                        else {
                            axios.post(filename)
                                .then((response) => {
                                    console.log("ReadMe posted");
                                });
                            console.log("Write file ran");
                            console.log("Filename " + filename);
                            console.log("-----------------------------------------");
                            }
                        // else {
                        //         console.log("You forgot your password already?!");
                        //     }
                        });
                    
                })

        };
     
    });
            // https://developer.github.com/v3/repos/contents/#create-or-update-a-file