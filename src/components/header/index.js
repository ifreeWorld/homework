import './index.less'
class Header {
  init() {
    this.bindEvents()
    return this.render()
  }

  bindEvents() {
    window.addEventListener('click', (e) => {
      this.callback(e)
    })
    window.addEventListener('touchstart', (e) => {
      this.callback(e)
    })
  }

  callback(e) {
    const target = event.target
    if (target.classList.contains('left-icon')) {
      document.getElementById('menu').classList.add('active')
    }
  }

  render() {
    return `
      <div class="header">
        <div class="left-icon icon-navicon"></div>
        <div class="logo"></div>
        <div class="user">
          <div class="user-icon"></div>
          <div class="user-angle-down icon-angle-down"></div>
          <div class="user-popup">
            <div class="user-popup-item">
              <i class="popup-icon icon-id-card"></i>Profile</div>
            <div class="user-popup-item">
              <i class="popup-icon icon-sign-in"></i>Sign Out</div>
          </div>
        </div>
      </div>
    `
  }
}

export default new Header()
