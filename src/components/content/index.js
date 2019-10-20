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
      <div class="content grid-container">
        <div class="row" style="height:100%;">
          ${menu.init()}
          <div class="right-content col-xl-18 col-lg-18 col-md-24 col-sm-24">
            ${cardList.init()}
            ${agent.init()}
          </div>
        </div>
      </div>
    `
  }
}

export default new Content()
