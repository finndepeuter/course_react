import HighscoresApi from "../apis/highscores_api";

function InputForm() {
    const api = new HighscoresApi();


        return (
            <div className="highscores">
                <form onSubmit={api.add()}>
                    <input 
                       placeholder="enter your name" />
                    <button type="submit">submit</button>
                </form>
            </div>
        );
}

export default InputForm;
