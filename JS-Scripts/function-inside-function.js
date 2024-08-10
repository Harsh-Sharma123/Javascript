const App = () => {
    
    const hello = () => {
        console.log("Hello Functions!");
    }

    const addNum = (num1,  num2) => {
        return num1 + num2 ;
    }

    const mulNum = (num1, num2) => num1 * num2;

    console.log("App Function!");

    hello();

    console.log(addNum(1, 2));

    console.log(mulNum(2, 3));
}

App();