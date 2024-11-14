from writer import *

Triggers = "ID=HOUSE,LINKED_TRIGGER,NAME,DISABLED,EASY,NORMAL,HARD,PERSISTENCE"

Events = "ID=NUM,E1,E1P1,E1P2"

Actions = "ID=NUM,A1,A1P1,A1P2,A1P3,A1P4,A1P5,A1P6,A1P7,A2,A2P1,A2P2,A2P3,A2P4,A2P5,A2P6,A2P7"

Tags = "ID=PERSISTENCE,NAME,TRIGGER_ID"

Variables = "Index=VARIABLE_NAME,INITIAL_VALUE"


def Organiser(Triggers,Events,Actions,Tags,Variables):
	FinalResult = "[Triggers]\n" + Triggers + "\n[Events]\n" + Events + "\n[Actions]\n" + Actions + "\n[Tags]\n" + Tags + "\nVariables]\n" +Variables
	return (FinalResult)

FinalResult = Organiser(Triggers,Events,Actions,Tags,Variables)

TextFileWriter(FinalResult)
