import { createStore } from "vuex"

export interface IState {
    sideNavShow: boolean
}

const state = (): IState => {
    return {
        sideNavShow: false
    }
}

const mutations = {
    toggleSidebar(state: IState) {
        state.sideNavShow = !state.sideNavShow
    },
}

export default createStore<IState>({
    state,
    mutations,
})