import sys
import json
import ast

alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

text = ast.literal_eval(sys.argv[1])
shift = int(ast.literal_eval(sys.argv[2]))
direction = ast.literal_eval(sys.argv[3])
shift = shift % 26

new_word = ""
if direction == "decode":
    shift = shift * -1
for n in text:
    if n == " ":
        new_word += " "
        continue
    if n.isnumeric():
        new_word += n
        continue
    if n >= 'a' and n <= 'z':
        index = alphabet.index(n)
        n1 = index + shift
        new_word += alphabet[n1]
    else:
        new_word += n
        continue

# print(f"The {direction}ed word is {new_word}\n")

data_to_resend = new_word

json.dumps(data_to_resend)