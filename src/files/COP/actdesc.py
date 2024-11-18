from presetaction import *

def actionDescriber(SectionsList):
	ActionsList = []
	for i in range (0,len(SectionsList)):
		if SectionsList[i][0] == '[Actions]':
			for k in range (1,len(SectionsList[i])):
				ActionsList.append(SectionsList[i][k])
		else:
			continue
	print(ActionsList)
	ActionsPresetSheet = []

	for j in range (0,len(ActionsList)):
		ActionIndex = ActionsList[j].split("=")
		Action = ActionIndex[1].split(",")
		ActionsPresetSheet.append(presetAction(ActionIndex[0],Action[0],Action[1],Action[2],Action[3],Action[4],Action[5],Action[6],Action[7],Action[8]))

	return ActionsPresetSheet