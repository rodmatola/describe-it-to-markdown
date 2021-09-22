egrep -Rw 'describe|context|it' integration > cenarios.md
sed 's/:/\n/g' cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md
awk '!seen[$0]++' cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md
sed 's/\t//g' cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md
sed 's/describe(/# Cenário: /g' cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md
sed 's/context(/## **Contexto**: /g' cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md
sed 's/it(/1. ## /g' cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md
sed 's/it.only(/1. ## /g' cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md
sed 's/it.skip(/1. ## (pendente)/g' cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md
sed 's/xit(/1. ## (pendente)/g' cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md
sed 's/,.*$//' cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md
sed "s/'//g" cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md
