// Implementation using callbacks
// const getUser = (id, callback) => {
//   setTimeout(() => {
//     console.log("Reading user from a database...");
//     callback({ id: id, gitHubUsername: "Ashvin Sunga" });
//   }, 2000);
// };

// const getRepositories = (username, callback) => {
//   setTimeout(() => {
//     console.log("Reading github repositories of " + username + "...");
//     callback(["repo1", "repo2", "repo3"]);
//   }, 2000);
// };

// console.log("Before");
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repositories) => {
//     console.log(repositories);
//   });
// });
// console.log("After");

// Implementation using Promises

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading user from a database...");
      resolve({ id: id, gitHubUsername: "Ashvin Sunga" });
      //   reject(new Error("Cannot get user"));
    }, 2000);
  });
};

const getRepositories = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading github repositories of " + username + "...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
};

// Using .then chain to consume Promises

// console.log("Before");
// getUser(1)
//   .then((result) => {
//     getRepositories(result.gitHubUsername).then((repos) => console.log(repos));
//   })
//   .catch((err) => console.log(err.message));
// console.log("After");

// Consuming Promises using Async and Await approach
const displayRepos = async () => {
  try {
    const user = await getUser(2);
    const repos = await getRepositories(user.gitHubUsername);
    console.log("Async and await", repos);
  } catch (err) {
    console.log(err.message);
  }
};

displayRepos();
