export default {
    namespaced: true,
    state: {
        name: '张三',
        age: 5
    },
    mutations: {
        changeAge(state, payload) {
            state.age = payload
        }
    },
    getters: {
        name(state) {
            return `${state.name}今年${state.age}岁`
        }
    },
    actions: {
        changeAge({ commit }, payload) {
            setTimeout(() => {
                commit('changeAge', payload)
            }, 1000)
        }
    },
}