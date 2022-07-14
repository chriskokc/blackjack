# Blackjack

## Description
CK Casino: https://chriskokc.github.io/blackjack/

CK Casino is your place for playing Blackjack! This web game has been designed according to the following game rules.

## Game rules
- There are two players in the game: a Dealer and a Player
- A deck of 52 cards were used and two cards would be drawn to the players
- Assume there is infinite supply of cards in our deck, and so probablitity of a specific card drawn would not need to be considered when playing the game
- One card on the Dealer side would be hidden
- Ace would be counted as either 1 or 11
- This game decides which side wins by comparing the score of players:
    - If dealer got a Blackjack (i.e an Ace with a J, Q or K), he would win in the first round
    - If player got a Blackjack and dealer did not get it, player would win in the first round
    - If the above did not happen, player would play the game first 
    - Player would draw a card and his score would be reviewed each round
    - If Player got a score greater than 21 (i.e a bust), dealer would win 
    - If Player was happy with the cards on hand and chose to `Stand`, the game would switch to dealer's turn to play
    - As a rule, dealer was required to keep drawing cards if his value was less than 16
    - If dealer did not get a bust, the final scores of both players would be reviewed
    - The winning side would be determined by comparing who had a higher score
    - £10 would be awarded to the winning side
    - £10 would be lost for another side 

## Design and Layout
- Structure:
    - In the HTML, simple display like bet amount, buttons were added into different containers.

- Layout:
    - The card container employed grid layout system to display the card.
    - Components were separated out into different SCSS modules.

## Viewport
- <em>Mobile view</em>:
- <em>Tablet view</em>:
- <em>Desktop view</em>:

## User Interaction
- User plays the game by pressing the `Start` button
- `Hit` button allows user to draw a card each round
- User hits `Stand` button when he is happy with his cards and pass the turn over to the dealer

## Game and functionalities
The JavaScript code was broken down into three separate JS files: `cards.js`, `game.js` and `script.js`. The purpose is to have different modules handle different functionalities. The `card.js` handles user input like drawing cards, displaying a card. The `game.js` handles the game logic as follow:
- when the player clicks `Start`, two cards with randomised values are distributed to dealer and player
- only reveal the dealer's first card to the user
- create variables to keep track of scores
- game ends immediately the user's score > 21, or when there is a Blackjack:
    - if the dealer gets blackjack, then player loses,
    - else if the player gets blackjack, then dealer loses
- if an Ace is drawn, count it as 11. If score > 21, count it as 1
- for each round: let the player chooses `Hit` and draw a card
- once the player hits `Stands`, let the dealer draw card until its score > 16
- compare player and dealer's score and decide who wins by reviewing scores
- clear the score afterwards

The `script.js` handles the DOM manipulation.

## Game Play
- <em>Blackjack</em>:
- <em>Bust</em>:

## Future improvement
- Some more UI elements could be added into the game like displaying the current score to the user
- Some animations could be considered for events such as flipping the hidden card, or distributing card
- More feedback could be added to the game so that user would have a better idea why they win or lose, such as having a message like: <em>You got a Blackjack!</em>, or <em>Sorry you just went over 21</em>
