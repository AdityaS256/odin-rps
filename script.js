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

    console.log("Player Choice: " + playerSelection);
    console.log("Computer choice: " + computerSelection);
    
    if (playerSelection === computerSelection) //checks if both the selections are equivalent
    {
        return "Draw!";
    }

    if (playerSelection === 'rock')
    {
        if (computerSelection === 'paper')
        {
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection === 'scissors')
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
        else if (computerSelection === 'scissors')
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
        else if (computerSelection === 'rock')
        {
            return "You Lose! Rock beats Scissors";
        }
    }
}

function game (playerChoice)
{
    let end = rps (playerChoice, getComputerChoice());

    console.log(end);
        
    alert(end);
}