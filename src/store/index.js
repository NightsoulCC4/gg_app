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
        login(state, data) {
            state.username = data?.username
            state.password = data?.password
            state.firstname = data?.userData?.user_info[0]?.firstname
            state.lastname = data?.userData?.user_info[0]?.lastname
            state.tel = data?.userData?.user_info[0]?.tel
            state.address = data?.userData?.user_info[0]?.address
            state.address_2 = data?.userData?.user_info[0]?.address_2
            state.bank_no = data?.userData?.bank_account[0]?.bank_no
            state.bank_type = data?.userData?.bank_name[0]?.description
        }
    },
    actions: {
        saveLogin(context, data) {

            console.log(data)

            context.commit('login', data)
        }
    },
    modules: {
    }
})
