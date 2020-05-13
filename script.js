const submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
        
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    }
];

function addSubmission(array, newName, newScore, newDate) {
    array.push(
        {
            name:newName, 
            score:newScore, 
            date:newDate,
            passed: function() {
                return newScore >= 60;
            }
        }
    );
};

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
};

function deleteSubmissionByName(array, name) {
    let index = array.findIndex(x => x.name === name);
    array.splice(index, 1);
};

function editSubmission(array, index, score) {
    array[index].score = score;
    if (array[index].score >= 60) {
        array[index].passed = true;
    } else {
        array[index].passed = false;
    };
};

function findSubmissionByName(array, name) {
    return array.find(obj => obj.name === name);
};

function findLowestScore(array) {
    let lowestScore = array[0].score;
    array.forEach(element => {
        if (element.score < lowestScore) {
            lowestScore = element.score;
        }
    });
    // return array.filter(obj => obj.score === lowestScore);  <-- This code makes more sense from a practical standpoint but,
    // the assignment asked to return an object, not an array of objects
    return array.find(obj => obj.score === lowestScore);
};

function findAverageScore(array) {
    let sum = 0;
    for(let element of array) {
        sum = element.score += element.score
    }
    return sum / array.length;
};

function filterPassing(array) {
    return array.filter(obj => obj.score >= 60);
};

function filter90AndAbove(array) {
    return array.filter(obj => obj.score >= 90);
};

// addSubmission(submissions, "Justin", "58", "1988-03-27");
// deleteSubmissionByIndex(submissions, 3);
// deleteSubmissionByName(submissions, "Joe");
// editSubmission(submissions, 0, 58)
// findSubmissionByName(submissions, "Jack");
// findLowestScore(submissions);
// findAverageScore(submissions);
// filterPassing(submissions);
// filter90AndAbove(submissions);