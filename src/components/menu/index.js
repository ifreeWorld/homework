import './index.less'
class Menu {
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

  callback(event) {
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
      <div class="menu" id="menu">
        <div class="menu-close icon-close"></div>
        <div class="nav">
          <div class="nav-item">
            <i class="icon-dashboard"></i>
            <span class="nav-item-name">DASHBOARD</span>
          </div>
          <div class="nav-item active">
            <i class="icon-sitemap"></i>
            <span class="nav-item-name">AGENT</span>
          </div>
          <div class="nav-item">
            <i class="icon-boat"></i>
            <span class="nav-item-name">MY CRUISE</span>
          </div>
          <div class="nav-item">
            <i class="icon-life-bouy"></i>
            <span class="nav-item-name">HELP</span>
          </div>
        </div>
        <div class="history">
          <div class="history-title">History</div>
          <ul class="history-list">
            <li class="history-item">
              <div class="history-desc">bjstdmngbgr02/Acceptance_test</div>
              <div class="history-point"></div>
            </li>
            <li class="history-item">
              <div class="history-desc">bjstdmngbgr03/Acceptance_test</div>
              <div class="history-point"></div>
            </li>
            <li class="history-item">
              <div class="history-desc">bjstdmngbgr04/Acceptance_test</div>
              <div class="history-point"></div>
            </li>
            <li class="history-item">
              <div class="history-desc" title="bjstdmngbgr05/Acceptance_testasdasdasd">
                bjstdmngbgr05/Acceptance_testasdasdasd</div>
                <div class="history-point"></div>
            </li>
            <li class="history-item">
              <div class="history-desc">bjstdmngbgr06/Acceptance_test</div>
              <div class="history-point"></div>
            </li>
            <li class="history-item">
              <div class="history-desc">bjstdmngbgr07/Acceptance_test</div>
              <div class="history-point"></div>
            </li>
            <li class="history-item">
              <div class="history-desc">bjstdmngbgr08/Acceptance_test</div>
              <div class="history-point"></div>
            </li>
            <li class="history-item">
              <div class="history-desc">bjstdmngbgr09/Acceptance_test</div>
              <div class="history-point"></div>
            </li>
            <li class="history-item">
              <div class="history-desc">bjstdmngbgr10/Acceptance_test</div>
              <div class="history-point"></div>
            </li>
          </ul>
        </div>
      </div>
    `
  }
}

export default new Menu()
