egrep -Rw 'describe|context|it' integration > scenarios.md
sed 's/:/\n/g' scenarios.md > scenariostemp.md && mv scenariostemp.md scenarios.md
awk '!seen[$0]++' scenarios.md > scenariostemp.md && mv scenariostemp.md scenarios.md
sed 's/\t//g' scenarios.md > scenariostemp.md && mv scenariostemp.md scenarios.md
sed 's/describe(/# Scenario: /g' scenarios.md > scenariostemp.md && mv scenariostemp.md scenarios.md
sed 's/context(/## **Context**: /g' scenarios.md > scenariostemp.md && mv scenariostemp.md scenarios.md
sed 's/it(/1. ## /g' scenarios.md > scenariostemp.md && mv scenariostemp.md scenarios.md
sed 's/it.only(/1. ## /g' scenarios.md > scenariostemp.md && mv scenariostemp.md scenarios.md
sed 's/it.skip(/1. ## (pending)/g' scenarios.md > scenariostemp.md && mv scenariostemp.md scenarios.md
sed 's/xit(/1. ## (pending)/g' scenarios.md > scenariostemp.md && mv scenariostemp.md scenarios.md
sed 's/,.*$//' scenarios.md > scenariostemp.md && mv scenariostemp.md scenarios.md
sed "s/'//g" scenarios.md > scenariostemp.md && mv scenariostemp.md scenarios.md
