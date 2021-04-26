import { IState } from './store/store';
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    // declare your own store states
    type State = IState

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}