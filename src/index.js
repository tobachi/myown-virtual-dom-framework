import { h } from './view';
import { App } from './app';
// import { ActionTree } from './action';

const state = {
  count: 0
}

const actions = {
  increment: (state) => {
    state.count++
  }
}

const view = (state, actions) => {
  return h(
    'div',
    null,
    h('p', null, state.count),
    h(
      'button',
      { type: 'button', onclick: () => actions.increment(state) },
      'count up'
    )
  )
}

new App ({ el: '#app', state, view, actions });
