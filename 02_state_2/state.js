// Class component 
class MyApp extends React.Component {
    // Contructor function
    constructor() {
        super();
        // state declaration 
        this.state = {
            title_1: "What are you studying?",
            title_2: "Learn what else?"
        };
    }

    // arrow function 
    handleButtonClick = () => {
        // change the state value 
        this.setState({
            title_1: "Learn Javascript",
            title_2: "Learn React"
        });
    }
    render() {
        return (
            <div>
                <h3>{this.state.title_1}</h3>
                <h3>{this.state.title_2}</h3>
                <button onClick={this.handleButtonCLick}>Let's Learn Progamming</button>
            </div>
        )
    }
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);