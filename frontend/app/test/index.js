import template from './temp.html';

class Test {
    data () {
        return {
            msg: 'Hello world!'
        }
    }
}

export default template(Test);