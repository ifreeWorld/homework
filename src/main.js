import './main.less'
import './common/flexible.js'
import header from './components/header'
import footer from './components/footer'
import content from './components/content'

class Main {
  init() {
    document.getElementById('app').appendChild(this.render())
    window.onload = function() {
      document.body.classList.remove('preload')
    }
  }

  render() {
    const html = `
      ${header.init()}
      ${footer.init()}
      ${content.init()}
    `

    const dom = document.createElement('div')
    dom.innerHTML = html
    return dom
  }
}

const main = new Main()
main.init()
