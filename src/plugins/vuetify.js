import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#4E4C4C',
                secondary: '#b0bec5',
                anchor: '#8c9eff',
            },
        },
    },
});
