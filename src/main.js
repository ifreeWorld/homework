import './main.less'
import './common/flexible.js'
import header from './components/header'

class Main {
  init() {
    document.getElementById('app').appendChild(this.render())
  }

  render() {
    return `
      ${header.init()}
    `
  }
}

const main = new Main()
main.init()
