function displaydup() {

    const arry = [5, 1, 4, 6, 7, 3, 5, 7, 3];

    const findDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index);
    const duplicateElements = findDuplicates(arry);
    console.log(duplicateElements);

}

displaydup();