import Vue from 'vue'
import './css/style.css';
import Vitrine from "./components/Vitrine";

window.VitrineJS = (url, config = {}) => {
    return new Vue({
        el: `#${config.id ?? 'vitrine'}`,
        config: Object.assign(config, {url}),
        render: h => h(Vitrine),
    });
};


