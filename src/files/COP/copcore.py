from loader import *
from reader import *

COPWorkflow = loader("workflow.txt")
InitialFile = reader(COPWorkflow)

print("Captured text:", InitialFile)