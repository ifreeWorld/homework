import './index.less'
import data from './data.json'
class Agent {
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
    if (target.classList.contains('agent-add')) {
      this.showModal(target)
    } else if (target.classList.contains('modal-close')) {
      this.closeModal(target)
    } else if (target.classList.contains('modal-button-cancel')) {
      this.cancel(target)
    } else if (target.classList.contains('modal-button-add')) {
      this.add(target)
    } else if (target.classList.contains('brower-delete-icon')) {
      this.delete(target)
    }
  }

  showModal(target) {
    const modals = document.querySelectorAll('.agent-modal')
    for (let i = 0; i < modals.length; i++) {
      const item = modals[i]
      item.classList.remove('active')
      const inputDom = this.find(item, 'modal-search-input')[0]
      inputDom.value = ''
    }
    const modal = this.find(target, 'agent-modal')[0]
    modal.classList.add('active')
  }

  closeModal(target) {
    const modal = target.parentNode.parentNode
    modal.classList.remove('active')
    const inputs = document.querySelectorAll('.modal-search-input')
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i]
      input.value = ''
    }
  }

  cancel(target) {
    const modal = target.parentNode.parentNode.parentNode
    modal.classList.remove('active')
    const inputs = document.querySelectorAll('.modal-search-input')
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i]
      input.value = ''
    }
  }

  add(target) {
    const modal = target.parentNode.parentNode.parentNode
    const inputDom = this.find(modal, 'modal-search-input')[0]
    const value = inputDom.value || ''
    const strArr = value.split(',') || []
    const list = modal.parentNode.parentNode
    const browers = this.find(list, 'brower-list')[0]
    strArr.forEach(str => {
      if (str) {
        const html = `
              <span class="brower-name" title="${str}">${str}</span>
              <i class="brower-delete-icon icon-trash"></i>
            `
        const brower = document.createElement('div')
        brower.className = 'brower'
        brower.innerHTML = html
        browers.appendChild(brower)
      }
    })
    modal.classList.remove('active')
    const inputs = document.querySelectorAll('.modal-search-input')
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i]
      input.value = ''
    }
  }

  delete(target) {
    const brower = target.parentNode
    console.log(navigator.userAgent)
    // IE不支持remove()方法
    if (navigator.userAgent.indexOf('IE') !== -1) {
      brower.parentNode.removeChild(brower)
    } else {
      brower.remove()
    }
  }

  find(parent, label) {
    const result = []
    return this.findRecursion(parent, label, result)
  }

  findRecursion(parent, label, result) {
    for (let i = 0; i < parent.children.length; i++) {
      if (
        [].indexOf.call(parent.children[i].classList, label) !== -1 ||
        parent.children[i].id === label ||
        parent.children[i].tagName === label
      ) {
        result.push(parent.children[i])
      }

      this.findRecursion(parent.children[i], label, result)
    }
    return result
  }

  render() {
    return `
      <div class="agent">
        <div class="agent-tabs">
          <div class="agent-search">
            <i class="agent-search-icon icon-search"></i>
            <input id="agent-search-input" class="agent-search-input" type="text" />
          </div>
          <div class="agent-items">
            <div class="agent-tab active">All</div>
            <div class="agent-tab">Physical</div>
            <div class="agent-tab">Virtual</div>
          </div>
          <div class="agent-icons">
            <i class="agent-icon icon-th-card"></i>
            <i class="agent-icon icon-th-list active"></i>
          </div>
        </div>
        <div class="agent-list">
          ${this.renderTr()}
        </div>
      </div>
    `
  }

  renderTr() {
    const html = data.map(item => {
      return `
        <div class="agent-list-tr ${this.getTag(item.status)} ${item.deny ? 'deny' : ''}">
          <div class="tr-large-icon ${item.system}"></div>
          <div class="tr-content">
            <div class="tr-content-top">
              <div class="tr-content-name">
                <i class="icon-desktop"></i>
                <span class="name">${item.name}</span>
              </div>
              <div class="tr-content-tag">
                <div class="tag ${this.getTag(item.status)}">${this.getTag(
  item.status
)}</div>
              </div>
              <div class="tr-content-ip">
                <i class="icon-info"></i>
                <span class="ip">${item.ip}</span>
              </div>
              <div class="tr-content-path">
                <i class="icon-folder"></i>
                <span class="path">${item.path}</span>
              </div>
            </div>
            <div class="tr-content-list">
              <div class="agent-add icon-plus">
                <div class="agent-modal">
                  <div class="agent-modal-container">
                    <div class="modal-close icon-close"></div>
                    <div class="modal-title">Separate multiple resource name with commas</div>
                    <div class="modal-search">
                      <input class="modal-search-input" type="text" />
                    </div>
                    <div class="modal-button">
                      <div class="modal-button-add">Add Resource</div>
                      <div class="modal-button-cancel">Cancel</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="brower-list">
                ${item.browers.map(brower => {
    return `
                    <div class="brower">
                      <span class="brower-name" title="${brower}">${brower}</span>
                      <i class="brower-delete-icon icon-trash"></i>
                    </div>
                  `
  }).join('')}
              </div>
              ${item.deny ? `
                <div class="deny">
                  <i class="icon-deny"></i>
                  <span>Deny</span>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `
    })

    return html.join('')
  }

  getTag(status) {
    if (status === 1) {
      return 'idle'
    } else if (status === 0) {
      return 'building'
    }
  }
}

export default new Agent()
