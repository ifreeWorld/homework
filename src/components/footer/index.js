import './index.less'
class Footer {
  init() {
    return this.render()
  }

  render() {
    return `
      <div class="footer">
        <i class="copyright"></i>
        Copyright 2017 ThoughtWorks
      </div>
    `
  }
}

export default new Footer()
