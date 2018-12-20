import { createElement, updateElement } from './view'

export class App {
  el = ''
  view = {
    state: '',
    actions: {},
    vNode: {
      nodeName: '',
      attributes: {},
      children: []
    }
  }
  state = ''
  actions = {}
  oldNode = {
    nodeName: '',
    attributes: {},
    children: []
  }
  newNode = {
    nodeName: '',
    attributes: {},
    children: []
  }
  skipRender = false

  constructor(params) {
    try {
      this.el = document.querySelector(params.el)
    } catch (e) {
      this.el = params.el
    }

    this.view = params.view
    this.state = params.state
    this.actions = this.dispatchAction(params.actions)
    this.resolveNode()
  }

/*
 * dispatch state to action and create new virtual DOM
 */
  dispatchAction(actions) {
    const dispatched = {}
    for (let key in actions) {
      const action = actions[key];
      dispatched[key] = (state, ...data) => {
        const ret = action(state, ...data)
        this.resolveNode()
        return ret;
      };
    }
    return dispatched;
  }

/*
 * recreate virtual DOM
 */
  resolveNode() {
    this.newNode = this.view(this.state, this.actions)
    this.scheduleRender()
  }

  scheduleRender() {
    if (!this.skipRender) {
      this.skipRender = true;
      setTimeout(this.render.bind(this))
    }
  }

  render() {
    if (this.oldNode) {
      updateElement(this.el, this.oldNode, this.newNode)
    } else {
      this.el.appendChild(createElement(this.newNode))
    }

    this.oldNode = this.newNode
    this.skipRender = false
  }
}