function getComputerChoice ()
{
    let computerChoice = Math.floor(Math.random() * 3) //Returns a number between 0 to 2

    if (computerChoice === 0)
    {
        return 'rock';
    }
    else if (computerChoice === 1)
    {
        return 'paper';
    }
    else
    {
        return 'scissors';
    }
}

function rps (playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase(); //converts the users choice to lowercase
    
    if (playerSelection != 'rock' || playerSelection != 'paper' || playerSelection != 'scissors') //checks if the user input is correct
    {
        alert("Invalid Choice!");
        return;
    }
    
    if (playerSelection === computerSelection) //checks if both the selections are equivalent
    {
        alert ("Draw!");
        return;
    }

    if (playerSelection === 'rock')
    {
        if (computerSelection === 'paper')
        {
            return "You Lose! Paper beats Rock";
        }
        else //computerSelection must be scissors
        {
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection === 'paper')
    {
        if (computerSelection === 'rock')
        {
            return "You Win! Paper beats Rock";
        }
        else //computerSelection must be scissors
        {
            return "You Lose! Scissors beat Paper";
        }
    }
    else //playerSelection must be Scissors
    {
        if (computerSelection === 'paper')
        {
            return "You Win! Scissors beat Paper";
        }
        else //computerSelection must be rock
        {
            return "You Lose! Rock beats Scissors";
        }
    }
}