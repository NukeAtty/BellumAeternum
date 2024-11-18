class presetAction:
	def __init__(self,index,name,description,p1,p2,p3,p4,p5,p6,p7):
		self.index = index
		self.name = name
		self.description = description
		self.p1 = p1
		self.p2 = p2
		self.p3 = p3
		self.p4 = p4
		self.p5 = p5
		self.p6 = p6
		self.p7 = p7

	def getPresetActions(self):
		print(self.index + ":" + self.name + " | " + self.description + " | " + self.p1 + " | " + self.p2 + " | " + self.p3 + " | " + self.p4 + " | " + self.p5 + " | " + self.p6 + " | " + self.p7 + " | ")