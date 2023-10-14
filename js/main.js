let accordionItem = document.querySelectorAll('.accordion_item')
let accordionItemIcon = document.querySelectorAll('.accordion_item_name>span.icon')

accordionItem.forEach((item, i) => {
  item.addEventListener('click', () => {

    accordionItem[i].classList.toggle('active')

    accordionItem.forEach((item2, t) => {
      if (item != item2) {
        item2.classList.remove('active')
      }
    })

  })
})