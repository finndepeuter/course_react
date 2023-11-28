import { Link, useNavigate } from 'react-router-dom';
import  HighscoresApi  from '../apis/highscores_api';

function Highscores() {
    const navigate = useNavigate();
    // api needs to be instantiated because the functions aren't static
    const api = new HighscoresApi();
    const scores = api.all().slice(0,5).map( (score, index) => {
        return (
            <li key={index}>
                {score.player} - {score.score}
            </li>
        );
    });

    return (
        <div>
            <h2>Highscores</h2>
            <ol>
                {scores}
            </ol>
            <Link onClick={() => navigate(-1)}>Back</Link>
        </div>
    );
}

export default Highscores;