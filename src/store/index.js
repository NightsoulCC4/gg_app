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
            state.credit = data?.userData?.user[0]?.credit
        },
        updateCredit(state, data) {
            state.credit = data?.credit
        }
    },
    actions: {
        saveLogin(context, data) {

            localStorage.setItem("token", data?.userData?.token)

            context.commit('login', data)
        },
        updateCredit(context, data) {
            context.commit('updateCredit', data);
        }
    },
    modules: {
    }
})
