const workListItem = document.querySelectorAll('.work-list__item');
const btnsItem = document.querySelectorAll('.btns__item');
// const id = document.querySelectorAll('.work-list__item li[data-id=*]');

console.log(workListItem);
console.log(btnsItem);
console.log();

let id_ = '';

btnsItem[0].addEventListener("click", () => {
 clearDataBtn() ;
 console.log('click');
});

btnsItem[1].addEventListener("click", () => {
  clearDataBtn() ;
  id_ = "web";
  addDataBtn(id_);
 });

 btnsItem[2].addEventListener("click", () => {
  clearDataBtn() ;
  id_ = "application";
  addDataBtn(id_);
 });

 btnsItem[3].addEventListener("click", () => {
  clearDataBtn() ;
  id_ = "design";
  addDataBtn(id_);
 });

 btnsItem[4].addEventListener("click", () => {
  clearDataBtn() ;
  id_ = "marketing";
  addDataBtn(id_);
 });

function clearDataBtn() {
  for (const variable of workListItem) {
    if (variable.classList.contains('js-hidden-elem')) {
      variable.classList.remove('js-hidden-elem');
    }
};};

function addDataBtn(index) {
  for (const variable of workListItem) {
    if (variable.dataset.id !== index) {
      variable.classList.add('js-hidden-elem');
    }
};};
