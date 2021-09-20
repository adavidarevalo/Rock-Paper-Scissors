import paper from '../assets/images/paper.svg'
import scissors from '../assets/images/scissors.svg'
import rock from '../assets/images/rock.svg'
import lizard from '../assets/images/lizard.svg'
import spock from '../assets/images/spock.svg'

export const selecImg = (e, saveElement) => {
    switch (e) {
        case 'paper':
            saveElement(paper)
            break;
        case 'scissors':
            saveElement(scissors)
            break;
        case 'rock':
            saveElement(rock)
            break;
        case 'lizard':
            saveElement(lizard)
            break;
        case 'spock':
            saveElement(spock)
            break;
        default:
            break;
    }
}

export const ScoreLogic = (element, computer, Score, setScore, setWinLose) => {
    console.log(element, computer)
    if(element === computer){
        setWinLose('Iqual')
    } else if (element === 'paper' && computer === 'rock' ||
    element === 'paper' && computer === 'spock' ||
    element === 'rock' && computer === 'scissors' ||
    element === 'scissors' && computer === 'paper'||
    element === 'scissors' && computer === 'lizard'||
    element === 'spock' && computer === 'rock'||
    element === 'spock' && computer === 'scissors'||
    element === 'rock' && computer === 'lizard'||
    element === 'lizard' && computer === 'spock'||
    element === 'lizard' && computer === 'paper'
    ){
        setScore(Score + 1)
        setWinLose('You Win')
    } else {
        setWinLose('You Lose')
        setScore(Score - 1)
    }
}