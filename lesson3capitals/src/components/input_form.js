import { Link, useNavigate } from "react-router-dom";
import HighscoresApi from "../apis/highscores_api";
import { useState } from "react";

function InputForm({score}) {
    const api = new HighscoresApi();
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Add the new high score to the list
        api.add(name, score);
    
        // Navigate back to the main menu
        navigate("/");
      };

        return (
            <div className="highscores">
                {/* <p>The end! Your score: {score}/5</p> */}
                <form onSubmit={handleSubmit}>
                    <input 
                       placeholder="enter your name"
                       onChange={(e) => setName(e.target.value)}
                       value={name}
                       type="text" />
                    <button type="submit">submit</button>
                </form>
                <Link to="/">back</Link>
            </div>
        );
}

export default InputForm;
