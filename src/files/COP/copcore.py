from loader import *
from reader import *
from chopper import *
from scripter import *

COPWorkflow = loader("workflow.txt")
InitialTriggers = TriggerReader(COPWorkflow)
Triggers = TriggerChopper(InitialTriggers)
InitialEvents = EventReader(COPWorkflow)
Events = EventChopper(InitialEvents)

print("Triggers: ")
for x in range (0, len(Triggers)):
	Triggers[x].printTrigger()

print("Events: ")
