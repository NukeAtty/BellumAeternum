class Triggers:
	def __init__(ID,House,LinkedTrigger,Disabled,Easy,Normal,Hard,Persistence):
		self.ID = ID
		self.LinkedTrigger = LinkedTrigger
		self.Disabled = Disabled
		self.Easy = Easy
		self.Normal = Normal
		self.Hard = Hard
		self.Persistence = Persistence

	def printTrigger(self):
    print("ID: " + self.name + "\nLinked Trigger:" + self.LinkedTrigger + "\nInitially Disabled: " + self.Disabled + "\nEasy mode available: " + self.Easy + "\nNormal mode available: " + self.Normal + "\nHard mode available: " + self.Hard + "\nPersistence: " + self.Persistence)