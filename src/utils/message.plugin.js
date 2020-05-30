import messages from './messages'

export default {
    install(Vue, options) {
        Vue.prototype.$message = function (text) {
            if(messages[text])
                M.toast({html: messages[text]})
            
        }
        
        Vue.prototype.$textMessage = function (text) {
                M.toast({html: text})
        }

        Vue.prototype.$error = function (text) {
            if (!messages[text]) {
                M.toast({
                    html: `<font size="3" color="red" face="Arial">[Ошибка]: </font>Что то пошло не так`
                })
            } else {
                M.toast({
                    html: `<font size="3" color="red" face="Arial">[Ошибка]: </font>${messages[text]}`
                })
            }
        }
    }
}