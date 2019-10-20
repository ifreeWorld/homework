import './main.less'
import './common/flexible.js'
import header from './components/header'
import footer from './components/footer'
import content from './components/content'

class Main {
  init() {
    document.getElementById('app').innerHTML = this.render()
    window.onload = function() {
      document.body.classList.remove('preload')
    }
  }

  render() {
    const html = `
      ${header.init()}
      ${content.init()}
      ${footer.init()}
    `
    return html
  }
}

const main = new Main()
main.init()
