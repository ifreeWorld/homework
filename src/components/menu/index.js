import './index.less'
class Menu {
  init() {
    this.bindEvents()
    return this.render()
  }

  bindEvents() {
    window.addEventListener('click', (e) => {
      const target = event.target
      const parentObj = this.isParent(target, 'nav-item')

      if (parentObj.flag) {
        const doms = document.getElementsByClassName('nav-item')
        for (let i = 0; i < doms.length; i++) {
          doms[i].classList.remove('active')
        }
        parentObj.parent.classList.add('active')
      }
      if (target.classList.contains('menu-close')) {
        document.getElementById('menu').classList.remove('active')
      }
    })
  }

  isParent(target, parentClass) {
    while (target) {
      if (target.classList && target.classList.contains(parentClass)) {
        return {
          parent: target,
          flag: true
        }
      }
      target = target.parentNode
    }
    return {
      parent: null,
      flag: false
    }
  }

  render() {
    return `
    `
  }
}

export default new Menu()
