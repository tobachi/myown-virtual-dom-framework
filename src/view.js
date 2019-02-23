
export class view {
  state = ''
  actions = {}
  vNode = new vNode()

  constructor(state, actions) {
    this.state = state
    this.actions = actions
    this.vNode = new vNode()
  }
}

/*
 * virtual dom
 */
export class vNode {
  nodeName = ''
  attributes = {}
  children = []

  constructor(nodeName, attributes, children) {
    this.nodeName = nodeName
    this.attributes = attributes
    this.children = [...children]
  }
}

/*
* create virtual DOM
*/
export function h (nodeName, attributes, children) {
  return vNode(nodeName, attributes, children)
}

// create real DOM
export function createElement (vNode) {
  const el = document.createElement(vNode.nodeName)
  setAttributes(el, vNode.attributes)
  if (Array.isArray(vNode.children))
    vNode.children.forEach(child => ((isElement(el) && el.appendChild(createElement(child)))))
  return el
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
  isNone: 1,
  isText: 2,
  isNode: 3,
  isValue: 4,
  isAttr: 5
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
  if(!oldNode || !isElement(oldNode)) {
    if (isElement(parent)) {
      parent.appendChild(createElement(newNode))
      return
    }
  }

  const target = parent.childNodes[index]

  if(!newNode || !isElement(newNode)) {
    parent.removeChild(target)
    return
  }

  const changedType = hasChanged(oldNode, newNode)
  switch (changedType) {
    case 2:
      parent.replaceChild(createElement(newNode), target)
      break
    case 3:
      parent.replaceChild(createElement(newNode), target)
      break
    case 4:
      updateValue(target, newNode.attributes.value)
      break
    case 5:
      updateAttributes(target, oldNode.attributes, newNode.attributes)
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

function isElement(obj) {
  try {
    //Using W3 DOM2 (works for FF, Opera and Chrom)
    return obj instanceof HTMLElement;
  }
  catch(e){
    //Browsers not supporting W3 DOM2 don't have HTMLElement and
    //an exception is thrown and we end up here. Testing some
    //properties that all elements have. (works on IE7)
    return (typeof obj==="object") &&
      (obj.nodeType===1) && (typeof obj.style === "object") &&
      (typeof obj.ownerDocument ==="object");
  }
}