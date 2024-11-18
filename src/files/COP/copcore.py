from loader import *
from reader import *
from chopper import *
from scripter import *
from writer import *

COPWorkflow = loader("workflow.txt")
InitialTriggers = TriggerReader(COPWorkflow)
Triggers = TriggerChopper(InitialTriggers)
InitialEvents = EventReader(COPWorkflow)
Events = EventChopper(InitialEvents)

open('output.txt', 'w').close()
for x in range (0, len(Triggers)):
	TextFileWriter(Triggers[x].getTrigger())
