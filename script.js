function game (playerChoice)
{
    let end = rps (playerChoice, getComputerChoice());

    let usrpoints = document.querySelector('#usrptns');
    let compoints = document.querySelector('#comptns');

    if (end === true)
    {
        points = Number(usrpoints.textContent);
        points++;
        usrpoints.textContent = points

        if (points === 5)
        {
            alert("You Win!");
            usrpoints.textContent = 0;
            compoints.textContent = 0;
        }
    }
    else if (end === false)
    {
        points = Number(compoints.textContent);
        points++;
        compoints.textContent = points
        
        if (points === 5)
        {
            alert("You Lose!");
            usrpoints.textContent = 0;
            compoints.textContent = 0;
        }
    }

    console.log(end);
        
    alert(end);
}

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
            return false;
        }
        else if (computerSelection === 'scissors')
        {
            return true;
        }
    }
    else if (playerSelection === 'paper')
    {
        if (computerSelection === 'rock')
        {
            return true;
        }
        else if (computerSelection === 'scissors')
        {
            return false;
        }
    }
    else //playerSelection must be Scissors
    {
        if (computerSelection === 'paper')
        {
            return true;
        }
        else if (computerSelection === 'rock')
        {
            return false;
        }
    }
}