import './main.less'
import './common/flexible.js'
import header from './components/header'
import footer from './components/footer'

class Main {
  init() {
    document.getElementById('app').appendChild(this.render())
  }

  render() {
    const html = `
      ${header.init()}
      ${footer.init()}
    `

    const dom = document.createElement('div')
    dom.innerHTML = html
    return dom
  }
}

const main = new Main()
main.init()
