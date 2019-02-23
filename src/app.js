import { view, vNode, createElement, updateElement } from './view'

export class App {
  el = ''
  view = new view()
  state = ''
  actions = {}
  oldNode = new vNode()
  newNode = new vNode()
  skipRender = false

  constructor(params) {
    this.el = typeof params.el === 'string' ? document.querySelector(params.el) : params.el

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