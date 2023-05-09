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

