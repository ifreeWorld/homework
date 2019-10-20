import './index.less'
import menu from '../menu'
import cardList from '../card-list'
import agent from '../agent'
class Content {
  init() {
    return this.render()
  }

  render() {
    return `
      <div class="content">
        ${menu.init()}
        <div class="right-content">
          ${cardList.init()}
          ${agent.init()}
        </div>
      </div>
    `
  }
}

export default new Content()
