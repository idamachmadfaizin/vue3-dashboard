import { createStore } from "vuex"

export interface IState {
    isSideNavShow: boolean,
    isSideNavEnter: boolean,
}

const state = (): IState => {
    return {
        isSideNavShow: false,
        isSideNavEnter: false,
    }
}

export const mutations = {
    toggleSidebar(state: IState): void {
        state.isSideNavShow = !state.isSideNavShow
    },
    onEnterSideNav(state: IState): void {
        state.isSideNavEnter = true
    },
    onLeaveSideNav(state: IState): void {
        state.isSideNavEnter = false
    },
}

export default createStore<IState>({
    state,
    mutations,
})