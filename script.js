function game (playerChoice)
{
    let computerChoice = getComputerChoice();
    
    let end = rps (playerChoice, computerChoice);

    let usrpoints = document.querySelector('#usrptns');
    let compoints = document.querySelector('#comptns');

    display(playerChoice, computerChoice, end);

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
}

function display (playerChoice, computerChoice, gameResult)
{
    let user = document.querySelector('#usrchoice');
    let comp = document.querySelector('#comchoice');

    setTimeout(() => {
        if (playerChoice === 'rock')
        {
            user.innerHTML = '<svg id="usergame" xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 448 512"><path d="M144 64c0-8.8 7.2-16 16-16s16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16V264c0 31.3-20 58-48 67.9c-9.6 3.4-16 12.5-16 22.6V488c0 13.3 10.7 24 24 24s24-10.7 24-24V370.2c38-20.1 64-60.1 64-106.2V160c0-35.3-28.7-64-64-64c-2.8 0-5.6 .2-8.3 .5C332.8 77.1 311.9 64 288 64c-2.8 0-5.6 .2-8.3 .5C268.8 45.1 247.9 32 224 32c-2.8 0-5.6 .2-8.3 .5C204.8 13.1 183.9 0 160 0C124.7 0 96 28.7 96 64v64.3c-11.7 7.4-22.5 16.4-32 26.9l17.8 16.1L64 155.2l-9.4 10.5C40 181.8 32 202.8 32 224.6v12.8c0 49.6 24.2 96.1 64.8 124.5l13.8-19.7L96.8 361.9l8.9 6.2c6.9 4.8 14.4 8.6 22.3 11.3V488c0 13.3 10.7 24 24 24s24-10.7 24-24V359.9c0-12.6-9.8-23.1-22.4-23.9c-7.3-.5-14.3-2.9-20.3-7.1l-13.1 18.7 13.1-18.7-8.9-6.2C96.6 303.1 80 271.3 80 237.4V224.6c0-9.9 3.7-19.4 10.3-26.8l9.4-10.5c3.8-4.2 7.9-8.1 12.3-11.6V208c0 8.8 7.2 16 16 16s16-7.2 16-16V142.3 128 64z"/></svg>';
        }
        else if (playerChoice === 'paper')
        {
            user.innerHTML = '<svg id="usergame" xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 512 512"><path d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z"/></svg>';
        }
        else if (playerChoice === 'scissors')
        {
            user.innerHTML = '<svg id="usergame" xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 512 512"><path d="M.2 276.3c-1.2-35.3 26.4-65 61.7-66.2l3.3-.1L57 208.1C22.5 200.5 .7 166.3 8.3 131.8S50.2 75.5 84.7 83.2l173 38.3c2.3-2.9 4.7-5.7 7.1-8.5l18.4-20.3C299.9 74.5 323.5 64 348.3 64l10.2 0c54.1 0 104.1 28.7 131.3 75.4l1.5 2.6c13.6 23.2 20.7 49.7 20.7 76.6L512 344c0 66.3-53.7 120-120 120l-8 0-96 0c-35.3 0-64-28.7-64-64c0-2.8 .2-5.6 .5-8.3c-19.4-11-32.5-31.8-32.5-55.7c0-.8 0-1.6 0-2.4L66.4 338c-35.3 1.2-65-26.4-66.2-61.7zm63.4-18.2c-8.8 .3-15.7 7.7-15.4 16.5s7.7 15.7 16.5 15.4l161.5-5.6c9.8-.3 18.7 5.3 22.7 14.2s2.2 19.3-4.5 26.4c-2.8 2.9-4.4 6.7-4.4 11c0 8.8 7.2 16 16 16c9.1 0 17.4 5.1 21.5 13.3s3.2 17.9-2.3 25.1c-2 2.7-3.2 6-3.2 9.6c0 8.8 7.2 16 16 16l96 0 8 0c39.8 0 72-32.2 72-72l0-125.4c0-18.4-4.9-36.5-14.2-52.4l-1.5-2.6c-18.6-32-52.8-51.6-89.8-51.6l-10.2 0c-11.3 0-22 4.8-29.6 13.1l-17.5-15.9 17.5 15.9-18.4 20.3c-.6 .6-1.1 1.3-1.7 1.9l57 13.2c8.6 2 14 10.6 12 19.2s-10.6 14-19.2 12l-85.6-19.7L74.3 130c-8.6-1.9-17.2 3.5-19.1 12.2s3.5 17.2 12.2 19.1l187.5 41.6c10.2 2.3 17.8 10.9 18.7 21.4l.1 1c.6 6.6-1.5 13.1-5.8 18.1s-10.6 7.9-17.2 8.2L63.6 258.1z"/></svg>';
        }    
    
        if (computerChoice === 'rock')
        {
            comp.innerHTML = '<svg id="compgame" xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 448 512"><path d="M144 64c0-8.8 7.2-16 16-16s16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16V264c0 31.3-20 58-48 67.9c-9.6 3.4-16 12.5-16 22.6V488c0 13.3 10.7 24 24 24s24-10.7 24-24V370.2c38-20.1 64-60.1 64-106.2V160c0-35.3-28.7-64-64-64c-2.8 0-5.6 .2-8.3 .5C332.8 77.1 311.9 64 288 64c-2.8 0-5.6 .2-8.3 .5C268.8 45.1 247.9 32 224 32c-2.8 0-5.6 .2-8.3 .5C204.8 13.1 183.9 0 160 0C124.7 0 96 28.7 96 64v64.3c-11.7 7.4-22.5 16.4-32 26.9l17.8 16.1L64 155.2l-9.4 10.5C40 181.8 32 202.8 32 224.6v12.8c0 49.6 24.2 96.1 64.8 124.5l13.8-19.7L96.8 361.9l8.9 6.2c6.9 4.8 14.4 8.6 22.3 11.3V488c0 13.3 10.7 24 24 24s24-10.7 24-24V359.9c0-12.6-9.8-23.1-22.4-23.9c-7.3-.5-14.3-2.9-20.3-7.1l-13.1 18.7 13.1-18.7-8.9-6.2C96.6 303.1 80 271.3 80 237.4V224.6c0-9.9 3.7-19.4 10.3-26.8l9.4-10.5c3.8-4.2 7.9-8.1 12.3-11.6V208c0 8.8 7.2 16 16 16s16-7.2 16-16V142.3 128 64z"/></svg>';
        }
        else if (computerChoice === 'paper')
        {
            comp.innerHTML = '<svg id="compgame" xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 512 512"><path d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z"/></svg>';
        }
        else if (computerChoice === 'scissors')
        {
            comp.innerHTML = '<svg id="compgame" xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 512 512"><path d="M.2 276.3c-1.2-35.3 26.4-65 61.7-66.2l3.3-.1L57 208.1C22.5 200.5 .7 166.3 8.3 131.8S50.2 75.5 84.7 83.2l173 38.3c2.3-2.9 4.7-5.7 7.1-8.5l18.4-20.3C299.9 74.5 323.5 64 348.3 64l10.2 0c54.1 0 104.1 28.7 131.3 75.4l1.5 2.6c13.6 23.2 20.7 49.7 20.7 76.6L512 344c0 66.3-53.7 120-120 120l-8 0-96 0c-35.3 0-64-28.7-64-64c0-2.8 .2-5.6 .5-8.3c-19.4-11-32.5-31.8-32.5-55.7c0-.8 0-1.6 0-2.4L66.4 338c-35.3 1.2-65-26.4-66.2-61.7zm63.4-18.2c-8.8 .3-15.7 7.7-15.4 16.5s7.7 15.7 16.5 15.4l161.5-5.6c9.8-.3 18.7 5.3 22.7 14.2s2.2 19.3-4.5 26.4c-2.8 2.9-4.4 6.7-4.4 11c0 8.8 7.2 16 16 16c9.1 0 17.4 5.1 21.5 13.3s3.2 17.9-2.3 25.1c-2 2.7-3.2 6-3.2 9.6c0 8.8 7.2 16 16 16l96 0 8 0c39.8 0 72-32.2 72-72l0-125.4c0-18.4-4.9-36.5-14.2-52.4l-1.5-2.6c-18.6-32-52.8-51.6-89.8-51.6l-10.2 0c-11.3 0-22 4.8-29.6 13.1l-17.5-15.9 17.5 15.9-18.4 20.3c-.6 .6-1.1 1.3-1.7 1.9l57 13.2c8.6 2 14 10.6 12 19.2s-10.6 14-19.2 12l-85.6-19.7L74.3 130c-8.6-1.9-17.2 3.5-19.1 12.2s3.5 17.2 12.2 19.1l187.5 41.6c10.2 2.3 17.8 10.9 18.7 21.4l.1 1c.6 6.6-1.5 13.1-5.8 18.1s-10.6 7.9-17.2 8.2L63.6 258.1z"/></svg>';
        }
    
        let playerSelection = document.querySelector('#usergame');
        let computerSelection = document.querySelector('#compgame');

        playerSelection.setAttribute('fill', 'rgba(255, 255, 255, 0.5)');
        computerSelection.setAttribute('fill', 'rgba(255, 255, 255, 0.5)');

        setTimeout(() => {
            if (gameResult === "Draw!")
            {
                playerSelection.setAttribute('fill', 'rgb(129, 140, 248)');
                computerSelection.setAttribute('fill', 'rgb(129, 140, 248)');
            }
            else if (gameResult === true)
            {
                playerSelection.setAttribute('fill', 'rgb(16, 185, 129)');
                computerSelection.setAttribute('fill', 'rgb(244, 63, 94)');
                computerSelection.setAttribute('height', '114');
                computerSelection.setAttribute('opacity', '0.5');
            }
            else if (gameResult === false)
            {
                playerSelection.setAttribute('fill', 'rgb(244, 63, 94)');
                computerSelection.setAttribute('fill', 'rgb(16, 185, 129)');
                playerSelection.setAttribute('height', '114');
                playerSelection.setAttribute('opacity', '0.5');
            }
        }, 500);
    }, 250);



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