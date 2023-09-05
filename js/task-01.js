const elementLi = document.querySelector('#categories');

const itemLi = elementLi.children;

console.log('Number of categories:', itemLi.length);

console.log('');

[...itemLi].forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
    console.log("");
})