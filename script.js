let submissions = [];

function Student(name, score, date, submissions) {
    this.name = name;
    this.score = score;
    this.date = date;
    this.passed = function() { return this.score >= 60; };
};

let student1 = new Student("Jane", 95, "2020-01-24");
let student2 = new Student("Joe", 77, "2018-05-14");
let student3 = new Student("Jack", 59, "2019-07-05");
let student4 = new Student("Jill", 88, "2020-04-22");

function addSubmission(array, newName, newScore, newDate) {
    array.push(
        {
            name:newName, 
            score:newScore, 
            date:newDate,
            passed: function() {
                return this.score >= 60;
            }
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
    return array[index].score >= 60 ? array[index].passed : !array[index].passed;
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
        sum = obj.score += obj.score
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

// addSubmission(submissions, "Justin", "32", "1988-03-27");
// deleteSubmissionByIndex(submissions, 3);
// deleteSubmissionByName(submissions, "Joe");
// editSubmission(submissions, 0, 60);
// findSubmissionByName(submissions, "Jack");
// console.log(findLowestScore(submissions));
// findAverageScore(submissions);
// console.log(filterPassing(submissions));
// filter90AndAbove(submissions);
// console.log(submissions[0].passed());