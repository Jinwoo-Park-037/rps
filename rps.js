

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


function playGame()
{
        
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++)
    {
        let h = getHumanChoice();
        let c = getComputerChoice();

        playRound(h, c);
    }
        

    function playRound(humanChoice, computerChoice)
    {
        if (humanChoice == "Rock")
        {
            if (computerChoice == "Paper")
            {
                computerScore++;
                console.log("You lose! Paper beats Rock!");
            }
            else if (computerChoice == "Rock")
            {
                console.log("It's a draw!");
            }
            else
            {
                humanScore++;
                console.log("You win! Rock beats Scissors!")
            }
        }
        else if (humanChoice == "Scissors")
        {
            if (computerChoice == "Paper")
            {
                humanScore++;
                console.log("You win! Scissors beat Paper!");
            }
            else if (computerChoice == "Scissors")
            {
                console.log("It's a draw!");
            }
            else
            {
                computerScore++;
                console.log("You lose! Rock beats Scissors!")
            }
        }
        else
        {
            if (computerChoice == "Rock")
                {
                    humanScore++;
                    console.log("You win! Paper beats Rock!");
                }
                else if (computerChoice == "Paper")
                {
                    console.log("It's a draw!");
                }
                else
                {
                    computerScore++;
                    console.log("You lose! Scissors beat Paper!")
                }
        }

    
    }

    

    
}


playGame();




