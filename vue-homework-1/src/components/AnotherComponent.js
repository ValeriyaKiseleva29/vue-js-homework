export default {
    template: `
    <div>
      <h3>Это еще один компонент</h3>
      <p>Этот компонент используется внутри MyComponent</p>
      <button @click="changeTextColor">Изменить цвет текста</button>
      <p :style="{color: textColor }">Текст, который будет менять свой цвет</p>
      <input type="text" v-model="userInput" placeholder="Введите текст">
      <p>{{userInput}}</p>
      <button @click="clearInput">Очистить текст</button>
    </div>
  `,
    data(){
        return{
            textColor: 'black',
            userInput: ''
        };
    },
    methods:{
        changeTextColor(){
            const colors = ['red', 'green', 'blue'];
            this.textColor = colors[Math.floor(Math.random() * colors.length)];
        },
        clearInput(){
            this.userInput = '';
        }
    }
};
