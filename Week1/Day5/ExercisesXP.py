# ==========================================
# Tic Tac Toe Game 
# ==========================================


# Step 1: Representing the Game Board

def create_board():
    return [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]


# Step 2: Displaying the Game Board

def display_board(board):
    print("\n")
    print("   0   1   2")
    print("0  " + " | ".join(board[0]))
    print("  ---+---+---")
    print("1  " + " | ".join(board[1]))
    print("  ---+---+---")
    print("2  " + " | ".join(board[2]))
    print("\n")


# Step 3: Getting Player Input

def player_input(player, board):

    while True:
        try:
            row = int(input(f"Player {player}, enter row (0-2): "))
            col = int(input(f"Player {player}, enter column (0-2): "))

            if row < 0 or row > 2 or col < 0 or col > 2:
                print("Invalid position. Choose numbers between 0 and 2.")

            elif board[row][col] != " ":
                print("This position is already occupied. Try again.")

            else:
                return row, col

        except ValueError:
            print("Please enter numbers only.")


# Step 4: Checking for a Winner

def check_win(board, player):

    # Check rows
    for row in board:
        if row[0] == player and row[1] == player and row[2] == player:
            return True

    # Check columns
    for col in range(3):
        if board[0][col] == player and board[1][col] == player and board[2][col] == player:
            return True

    # Check diagonals
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True

    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True

    return False


# Step 5: Checking for a Tie

def check_tie(board):

    for row in board:
        if " " in row:
            return False

    return True


# Step 6: The Main Game Loop

def play():

    board = create_board()

    current_player = "X"

    while True:

        display_board(board)

        row, col = player_input(current_player, board)

        board[row][col] = current_player


        # Check Winner
        if check_win(board, current_player):

            display_board(board)
            print(f"Player {current_player} wins!")
            break


        # Check Tie
        if check_tie(board):

            display_board(board)
            print("It's a tie!")
            break


        # Switch Player

        if current_player == "X":
            current_player = "O"

        else:
            current_player = "X"


# Start Game

play()