// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
// console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    const detailsElement = document.createElement('details');
    main.append(detailsElement);
    
    const summaryElement = document.createElement('summary');
    summaryElement.append("KATA " + kataNumber);
    detailsElement.append(summaryElement);
    
    const stringifiedObject = JSON.stringify(object);
    detailsElement.append(stringifiedObject);
}//end printKata

const kata0 = users.filter(user => user.eyeColor === "green");
printKata(0, kata0);

const kata1 = users.filter(user => user.isActive);
printKata(1, kata1);

const kata2 = users.map(user => user.email);
printKata(2, kata2);

const kata3 = users.some(user => user.company === 'OVATION');
printKata(3, kata3);

const kata4 = users.find(user => user.age > 38);
printKata(4, kata4);

const kata5 = users.filter(user => user.age > 38).find(user => user.isActive);
printKata(5, kata5);

const kata6 = users.filter(user => user.company === 'ZENCO').map(user => user.balance);
printKata(6, kata6);

const kata7 = users.filter(user => user.tags.includes('fugiat')).map(user => user.age);
printKata(7, kata7);