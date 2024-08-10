/* global Vue */

import MyComponent from './components/MyComponent.js';

const sharedState = Vue.reactive({
    sharedMessage: 'Это сообщение передается между Vue объектами',
    newSharedText: 'Начальное сообщение для задания 10' // Новое свойство
});


const app = Vue.createApp({
    data() {
        return {
            message: 'Привет, мир!'
        };
    },
    methods: {
        changeMessage() {
            this.message = "Сообщение изменено!";
        },
        updateNewSharedText() {
            sharedState.newSharedText = "Новое сообщение для задания 10!";
        }
    }
});

app.component('my-component', MyComponent);
app.mount('#app');

const secondaryApp = Vue.createApp({
    computed: {
        secondaryMessage() {
            return sharedState.sharedMessage;
        },
        newMessage() {
            return sharedState.newSharedText;
        }
    },
    methods: {
        updateSecondaryMessage() {
            sharedState.sharedMessage = "Сообщение из второго Vue объекта обновлено!";
        }
    }
});

secondaryApp.mount('#secondary-app');
