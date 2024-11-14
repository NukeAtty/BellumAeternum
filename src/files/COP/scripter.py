class Triggers:
	def __init__(self, ID,House,LinkedTrigger,Name,Disabled,Easy,Normal,Hard,Persistence):
		self.ID = ID
		self.House = House
		self.LinkedTrigger = LinkedTrigger
		self.Name = Name
		self.Disabled = Disabled
		self.Easy = Easy
		self.Normal = Normal
		self.Hard = Hard
		self.Persistence = Persistence

	def printTrigger(self):
		print("ID: " + self.ID + "\nBelonging: " + self.House + "\nLinked Trigger:" + self.LinkedTrigger + "\nTriggerName: " + self.Name + "\nInitially Disabled: " + self.Disabled + "\nEasy mode available: " + self.Easy + "\nNormal mode available: " + self.Normal + "\nHard mode available: " + self.Hard + "\nPersistence: " + self.Persistence)