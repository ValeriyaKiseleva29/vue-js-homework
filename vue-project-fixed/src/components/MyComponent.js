
import AnotherComponent from './AnotherComponent.js';

export default {
    template: `
      <div>
        <h2>Новый компонент</h2>
        <p>{{ message }}</p>
        <input type="text" v-model="userInput" placeholder="Введите текст" />
        <p>Вы ввели: {{ userInput }}</p>
        <another-component></another-component>
      </div>
    `,
    data() {
        return {
            message: 'Привет!',
            userInput: ''
        };
    },
    components: {
        'another-component': AnotherComponent
    }
};
