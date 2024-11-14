from loader import *
from reader import *
from chopper import *
from scripter import *

COPWorkflow = loader("workflow.txt")
InitialFile = reader(COPWorkflow)
Triggers = TriggerChopper(InitialFile)

for x in range (0, len(Triggers)):
	Triggers[x].printTrigger()
