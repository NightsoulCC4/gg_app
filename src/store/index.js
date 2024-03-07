import { createStore } from 'vuex'

export default createStore({
    state: {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        tel: '',
        address: '',
        address_2: '',
        bank_no: '',
        bank_type: ''
    },
    getters: {
    },
    mutations: {
        login(state, value) {

            console.log(value)

            state.username = value.username
            state.password = value.password
            state.firstname = value.firstname
            state.lastname = value.lastname
            state.tel = value.tel
            state.address = value.address
            state.address_2 = value.address_2
            state.bank_no = value.bank_no
            state.bank_type = value.bank_type
        }
    },
    actions: {
        saveLogin(context, data) {
            context.commit('login', data)
        }
    },
    modules: {
    }
})
