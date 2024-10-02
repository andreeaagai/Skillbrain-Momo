# Comenzi utile

# Cream un repository nou: skillbrain-momo

# Comenzi de Linux utile (care merg in gitbash):

"cd git" - schimbam folderul in folderul "git"
"cd .." - schimbam folderul parinte
"ls" - vedem ce se afla in interior
"pwd" - vezi directoriul curent (path)
"CTRL + C" - abandonezi comanda

# Conexiunea cu github:

(prima data, cand cream un nou repo)

"git clone git@github....-skillbrain-momo.git" (linkul se ia din rubrica SSH)

(optional) "git remote -v" - vedem linkul de conectare la github

(optional) "git status" - sa vedem care e statusul nostru

PUSH (impingem codul local catre github. Ne straduim sa nu facem push niciodata pe branch-ul main)

1. (optional) git status

[aici trebuie sa fie curat, fara modificari active, daca sunt modificari active trebuie de renuntat la ele sau de adaugat, trebuie sa fie afisat asta: Nothing to commit, working tree clean"]

2. git checkout main

3. (optional) git pull origin main (actualizam branchul main din github in local) (se mai poate folosi comanda de git rebase)

4. git checkout -b sprint7

# Incepem lucru.

# Cand terminal lucru:

5. git add .

6. git commit -m "Add readme.md"

7. git push origin sprint7

8. [se creeaza un PR - Pull Request]

9. [se creeaza un ticket pe notion cu linkul la PR]

[se asteapta confirmarea]

[doar dupa ce exista confirmarea se apasa Merge PR]

PULL (tragem codul din remote (github) in local)

git checkout main

git pull origin main
