let humanScore = 0;
let computerScore = 0;


function getComputerChoice()
{
    let str;
    let num = Math.random() * 3;

    if (num > 2)
    {
        str = "paper";
    }
    else if (num > 1)
    {
        str = "rock";
    }
    else
    {
        str = "scissors";
    }

    return str;
}


function getHumanChoice()
{
    let choice = prompt("Rock, Paper, or Scissors?");

    return choice;
}



const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let h = button.id;
        let c = getComputerChoice();

        playRound(h, c);

        if (humanScore == 5)
        {
            const h3 = document.createElement("h3");
            h3.textContent = "You Win!";
            resultDiv.appendChild(h3);
        }
        else if (computerScore == 5){
            const h3 = document.createElement("h3");
            h3.textContent = "You Lose!";
            resultDiv.appendChild(h3);
        }
    });
});


const resultDiv = document.getElementById("results");


function playRound(humanChoice, computerChoice)
{
    if (!document.getElementById("result"))
    {
        const resultText = document.createElement("p");
        resultText.setAttribute("id", "result");
        
        const scores = document.createElement("p");
        scores.setAttribute("id", "scores");

        scores.textContent = "Player: 0 \n Computer: 0";
        resultDiv.appendChild(resultText);
        resultDiv.appendChild(scores);
        
    }

    const resultText = document.getElementById("result");
    const scores = document.getElementById("scores");

    
    if (humanChoice == "rock")
    {
        if (computerChoice == "Paper")
        {
            computerScore++;
            resultText.textContent = "You lose! Paper beats Rock!";
            scores.textContent = `Player: ${humanScore} \n Computer: ${computerScore}`;
        }
        else if (computerChoice == "Rock")
        {
            resultText.textContent = "It's a draw!";
        }
        else
        {
            humanScore++;
            resultText.textContent = "You win! Rock beats Scissors!";
            scores.textContent = `Player: ${humanScore} \n Computer: ${computerScore}`;
        }
    }
    else if (humanChoice == "scissors")
    {
        if (computerChoice == "Paper")
        {
            humanScore++;
            resultText.textContent = "You win! Scissors beat Paper!";
            scores.textContent = `Player: ${humanScore} \n Computer: ${computerScore}`;
        }
        else if (computerChoice == "Scissors")
        {
            resultText.textContent = "It's a draw!";
        }
        else
        {
            computerScore++;
            resultText.textContent = "You lose! Rock beats Scissors!";
            scores.textContent = `Player: ${humanScore} \n Computer: ${computerScore}`;
        }
    }
    else
    {
        if (computerChoice == "Rock")
            {
                humanScore++;
                resultText.textContent = "You win! Paper beats Rock!";
                scores.textContent = `Player: ${humanScore} \n Computer: ${computerScore}`;
            }
            else if (computerChoice == "Paper")
            {
                resultText.textContent = "It's a draw!";
            }
            else
            {
                computerScore++;
                resultText.textContent = "You lose! Scissors beat Paper!";
                scores.textContent = `Player: ${humanScore} \n Computer: ${computerScore}`;
            }
    }



    

    
}






