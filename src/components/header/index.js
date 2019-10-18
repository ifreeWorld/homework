import './index.less'
class Header {
  init() {
    this.bindEvents()
    return this.render()
  }

  bindEvents() {
    window.addEventListener('click', (e) => {
      const target = event.target
      if (target.classList.contains('left-icon')) {
        document.getElementById('menu').classList.add('active')
      }
    })
  }

  render() {
    return `
    `
  }
}

export default new Header()
