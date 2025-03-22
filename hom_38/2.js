Promise.all([Promise.reject("2"), Promise.resolve("1")])
    .then((r) => console.log(r))
    .catch((error) => console.error(error))
