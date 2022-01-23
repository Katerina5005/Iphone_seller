const tabs = document.querySelectorAll('.card-detail__change'),
      tabsTitle = document.querySelector('.card-details__title'),
      tabsPrice = document.querySelector('.card-details__price')


const tabsOptions = [
    {
        name: "Graphite",
        memory: '128',
        price: 60000,
        image: ''
    },
    {
        name: "Silver",
        memory: '256',
        price: 65000,
        image: ''
    },
    {
        name: "Sierra Blue",
        memory: '512',
        price: 70000,
        image: ''
    }
]

const changeContent = (index) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
    tabsPrice.textContent = `${tabsOptions[index].price}₽`
}

const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
        tab.classList.remove('active')

        if (index === indexClickedTab) {
            tab.classList.add('active')
        }
    })

    changeContent(indexClickedTab)
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        changeActiveTabs(index)
    })
})

changeContent = 0

