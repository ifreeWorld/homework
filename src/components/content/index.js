import './index.less'
import menu from '../menu'
import cardList from '../card-list'
class Content {
  init() {
    return this.render()
  }

  render() {
    return `
      ${menu.init()}
      ${cardList.init()}
    `
  }
}

export default new Content()
