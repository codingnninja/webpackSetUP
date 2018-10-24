import { repeat, listGroup, setInnerHTML, combineHTML, subject} from './assets/js/Html';
import compose from './assets/js/functional'
import css from './index.css'

const element = document.querySelector('#view')
const main = e => setInnerHTML(e)

const data = repeat(4, 'It is working') //return array
const content = compose(listGroup)(data)
const mainContent = combineHTML(subject, content)
main(element)(mainContent)
