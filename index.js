let tab_items =document.querySelectorAll('.tab-item');
let tab_content = document.querySelectorAll('.tab-content__item');

function remove_border()
{
  tab_items.forEach(item => item.classList.remove('tab-item--active'));
}

function remove_show()
{
  tab_content.forEach(item => item.classList.remove('tab-content__item--show'));
}

function select_item(evt)
{
  remove_border();
  remove_show();

  this.classList.add('tab-item--active');

  console.log(this.id);
  // console.log(this.classList);

  let tab_content_item = document.querySelector(`#${this.id}-content`);

  tab_content_item.classList.add('tab-content__item--show');
}

tab_items.forEach(item => item.addEventListener('click', select_item));