import $ from 'jquery'
import agent from './index.js'

test('测试添加函数', () => {
  document.body.innerHTML = `
    <div class="tr-content-list">
      <div class="agent-add icon-plus">
        <div class="agent-modal">
          <div class="agent-modal-container">
            <div class="modal-close icon-close"></div>
            <div class="modal-title">Separate multiple resource name with commas</div>
            <div class="modal-search">
              <input class="modal-search-input" type="text">
            </div>
            <div class="modal-button">
              <div class="modal-button-add">Add Resource</div>
              <div class="modal-button-cancel">Cancel</div>
            </div>
          </div>
        </div>
      </div>
      <div class="brower-list"></div>
    </div>
  `
  agent.bindEvents()
  $('.modal-search-input').val('Chrome,Firefox')
  $('.modal-button-add').click()

  expect($('.brower-list .brower').length).toEqual(2)
  expect($('.brower-list .brower-name')[0].innerHTML).toEqual('Chrome')
  expect($('.brower-list .brower-name')[1].innerHTML).toEqual('Firefox')
})

test('测试删除函数', () => {
  document.body.innerHTML = `
    <div class="tr-content-list">
      <div class="agent-add icon-plus">
        <div class="agent-modal">
          <div class="agent-modal-container">
            <div class="modal-close icon-close"></div>
            <div class="modal-title">Separate multiple resource name with commas</div>
            <div class="modal-search">
              <input class="modal-search-input" type="text">
            </div>
            <div class="modal-button">
              <div class="modal-button-add">Add Resource</div>
              <div class="modal-button-cancel">Cancel</div>
            </div>
          </div>
        </div>
      </div>
      <div class="brower-list">
        <div class="brower">
          <span class="brower-name" title="Safari">Safari</span>
          <i class="brower-delete-icon icon-trash"></i>
        </div>
      </div>
    </div>
  `
  agent.bindEvents()
  $('.brower-delete-icon').click()

  expect($('.brower-list .brower').length).toEqual(0)
})
