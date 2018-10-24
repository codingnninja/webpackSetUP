import compose from './functional'

//HTML tags and attributes generator

const encodeAttribute = (x = '') =>
  x.replace(/"/g, '&quot;')

const toAttributeString = (x = {}) =>
  Object.keys(x)
    .map(attr => `${encodeAttribute(attr)}="${encodeAttribute(x[attr])}"`) 
    .join(' ')

const tagAttributes = x => (c = '') =>
  `<${x.tag}${x.attr?' ':''}${toAttributeString(x.attr)}>${c}</${x.tag}>`

const tag = x =>
  typeof x === 'string'
    ? tagAttributes({ tag: x })
    : tagAttributes(x)

//List
const listGroupTag = tag({ tag: 'ul', attr: { class: 'list-group' }})
const listGroupItem = tag({ tag: 'li', attr: { class: 'list-group-item' }})
const listGroupItems = items =>
  items.map(listGroupItem)
    .join('')

const listGroup = items =>
  listGroupTag(listGroupItems(items))

// <ul class='list-group'>
//   <li class='list-group-item'>item</li>
//   <li class='list-group-item'>Item</li>
// </ul>

//form elements
const formGroup = tag({ tag: 'div', attr: { class:'form-group col-md-6' } })
const label = tag({tag: 'label', attr: { for: "subject" }})
const input = tag({tag: 'input', attr: { class: 'form-control', name: 'subject'}})

//subject creator
const subjectLabel = label('Enter Subbject')
const subjectInputs = input('')
const scoreLabel = label('Enter Score')
const scoreInput = input('')

const combineScoreComponents = formGroup(scoreLabel + scoreInput)
const combinedSubjectComponents = formGroup(subjectLabel + scoreInput)
const subject = combinedSubjectComponents + combineScoreComponents

function makeGroupData (fn) {
  return function (data) {
    return data.map(fn)
  }
}

function repeat(time, object){
let count = 0, container =[]
 while( count < time){
   container.push(object)
   count += 1;
 }
 return container
}

const setInnerHTML = e => content => e.innerHTML = content

const combineHTML = function (...functions) {
  return functions.reduce(function(value, func){
    if (typeof func === "string") {
      return value+func
    } else if (Array.isArray(func)){
      return value+func.join(" ")
    }else{
      return value + func()
    }
  })
}

export { repeat, 
         listGroup, 
         setInnerHTML,
         subject,
         combineHTML
       }