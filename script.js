const submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: passOrFail()
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: passOrFail()
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: passOrFail()
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: passOrFail()
    }
];

function passOrFail() {
    return this.score >= 60;
};

function addSubmission(array, newName, newScore, newDate) {
    array.push(
        {
            name:newName, 
            score:newScore, 
            date:newDate,
            passed:passOrFail()
        }
    );
};

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
};

function deleteSubmissionByName(array, name) {
    let index = array.findIndex(obj => obj.name === name);
    array.splice(index, 1);
};

function editSubmission(array, index, score) {
    array[index].score = score;
    return passOrFail();
};

function findSubmissionByName(array, name) {
    return array.find(obj => obj.name === name);
};

function findLowestScore(array) {
    let lowestScore = array[0];
    array.forEach(obj => {
        if (obj.score < lowestScore.score) {
            lowestScore = obj;
        }
    });
    return lowestScore;
};

function findAverageScore(array) {
    let sum = 0;
    for(let obj of array) {
        // I hate math. 
        sum += obj.score
    }
    return sum / array.length;
};

function filterPassing(array) {
    return array.filter(obj => obj.passed());
};

function filter90AndAbove(array) {
    return array.filter(obj => obj.score >= 90);
};


// TESTS

// addSubmission(submissions, "Justin", 32, "1988-03-27");
// addSubmission(submissions, "Luke", 91, "2020-20-05");
// addSubmission(submissions, "Vader", 95, "1977-06-22");
// addSubmission(submissions, "Dorothy", 98, "1954-11-24");
// console.log(submissions);

// deleteSubmissionByIndex(submissions, 0);
// deleteSubmissionByIndex(submissions, 2);
// console.log(submissions);

// deleteSubmissionByName(submissions, "Joe");
// deleteSubmissionByName(submissions, "Jill");
// console.log(submissions);

// editSubmission(submissions, 0, 60);
// editSubmission(submissions, 2, 30);
// console.log(submissions[0], submissions[0].passed());
// console.log(submissions[2], submissions[2].passed());

// console.log(findSubmissionByName(submissions, "Jack"));
// console.log(findSubmissionByName(submissions, "Justin"));

// console.log(findLowestScore(submissions));

console.log(findAverageScore(submissions));

// console.log(filterPassing(submissions));

// console.log(filter90AndAbove(submissions));