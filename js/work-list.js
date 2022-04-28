const workListItem = document.querySelectorAll('.work-list__item');
const btnsItem = document.querySelectorAll('.btns__item');

console.log(workListItem);
console.log(btnsItem);

btnsItem[0].addEventListener("click", () => {
 clearDataBtn() ;
 console.log('click');
});

function clearDataBtn() {
  for (const variable of workListItem) {
    if (variable.classList.contains('js-hidden-elem')) {
      variable.classList.remove('js-hidden-elem');
    }
};
};
