

export const view = (state, actions) => {
  return state, actions, this.vNode
}

// virtual DOM
export const vNode = {
  nodeName: '',
  attributes: {
    '': ''
  },
  children: []
}

// create virtual DOM
export function h (nodeName, attributes, ...children) {
  return this.vNode({
    nodeName : nodeName,
    attributes: attributes,
    children: children
  })
}

// create real DOM
export function createElement (vNode) {
  const el = document.createElement(vNode.nodeName)
  setAttributes(el, vNode.attributes)
  vNode.children.forEach(child => el.appendChild(createElement(child)))
}

// set attributes to target
function setAttributes (target, attrs) {
  for (let attr in attrs) {
    if(isEventAttr(attr)) {
      const eventName = attr.slice(2)
      target.addEventListener(eventName, attrs[attr])
    } else {
      target.setAttribute(attr, attrs[attr])
    }
  }
}

function isEventAttr(attr) {
  return /^on/.test(attr)
}

const changedType = {
  isNone,
  isText,
  isNode,
  isValue,
  isAttr
}

// check diff between 2 virtual DOMs
function hasChanged (a, b) {
  if (a !== b) return changedType.isText
  if (a.nodeName !== b.nodeName) return changedType.isNode
  if (a.attributes.value !== b.attributes.value) return changedType.isValue
  if (JSON.stringify(a.attributes) !== JSON.stringify(b.attributes)) return changedType.isAttr
  return changedType.isNone
}

// update real DOM
export function updateElement (parent, oldNode, newNode, index = 0) {
  if(!oldNode) {
    parent.appendChild(createElement(newNode))
    return
  }

  const target = parent.childNodes[index]

  if(!newNode) {
    parent.removeChild(target)
    return
  }

  const changedType = hasChanged(oldNode, newNode)
  switch (changedType) {
    case changedType.isText:
    case changedType.isNode:
      parent.replaceChild(createElement(newNode), target)
      return
      break
    case changedType.isValue:
      updateValue(target, newNode.attributes.value)
      return
      break
    case changedType.isAttr:
      updateAttributes(target, oldNode.attributes, newNode.attributes)
      return
      break
  }

  // execute recursively
  for (let i = 0; i < newNode.children.length || i < oldNode.children.length; i++) {
    updateElement(target, oldNode.children[i], newNode.children[i])
  }

}

function updateAttributes (target, oldAttrs, newAttrs) {
  for (let attr in oldAttrs) {
    if (!isEventAttr(attr)) {
      target.removeAttribute(attr);
    }
  }

  for (let attr in newAttrs) {
    if (!isEventAttr(attr)) {
      target.setAttribute(attr, newAttrs[attr]);
    }
  }
}

function updateValue(target, newValue) {
  target.value = newValue
}