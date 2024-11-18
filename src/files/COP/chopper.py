from scripter import *

def TriggerChopper(CapturedTriggers):
	FirstSplit = []
	TriggerIDList = []
	TriggerHouseList = []
	TriggerLinkedTriggerList = []
	TriggerNameList = []
	TriggerDisabledList = []
	TriggerEasyList = []
	TriggerNormalList = []
	TriggerHardList = []
	TriggerPersistenceList = []
	for i in range (0,len(CapturedTriggers)):
		FirstSplit.append(CapturedTriggers[i].split("="))
		TriggerIDList.append(FirstSplit[i][0])
		TriggerHouseList.append(FirstSplit[i][1].split(",")[0])
		TriggerLinkedTriggerList.append(FirstSplit[i][1].split(",")[1])
		TriggerNameList.append(FirstSplit[i][1].split(",")[2])
		TriggerDisabledList.append(FirstSplit[i][1].split(",")[3])
		TriggerEasyList.append(FirstSplit[i][1].split(",")[4])
		TriggerNormalList.append(FirstSplit[i][1].split(",")[5])
		TriggerHardList.append(FirstSplit[i][1].split(",")[6])
		TriggerPersistenceList.append(FirstSplit[i][1].split(",")[7])

	TriggersList = []
	for j in range (0,len(CapturedTriggers)):
		ID = TriggerIDList[j]
		House = TriggerHouseList[j]
		LinkedTrigger = TriggerLinkedTriggerList[j]
		Name = TriggerNameList[j]
		Disabled = TriggerDisabledList[j]
		Easy = TriggerEasyList[j]
		Normal = TriggerNormalList[j]
		Hard = TriggerHardList[j]
		Persistence = TriggerPersistenceList[j]
		Trigger = Triggers(ID,House,LinkedTrigger,Name,Disabled,Easy,Normal,Hard,Persistence)
		TriggersList.append(Trigger)
	return TriggersList

def EventChopper(CapturedEvents):
	FirstSplit = []
	EventIDList = []
	SecondSplit = []
	EventQuantityList = []
	for i in range (0,len(CapturedEvents)):
		FirstSplit.append(CapturedEvents[i].split("="))
		EventIDList.append(CapturedEvents[i][0])
		SecondSplit.append(CapturedEvents[i][1])
	for j in range (0,len(CapturedEvents)):
		EventQuantityList.append(SecondSplit[i].split(",")[0])
		if 