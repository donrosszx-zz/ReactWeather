function addPromises (a, b) {
    return new Promise (function (resolve, reject) {
        if (typeof a === "number" && typeof b === "number") {
            resolve (a+b);
        } else {
            reject ('Have to send in 2 numbers');
        }
    });
}

addPromises(4, 3).then(function (sum) {
    console.log(sum);
}, function (err) {
    console.log(err);
});

addPromises('a', 3).then(function (sum) {
    console.log(sum);
}, function (err) {
    console.log(err);
});