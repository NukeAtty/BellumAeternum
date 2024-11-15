class Triggers:
	def __init__(self,ID,House,LinkedTrigger,Name,Disabled,Easy,Normal,Hard,Persistence):
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
		print("********************\nID: " + self.ID + "\n所属方：" + self.House + "\n关联触发：" + self.LinkedTrigger + "\n触发名称：" + self.Name + "\n初始关闭：" + self.Disabled + "\n简单模式：" + self.Easy + "\n普通模式：" + self.Normal + "\n困难模式：" + self.Hard + "\n重复：" + self.Persistence)

class Event:
	def __init__(self,EventQuantity,EventNumber,EventParameter1,EventParameter2,EventParameter3):
		self.EventNumber = EventNumber
		self.EventParameter1 = EventParameter1
		self.EventParameter2 = EventParameter2
		self.EventParameter3 = EventParameter3

class Events:
	#ID1=NUM2,E1,E1P1,E1P2,E1P3,E2,E2P1,E2P2
	def __init__(self,ID,Event,EventQuantity):
		self.ID = ID
		self.Event = Event
		self.EventQuantity = EventQuantity

	def printEvents(self):
		print("********************\nID: " + self.ID + "\n")