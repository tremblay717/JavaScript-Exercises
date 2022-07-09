const getTheTitles = function(books) {
    let i = 0;
    let array = []

for (const book in books)  {
  array.push(books[i].title)
  i++
}
return array;
};

// Do not edit below this line
module.exports = getTheTitles;
