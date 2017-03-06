import addTemplate from './app.html';

export default addTemplate({
    data () {
        return {
            text: 'Example text'
        }
    },

    methods: {
        log () {
            console.log('output log')
        }
    }
})