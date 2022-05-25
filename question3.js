function employee() {
    //Input
    let hired1 = prompt('Enter the number of newly hired males:');
    let hired2 = prompt('Enter the number of newly hired females:');
    let perm1 = prompt('Enter the number of permanent position males:');
    let perm2 = prompt('Enter the number of permanent position females:');
    let resign1 = prompt('Enter the number of resigned males:');
    let resign2 = prompt('Enter the number of resigned females:');

    //Calculate
    let sum = parseInt(hired1) + parseInt(hired2);
    let hmaverage = ((parseInt(hired1) / parseInt(sum)) * 100).toFixed(2);
    let hfaverage = ((parseInt(hired2) / parseInt(sum)) * 100).toFixed(2);
    let sum1 = parseInt(perm1) + parseInt(perm2);
    let pmaverage = ((parseInt(perm1) / parseInt(sum1)) * 100).toFixed(2);
    let pfaverage = ((parseInt(perm2) / parseInt(sum)) * 100).toFixed(2);
    let sum2 = parseInt(resign1) + parseInt(resign2);
    let rmaverage = ((parseInt(resign1) / parseInt(sum2)) * 100).toFixed(2);
    let rfaverage = ((parseInt(resign2) / parseInt(sum2)) * 100).toFixed(2);



    //Output
    console.log('The number of hired employee is = ' + sum + '');
    console.log('Male = ' + hmaverage + '%');
    console.log('Female = ' + hfaverage + '%');
    console.log('The number of permanent employee is = ' + sum1 + '');
    console.log('Male = ' + pmaverage + '%');
    console.log('Female = ' + pfaverage + '%');
    console.log('The number of resigned employee is = ' + sum2 + '');
    console.log('Male = ' + rmaverage + '%');
    console.log('Female = ' + rfaverage + '%');

}

employee();
