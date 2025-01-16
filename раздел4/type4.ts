// Реализуйте функцию makeTurn(), которая принимает строку left или right и перемещает черепашку вперед-назад по одномерному
// массиву фиксированного размера с пятью элементами. Если черепашка выходит за пределы массива, то выбрасывается исключение.


type Turtle = 'turtle' | null;

type Game = {
  makeTurn: (direction: 'left' | 'right') => void;
  state: Array<Turtle>;
};

const startGame = (): Game => {
  const state: Array<Turtle> = ['turtle', null, null, null, null];
    function makeTurn(direction: 'left' | 'right') {
        const turtleFind = state.findIndex(item => item === 'turtle');
        if(turtleFind < 0 || turtleFind > 4){
            throw new Error('ошибка');
        }
        if(direction === 'left'){
          state.splice(turtleFind - 1, 2, 'turtle', null)
        }
        if(direction === 'right'){
          state.splice(turtleFind, 2,  null, 'turtle')
        }
    }
  // BEGIN (write your solution here)
  
  // END

  return { makeTurn, state };
};
const { makeTurn, state } = startGame();
makeTurn('right') // ERROR
console.log(state); // ['turtle', null, null, null, null]