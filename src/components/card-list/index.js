import './index.less'
class CardList {
  init() {
    return this.render()
  }

  render() {
    return `
      <div class="card-list">
        <div class="card">
          <div class="card-name">Building</div>
          <div class="card-count">3</div>
          <div class="card-icon icon-cog rotate"></div>
        </div>
        <div class="card">
          <div class="card-name">ldle</div>
          <div class="card-count">5</div>
          <div class="card-icon icon-coffee"></div>
        </div>
        <div class="card">
          <div class="card-item">
            <div class="card-title">ALL</div>
            <div class="card-num">8</div>
          </div>
          <div class="card-item">
            <div class="card-title">PHYSICAL</div>
            <div class="card-num">4</div>
          </div>
          <div class="card-item">
            <div class="card-title">VIRTUAL</div>
            <div class="card-num">4</div>
          </div>
        </div>
      </div>
    `
  }
}

export default new CardList()
